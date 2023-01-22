from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import status
from playlistAI.models import Menu
from playlistAI.serializers import MenuSerializer

import openai
import re

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
        for i, x in enumerate(split[1:]):
            x = x.strip()
            x = ''.join(char for char in x if char.isalnum() or char == ' ')
            #title = re.findall('"([^"]*)"', x)[0] if re.findall('"([^"]*)"', x) else ""
            title = x.split("by ",1)[0].strip() if len(x.split("by ",1)) > 1 else ""
            author = x.split("by ",1)[1].strip() if len(x.split("by ",1)) > 1 else ""
            out[i] = {
                "title": title,
                "author": author,
                "text": x
            }
        return Response({"status": "success", "data": out, "response": data}, status=status.HTTP_200_OK)