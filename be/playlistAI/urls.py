from django.urls import path, include
from django.contrib import admin
from . import views

from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'playlists', views.PlaylistView)
router.register(r'tracks', views.TrackView)

urlpatterns = [
    path('search', views.SearchView.as_view()),
    path('', include(router.urls)),
]