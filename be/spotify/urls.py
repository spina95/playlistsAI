from django.urls import path

from . import views

urlpatterns = [
    path('user', views.UserDetail.as_view()),
    path('playlist', views.Playlist.as_view()),
    path('search-tracks', views.SearchTracks.as_view()),
]