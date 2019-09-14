"""hackyeah URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.http import HttpResponse
from django.shortcuts import render
from django.urls import path, re_path, include


def index(request):
    return render(request, 'index.html')

def status(request):
    return HttpResponse('success')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('status/', status),
    path('accounts/', include('accounts.urls')),
    path('', index),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)+ \
    static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns.append(re_path(r'^.*$', index))
