from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import VideoSerializer
from .models import Video

'''
Funções GET:
1. videos_list: retorna uma lista com os vídeos no site
2. video_detail: retorna um video com os detalhes
3. 
'''

@api_view(['GET'])
def videos_list(request):
    if request.method == 'GET':
        videos = Video.objects.all()        
        serializer = VideoSerializer(videos, context={'request':request}, many=True)
        
        return Response(serializer.data)

@api_view(['POST'])
def save_video(request):
    if request.method == 'POST':
        serializer = VideoSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)