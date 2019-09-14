from django.urls import path, include
from rest_framework.routers import DefaultRouter

from accounts.views import AnonymousUserViewSet, UserLobbyView

router = DefaultRouter()

router.register('', UserLobbyView, 'user_lobby')

urlpatterns = [
    path(r'', include('djoser.urls')),
    path(r'', include('djoser.urls.jwt')),
    path(r'users/me/', include(router.urls)),
    path(r'anonymous/login/', AnonymousUserViewSet.as_view()),
]

