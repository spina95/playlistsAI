from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import status
from playlistAI.models import Menu
from playlistAI.serializers import MenuSerializer

import openai
import re
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

class SearchView(APIView):  
    serializer_class = MenuSerializer

    def get(self, request, format=None):
        text = self.request.query_params.get("text", None)
        openai.api_key = "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"
        r = openai.Completion.create(model="text-davinci-003", prompt=text, temperature=0, max_tokens=4000)
        data = r["choices"][0]["text"]
        data = data.strip()
        split = re.split('[0-9]\.', data)
        out = {}

        sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="3568d9f9b3544af98e31131a9fcb02dd",
                                                                client_secret="1a4d1e3af6274dfa89fab72604a65f86"))
        for i, x in enumerate(split[1:]):
            title = x.split("by ",1)[0].strip() if len(x.split("by ",1)) > 1 else ""
            author = x.split("by ",1)[1].strip() if len(x.split("by ",1)) > 1 else ""
            
            result = sp.search(q='track:' + x, type='track', limit=1)
            if result:
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
                    "text": x,
                    "cover": cover,
                    "spotify_uri": spotify_uri,
                    "preview_url": preview_url,
                    "export": True
                }
                
        return Response({"status": "success", "data": out, "response": data}, status=status.HTTP_200_OK)
