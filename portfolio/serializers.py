from rest_framework import serializers
from portfolio.models import DiscgolfCourses, ContactInfo

class DgcSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscgolfCourses
        fields = '__all__'

class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'