import re

from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.db import models


def validate_ticket_number(ticket_number):
    train_type, number = re.match(r"([a-zA-Z]+)(\d+)", ticket_number).groups()
    if len(train_type) not in (2, 3) or len(number) < 9:
        raise ValidationError('Provide valid ticket number')


class CustomUser(AbstractUser):
    anonymous = models.BooleanField(default=False)
    ticket_number = models.CharField(max_length=20, validators=[validate_ticket_number], null=True, blank=True)
    ready = models.BooleanField(default=False)
    points = models.PositiveIntegerField(default=0)


