from django.urls import path, include
from django.contrib import admin

from . import views

urlpatterns = [
    path('search', views.SearchView.as_view()),
]