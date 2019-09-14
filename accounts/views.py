from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from djoser.serializers import UserCreateSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from accounts.models import CustomUser


class AnonymousUserViewSet(APIView):
    serializer_class = UserCreateSerializer

    def post(self, request):
        password = CustomUser.objects.make_random_password()
        data = request.data
        data.update({'password': password})
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = TokenObtainPairSerializer.get_token(user)
            return Response({'accesss': str(token.access_token)})
        else:
            return Response(serializer.errors, status=400)

