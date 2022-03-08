"""LionStats URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from django.urls import path
from django.http import HttpResponse

def login(request):
    return HttpResponse('Login')

def home(request):
    return HttpResponse('Home Dashboard')

def summary(request):
    return HttpResponse('Summary')

def individual(request):
    return HttpResponse('Individual Stats')

def comparison(request):
    return HttpResponse('Athlete Comparison')

def team(request):
    return HttpResponse('Team Filter')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', login),
    path('home/', home),
    path('summary/', summary),
    path('individual/', individual),
    path('comparison/', comparison),
    path('team', team),
]
