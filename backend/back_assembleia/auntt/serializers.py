from importlib.metadata import files
from pyexpat import model
from attr import fields
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username', 'password', 'email', 'createdAt')