from django.db import models

# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    video = models.FileField()

    DESTAQUE_SIM = 'DS'
    DESTAQUE_NAO = 'DN'

    destaque_choices = [
        (DESTAQUE_SIM, 'Destaque_S'),
        (DESTAQUE_NAO, 'Destaque_N')
    ]

    destaque = models.CharField(max_length=10, choices=destaque_choices, default=DESTAQUE_NAO)