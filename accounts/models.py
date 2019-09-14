from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    anonymous = models.BooleanField(default=False)

# class UserProfile(models.Model):
#     user = models.OneToOneField('CustomUser', on_delete=models.CASCADE)
#     type = models.CharField(max_length=10)



