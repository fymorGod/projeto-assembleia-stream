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

        print('\n\nantes do serializer:')
        print(request.data)

        serializer = VideoSerializer(data=request.data)
        print('\n\ndepois do serializer:')
        print(serializer)
        print('\n\n')


        if serializer.is_valid():
            print('\né valido')
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)