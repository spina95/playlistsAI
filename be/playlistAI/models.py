from django.db import models
from django.contrib.auth.models import  User

class Menu(models.Model):

    class Meta:
        db_table = "menu"

    name = models.CharField(max_length=100)

class Playlist(models.Model):

    class Meta:
        db_table = "playlist"

    title = models.CharField(max_length=100)
    query = models.CharField(max_length=400, blank=True, default='')
    user = models.ForeignKey(User,verbose_name = 'User', related_name='playlists', on_delete=models.CASCADE)
    
class Track(models.Model):

    class Meta:
        db_table = "track"

    spotify_id = models.CharField(max_length=30)
    playlist = models.ForeignKey(Playlist, related_name='tracks', on_delete=models.CASCADE)