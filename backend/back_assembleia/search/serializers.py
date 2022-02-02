from rest_framework import serializers

class Serializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField(allow_blank=True)
    id = serializers.CharField()
    thumbnail = serializers.CharField()
    duration = serializers.FloatField()
    link = serializers.FloatField()