# Generated by Django 4.0.2 on 2022-02-08 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auntt', '0002_remove_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.EmailField(default='', max_length=254),
        ),
    ]
