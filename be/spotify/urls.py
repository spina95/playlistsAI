from django.urls import path

from . import views

urlpatterns = [
    path('user', views.UserDetail.as_view()),
]