from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import status
from spotipy.oauth2 import SpotifyClientCredentials

import spotipy
import json
    
class UserDetail(APIView):
    """
    Retrieve user data from token
    """
    def post(self, request):
        body = json.loads(request.body)
        token = body['token']
        sp = spotipy.Spotify(auth=token)
        user = sp.current_user()
        print(user)
        return Response({"status": "success", "data": user}, status=status.HTTP_200_OK)
            
class Playlist(APIView):
    """
    Create a new playlist 
    """
    def post(self, request):
        body = json.loads(request.body)
        token = body['token']
        tracks = body['tracks']
        title = body['title']
        sp = spotipy.Spotify(auth=token)
        user = sp.current_user()
        user_id = user['id']

        playlist = sp.user_playlist_create(user_id, title, public=False, description="test description")
        tracks_ids = [track['id'] for track in tracks.values()]
        added_tracks = sp.user_playlist_add_tracks(user_id, playlist['id'], tracks_ids)
        
        return Response({"status": "success", "data": added_tracks}, status=status.HTTP_200_OK)

class SearchTracks(APIView):  

    def post(self, request, format=None):

        tracks = request.data
        sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="3568d9f9b3544af98e31131a9fcb02dd",
                                                                client_secret="1a4d1e3af6274dfa89fab72604a65f86"))
        ids = [x['spotify_id'] for x in tracks]
        results = sp.tracks(ids)
        out = {}
        for result in results['tracks']:
            id = result['id']
            cover = result['album']['images'][0]['url']
            title = result['name']
            spotify_uri = result['uri']
            preview_url = result['preview_url']
            artists = ', '.join([x['name'] for x in result['artists']])
            out[id] = {
                "id": id,
                "title": title,
                "artists": artists,
                "cover": cover,
                "spotify_uri": spotify_uri,
                "preview_url": preview_url,
                "export": True
            }
        print(results)
                
        return Response({"status": "success", "data": out}, status=status.HTTP_200_OK)
                
