from django.db.models import fields
from rest_framework import serializers
from .models import Menu
from .models import Menu, Playlist, Track

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

class TrackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Track
        exclude = ('playlist',)

class PlaylistSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True)

    class Meta:
        model = Playlist
        fields = '__all__'

    def create(self, validated_data):
        track_data = validated_data.pop('tracks')
        playlist = Playlist.objects.create(**validated_data)
        for track in track_data:
            t = Track.objects.create(playlist=playlist, **track)
            t.playlist = playlist
            t.save()
        
        return playlist 