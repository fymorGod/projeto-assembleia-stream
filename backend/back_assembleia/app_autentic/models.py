import email
from django.db import models

# Create your models here.

class Customer(models.Model):
    first_name = models.CharField("Primeiro nome", max_length=100)
    last_name = models.CharField("Seu sobrenome", max_length=100)
    email = models.EmailField()
    senha = models.CharField("Senha", max_length=8)

    def __str__(self):
        return self.first_name

