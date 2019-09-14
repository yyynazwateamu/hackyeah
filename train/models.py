import random
import re

from django.db import models

# Create your models here.
from django.utils import timezone


def get_train_departure_time():
    now = timezone.now()
    departure_time = now - timezone.timedelta(minutes=random.randint(10, 180))
    return departure_time


def generate_numeric_hash(text):
    import hashlib
    text = text.encode()
    return int(hashlib.md5(text).hexdigest()[:8], 16)


class Train(models.Model):
    TRAIN_TYPE_CHOICES = (
        ('IC', 'ic'),
        ('TLK', 'tlk'),
    )
    CITY_CHOICES = (
        ('Kraków', 'Gdynia'),
        ('Poznań', 'Warszawa'),
        ('Wrocław', 'Warszawa'),
        ('Poznań', 'Wrocław'),
        ('Wrocław', 'Katowice'),
        ('Poznań', 'Gdynia'),
    )
    number = models.IntegerField()
    type = models.CharField(max_length=3, choices=TRAIN_TYPE_CHOICES)
    departure_time = models.DateTimeField(default=get_train_departure_time)
    departure_city = models.CharField(max_length=20)
    arrival_city = models.CharField(max_length=20)

    @classmethod
    def get_train_by_ticket_number(cls, ticket):
        train_type, number = re.match(r"([a-zA-Z]+)(\d+)", ticket).groups()
        train_number = number[::2]
        departure_city, arrival_city = cls.get_departure_and_arrival_city(ticket)

        return cls.objects.get_or_create(type=train_type, number=train_number,
                                         arrival_city=arrival_city, departure_city=departure_city)[0]

    @staticmethod
    def get_departure_and_arrival_city(ticket):
        ticket_hash = abs(generate_numeric_hash(ticket))
        choice = Train.CITY_CHOICES[ticket_hash % len(Train.CITY_CHOICES)]
        return choice if ticket_hash % 2 else choice[::-1]
