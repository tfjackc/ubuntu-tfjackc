from django.urls import path
from . import views
from django.views.generic import TemplateView
# from rest_framework import routers
# from .api import DgcViewSet, InfoViewSet

appname = 'portfolio'

appname = 'discgolf'

urlpatterns = [
    path('', views.disc_golf_page, name='disc_golf_page'),
]

