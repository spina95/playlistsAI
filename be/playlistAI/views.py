from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import status

import openai
import re
import spotipy
import json
from spotipy.oauth2 import SpotifyClientCredentials
import django_filters
from rest_framework import status, viewsets
from playlistAI.models import Playlist, Track
from playlistAI.serializers import TrackSerializer, PlaylistSerializer

class SearchView(APIView):  

    def get(self, request, format=None):
        message = self.request.query_params.get("text", None)
        openai.api_key = "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"
        premessage = "answer this question in a json dictionary with title and artist: \n## "
        r = openai.ChatCompletion.create(
            model='gpt-3.5-turbo',
            messages=[
                {"role": "user", "content": premessage + message}],
            temperature=0,
        )
        data = r["choices"][0]["message"]['content']
        json_data = json.loads(data)

        sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="3568d9f9b3544af98e31131a9fcb02dd",
                                                                client_secret="1a4d1e3af6274dfa89fab72604a65f86"))

        out = {}
        found_field = None
        for field in json_data:
            if isinstance(json_data[field], list):
                found_field = field

        for i, x in enumerate(json_data[found_field]):
            title = x['title']
            author = x['artist']
            search_text = title + ' ' + author
            result = sp.search(q='track:' + search_text, type='track', limit=1)
            if result and len(result['tracks']['items']) > 0:
                track = result['tracks']['items'][0]
                id = track['id']
                cover = track['album']['images'][0]['url']
                title = track['name']
                spotify_uri = track['uri']
                preview_url = track['preview_url']
                artists = ', '.join([x['name'] for x in track['artists']])
                out[i] = {
                    "id": id,
                    "title": title,
                    "artists": artists,
                    "text": search_text,
                    "cover": cover,
                    "spotify_uri": spotify_uri,
                    "preview_url": preview_url
                }
                
        return Response({"status": "success", "data": out, "response": data}, status=status.HTTP_200_OK)

class PlaylistView(viewsets.ModelViewSet):  
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filter_fields = ["user", "uuid"]
        

class TrackView(viewsets.ModelViewSet):  
    queryset = Track.objects.all()
    serializer_class = TrackSerializer