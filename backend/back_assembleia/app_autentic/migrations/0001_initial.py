# Generated by Django 3.2.11 on 2022-02-02 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100, verbose_name='Primeiro nome')),
                ('last_name', models.CharField(max_length=100, verbose_name='Seu sobrenome')),
                ('email', models.EmailField(max_length=254)),
                ('senha', models.CharField(max_length=8, verbose_name='Senha')),
            ],
        ),
    ]
