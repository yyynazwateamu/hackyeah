from django.urls import path, include
from rest_framework.routers import DefaultRouter

from game.views import LobbyViewSet, QuizViewSet

router = DefaultRouter()
router.register('lobby', LobbyViewSet, base_name='lobby')
router.register('quiz', QuizViewSet, base_name='quiz')

urlpatterns = [
    path('', include(router.urls))
]


