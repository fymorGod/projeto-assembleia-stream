from django.db import models

# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='video/%y')

    DESTAQUE_SIM = 'sim'
    DESTAQUE_NAO = 'nao'

    destaque_choices = [
        (DESTAQUE_SIM, 'sim'),
        (DESTAQUE_NAO, 'nao')
    ]

    destaque = models.CharField(max_length=10, choices=destaque_choices, default=DESTAQUE_NAO)

    def __str__(self) -> str:
        return self.title