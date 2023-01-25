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
            
