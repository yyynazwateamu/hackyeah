from django.urls import path, include

from accounts.views import AnonymousUserViewSet

urlpatterns = [
    path(r'', include('djoser.urls')),
    path(r'', include('djoser.urls.jwt')),
    path(r'anonymous/login/', AnonymousUserViewSet.as_view()),

]

