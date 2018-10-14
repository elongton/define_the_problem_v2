from django.urls import path, include

from testapp.views import (
    HomeView,
)

urlpatterns = [
    path('', HomeView.as_view(), name="home"),
]
