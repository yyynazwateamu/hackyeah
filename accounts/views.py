from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from djoser.serializers import UserCreateSerializer
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from accounts.models import CustomUser, validate_ticket_number
from accounts.serializers import UserSerializer
from train.models import Train


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
            return JsonResponse({'access': str(token.access_token)})
        else:
            return JsonResponse(serializer.errors, status=400)


class UserLobbyView(viewsets.GenericViewSet):

    permission_classes = (IsAuthenticated,)

    @action(methods=['POST',], detail=False)
    def ticket(self, request):
        try:
            ticket_number = request.data['ticket_number']
            validate_ticket_number(ticket_number)
        except:
            return JsonResponse({"ticket_number": ['Provide valid ticket number',]}, status=400)
        user = request.user
        user.ticket_number = ticket_number
        user.save()
        return JsonResponse(UserSerializer(request.user).data)

    @action(methods=['POST', ], detail=False)
    def status(self, request):
        ready = request.data.get('ready', False)
        user = request.user
        user.ready = ready
        user.save()
        return JsonResponse(UserSerializer(request.user).data)
