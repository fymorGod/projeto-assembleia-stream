
from django.db import models


# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    createdAt = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(default="")

    def __str__(self):
        return self.username
   