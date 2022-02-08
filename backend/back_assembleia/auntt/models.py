from tokenize import Token
from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField()
    createdAt = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.username

