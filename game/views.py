import random
import re
import json

import jwt
from django.conf import settings
from django.http import JsonResponse
from django.utils import timezone
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
    def get_nearest_city(lat, lng):
        nearest_city = Train.cities[0]
        user_cords = (lat, lng)
        min_distance = None
        cities_with_distance = []
        for city in Train.cities:
            city_cords = (city['lat'], city['lng'])
            distance = geodesic(city_cords, user_cords)
            city['distance'] = distance
            cities_with_distance.append(city)

        return sorted(cities_with_distance, key=lambda x: x['distance'])[0]

    @staticmethod
    def create_token(user, questions):
        expiries_at = timezone.now() + timezone.timedelta(seconds=15)
        encoded = jwt.encode({'data': [{
            'user_id': user.id,
            'question_id': question['id']} for question in questions]},
            settings.SECRET_KEY, algorithm='HS256')
        return encoded.decode()

    @staticmethod
    def decode_token(token):
        return jwt.decode(token, settings.SECRET_KEY, algorithm='HS256')

    @staticmethod
    def get_questions(nearest_city):
        city_questions = list(filter(lambda x: x['city'] == nearest_city, questions))
        return random.sample(city_questions, 5)

    @staticmethod
    def get_question_by_id(pk):
        for q in questions:
            if q['id'] == pk:
                return q

    @action(methods=['GET', ], detail=False)
    def question(self, request):
        lat, lng = float(request.GET['lat']), float(request.GET['lng'])
        ordered_cities = self.get_nearest_city(lat, lng)
        question = self.get_questions(ordered_cities)
        return JsonResponse({"questions": [{
                             'question': question['question'],
                             'answers': question['answers'],
                             'id': question['id']} for question in questions],
                             'token': self.create_token(request.user, questions)
        })

    @action(methods=['POST',], detail=False)
    def answer(self, request):
        pk = request.data.get('id')
        token_data = self.decode_token(request.data['token'])
        print(token_data)
        if not pk:
            return JsonResponse({'id': 'Provide valid id of question'}, status=400)
        question = self.get_question_by_id(pk)
        if not {'user_id': request.user.id, 'question_id': question['id']} in token_data['data']:
            return JsonResponse({'token': "Provide valid token"}, status=400)
        user_answer = request.data.get('answer', -1)
        correct_answer = question['right_answer']
        user = request.user
        if user_answer == correct_answer:
            user.points += 1
            user.save()
            return JsonResponse({'correct': True, 'points': user.points, 'right_answer': correct_answer})
        return JsonResponse({'correct': False, 'points': user.points})


