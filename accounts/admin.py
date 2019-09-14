from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# from accounts.models import User
from accounts.klasy import TestUser

class CustomUserAdmin(UserAdmin):
    pass

class check_hello():
    def __init__(self):
        self.a = TestUser()
        # return a.say_hello()

    def hello(self):
        print(self.a.say_hello, 'accounts admin')
        return self.a.say_hello()

# admin.site.register(CustomUser, CustomUserAdmin)