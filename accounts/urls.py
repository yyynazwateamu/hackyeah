from django.urls import path, include

from accounts.views import AnonymousUserViewSet, UserLobbyView

urlpatterns = [
    path(r'', include('djoser.urls')),
    path(r'', include('djoser.urls.jwt')),
    path(r'users/me/ticket', UserLobbyView.as_view()),
    path(r'anonymous/login/', AnonymousUserViewSet.as_view()),
]

