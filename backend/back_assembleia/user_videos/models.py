from django.db import models

# Create your models here.
class Videos(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
