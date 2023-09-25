from rest_framework import serializers
from portfolio.models import DiscgolfCourses, ContactInfo
from rest_framework_gis.serializers import GeoFeatureModelSerializer
class DgcSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = DiscgolfCourses
        geo_field = "geom"
        fields = '__all__'

class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'