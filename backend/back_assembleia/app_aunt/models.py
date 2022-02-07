import email
from django.db import models

# Create your models here.

class User(models.Model):
    Nome = models.CharField(max_length=100)
    Sobrenome = models.CharField(max_length=100)
    email = models.EmailField()
    usuario = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)

    def __str__(self):
        return str(self.id)
    
    class Meta:
        db_table = 'Usuario'