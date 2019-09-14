from django.urls import path, include
from rest_framework.routers import DefaultRouter

from game.views import LobbyViewSet

router = DefaultRouter()
router.register('lobby', LobbyViewSet, base_name='lobby')

urlpatterns = [
    path('', include(router.urls))
]


