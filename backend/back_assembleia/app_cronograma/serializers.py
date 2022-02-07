from rest_framework import serializers
from .models import Cronograma

class CronogramaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cronograma
        fields = ('pk', 'title', 'date')