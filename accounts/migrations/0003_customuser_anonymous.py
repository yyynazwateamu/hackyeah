# Generated by Django 2.2.5 on 2019-09-14 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_delete_userprofile'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='anonymous',
            field=models.BooleanField(default=False),
        ),
    ]
