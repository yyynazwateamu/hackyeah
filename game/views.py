import re

from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from train.models import Train


class LobbyViewSet(mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    lookup_url_kwarg = 'ticket_number'
    permission_classes = (IsAuthenticated, )

    def list(self, request, *args, **kwargs):
        ticket_number = request.user.ticket_number
        train = Train.get_train_by_ticket_number(ticket_number)
        return JsonResponse({
            'id': train.id,
            'title': f'(Train {train.type} {ticket_number} from {train.departure_city} to {train.arrival_city})',
            'users': [
                {
                 'name': 'Kasia',
                 'ready': False
                },
                {
                 'name': 'Jan',
                 'ready': True
                },
            ]
        })
