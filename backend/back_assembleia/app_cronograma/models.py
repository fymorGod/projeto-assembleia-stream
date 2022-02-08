from django.db import models

# Create your models here.
class Cronograma(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateTimeField()

    def __str__(self):
        return self.title