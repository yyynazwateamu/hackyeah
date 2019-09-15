import re

import jwt
from django.http import JsonResponse
from django.utils.crypto import get_random_string

from geopy.distance import geodesic

# Create your views here.
from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from game.fixtures import questions
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
                  'name': request.user.username,
                  'ready': request.user.ready
                },
                {
                 'name': 'Kasia',
                 'ready': True
                },
                {
                 'name': 'Jan',
                 'ready': True
                }
            ]
        })


class QuizViewSet(viewsets.GenericViewSet):

    permission_classes = (IsAuthenticated,)

    @staticmethod
    def get_ordered_cities_by_distance(lat, lng):
        nearest_city = Train.cities[0]
        user_cords = (lat, lng)
        min_distance = None
        cities_with_distance = []
        for city in Train.cities:
            city_cords = (city['lat'], city['lng'])
            distance = geodesic(city_cords, user_cords)
            city['distance'] = distance
            cities_with_distance.append(city)

        return sorted(cities_with_distance, key=lambda x: x['distance'])

    @staticmethod
    def create_token(user):
        encoded = jwt.encode({'user_id': user.id}, get_random_string(30), algorithm='HS256')
        return encoded.decode()

    @staticmethod
    def check_token(token):
        return True

    @staticmethod
    def get_question(ordered_cities):
        for city in ordered_cities:
            for question in questions:
               if question['city'] == city:
                   return question

    @staticmethod
    def get_question_by_id(pk):
        for q in questions:
            if q['id'] == pk:
                return q

    @action(methods=['GET', ], detail=False)
    def question(self, request):
        lat, lng = float(request.GET['lat']), float(request.GET['lng'])
        ordered_cities = self.get_ordered_cities_by_distance(lat, lng)
        question = self.get_question(ordered_cities)
        return JsonResponse({
                             'question': question['question'],
                             'answers': question['answers'],
                             'id': question['id'],
                             'token': self.create_token(request.user)
                            })

    @action(methods=['POST',], detail=False)
    def answer(self, request):
        pk = request.data.get('id')
        self.check_token(request.data.get('token', ''))
        if not pk:
            return JsonResponse({'id': 'Provide valid id of question'}, status=400)
        question = self.get_question_by_id(pk)
        user_answer = request.data.get('answer', 0)
        correct_answer = question['right_answer']
        user = request.user
        if user_answer == correct_answer:
            user.points += 1
            user.save()
            return JsonResponse({'correct': True, 'points': user.points})
        return JsonResponse({'correct': False, 'points': user.points})


