from django.urls import path, include
from django.contrib import admin


from .views import (
    UserCreateAPIView,
)


urlpatterns = [
    path('create/', UserCreateAPIView.as_view(), name='create'),
]
