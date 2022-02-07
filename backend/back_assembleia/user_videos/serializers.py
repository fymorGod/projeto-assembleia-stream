from dataclasses import fields
from importlib.metadata import files
from rest_framework import serializers
from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    
    video = serializers.FileField()
    class Meta:
        model = Video
        fields = ('pk', 'title', 'description', 'file', 'destaque')