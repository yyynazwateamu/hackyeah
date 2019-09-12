from .base import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('POSTGRES_DB', 'hackyeah'),
        'USER': os.environ.get('POSTGRES_USER', 'hackyeah'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD', 'hackyeah'),
        'HOST': os.environ.get('POSTGRES_HOST', 'localhost'),
    }
}