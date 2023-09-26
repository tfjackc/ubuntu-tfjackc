"""crook URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView
from rest_framework import routers
from portfolio.api import DgcViewSet, InfoViewSet

router = routers.DefaultRouter()
router.register(r'dgc_courses', DgcViewSet)
router.register(r'contact_info', InfoViewSet)

urlpatterns = [
   # path('namaste/', include('namaste.urls')),
    path('pats/', include('pats.urls')),
    path('portfolio/', include('portfolio.urls')),
    path('discgolf/', include('discgolf.urls')),
    path('namaste/', include('namaste.urls')),
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('discgolf/react/', TemplateView.as_view(template_name='index.html'))
]

urlpatterns += staticfiles_urlpatterns()
