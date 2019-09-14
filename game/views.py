import re

from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, mixins

from train.models import Train


def validate_ticket_number(ticket_number):
    train_type, number = re.match(r"([a-zA-Z]+)(\d+)", ticket_number).groups()
    if len(train_type) not in (2, 3) or len(number) < 9:
        return False
    return True


class LobbyViewSet(mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
    lookup_url_kwarg = 'ticket_number'

    def retrieve(self, request, *args, **kwargs):
        ticket_number = kwargs['ticket_number']
        train = Train.get_train_by_ticket_number(ticket_number)
        if not validate_ticket_number(ticket_number):
            return JsonResponse({
                'ticker_number': ['Invalid ticket number', ]
            })
        return JsonResponse({
            'id': 1,
            'name': f'(Train {train.type} {ticket_number} from {train.departure_city} to {train.arrival_city})',
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
