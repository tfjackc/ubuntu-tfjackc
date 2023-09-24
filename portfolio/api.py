from portfolio.models import DiscgolfCourses, ContactInfo
from rest_framework import viewsets, permissions
from .serializers import DgcSerializer, InfoSerializer

class DgcViewSet(viewsets.ModelViewSet):
    queryset = DiscgolfCourses.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DgcSerializer

class InfoViewSet(viewsets.ModelViewSet):
    queryset = ContactInfo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InfoSerializer