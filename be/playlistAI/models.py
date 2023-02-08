from django.db import models
from django.contrib.auth.models import  User
import uuid

class Playlist(models.Model):

    class Meta:
        db_table = "playlist"

    title = models.CharField(max_length=100)
    query = models.CharField(max_length=400, blank=True, default='')
    user = models.ForeignKey(User,verbose_name = 'User', related_name='playlists', on_delete=models.CASCADE)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)

class Track(models.Model):

    class Meta:
        db_table = "track"

    spotify_id = models.CharField(max_length=30)
    playlist = models.ForeignKey(Playlist, related_name='tracks', on_delete=models.CASCADE)