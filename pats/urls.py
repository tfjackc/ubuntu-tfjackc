from django.urls import path
from . import views

appname = 'pats'

urlpatterns = [
    path('', views.index, name='index'),
    path('base/', views.base, name='base'),
    path('map/', views.mapPage, name='mapPage'),
    path('<str:account>/', views.account_query, name='account_query'),
    path('<str:account>/valuation/', views.valuation, name='valuation'),
    path('maptaxlot/<str:maptaxlot>/', views.mt_query, name='mt_query'),
    path('owner/<str:name>/', views.owner_query, name='owner_query'),
    path('address/<str:address>/', views.address_query, name='address_query'),
    path('search/<str:value>/', views.tableSearchResults, name='tableSearchResults'),
    path('<str:account>/las', views.landandstructures, name='landandstructures'),
    path('<str:account>/rel', views.relatedaccounts, name='relatedaccounts'),
    path('<str:account>/interactivemap', views.interactiveMap, name='interactivemap'),
    path('<str:account>/surveys', views.surveys, name='surveys')

]