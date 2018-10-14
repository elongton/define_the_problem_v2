from django.shortcuts import render
from django.views.generic import (View, TemplateView,
                                  CreateView, DetailView,
                                  ListView)


class HomeView(TemplateView):
    template_name = 'testapp/home.html'
