from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import status

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