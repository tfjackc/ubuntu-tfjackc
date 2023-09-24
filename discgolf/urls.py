from django.urls import path
from . import views
from django.views.generic import TemplateView

appname = 'portfolio'

urlpatterns = [
    path('', views.disc_golf_page, name='disc_golf_page'),
]