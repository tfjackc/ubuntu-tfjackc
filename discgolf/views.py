from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from portfolio.models import DiscgolfCourses
from django.core.serializers import serialize
import pandas as pd
from django.http import HttpResponse, HttpResponseRedirect
import json
import requests
import folium
from folium.plugins import Draw
from folium.elements import JSCSSMixin
import jinja2
from jinja2 import Template
import branca
from branca.element import Element, Figure, MacroElement
from folium.features import ClickForLatLng, ClickForMarker, LatLngPopup
from django.views.generic import TemplateView

state_list = []
def disc_golf_page(request):

    courses_layer = DiscgolfCourses.objects.all()

    states = DiscgolfCourses.objects.order_by().values('state').distinct()

    dgc_data = serialize("geojson", courses_layer, geometry_field="geom")
    m = folium.Map([43, -100], zoom_start=4)
    folium.GeoJson(dgc_data).add_to(m)

    pass_map = m._repr_html_()

    context = {
        'map': pass_map,
        'dgc_data': states
    }
    return render(request, 'discgolf/index.html', context)

# @api_view(['GET'])
# def getRoutes(request):
#


