from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import status
from playlistAI.models import Menu
from playlistAI.serializers import MenuSerializer
class MenuView(APIView):  
    serializer_class = MenuSerializer

    def get(self, request, format=None):
        menu = Menu.objects.all()
        serializer = MenuSerializer(menu, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)