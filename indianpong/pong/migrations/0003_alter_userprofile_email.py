# Generated by Django 5.0 on 2023-12-13 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pong', '0002_blockeduser_chatmessage_gameinvitation_gamewarning'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='email',
            field=models.EmailField(max_length=50, unique=True),
        ),
    ]
