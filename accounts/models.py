from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    # class Meta:
    #     proxy = True
    def say_hello(self):
        print(CustomUser.say_hello, 'accounts model')
        return "hello"

class UserProfile(models.Model):
    user = models.OneToOneField('CustomUser', on_delete=models.CASCADE)
    type = models.CharField(max_length=10)



