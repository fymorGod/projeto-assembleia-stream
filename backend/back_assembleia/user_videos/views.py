from turtle import title
from django.http import HttpResponse
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

        data_dicionario = (request.data).dict()

        print(data_dicionario['file'])
        print(data_dicionario['description'])
        print(data_dicionario['destaque'])
        print(data_dicionario['file'])

        Video.objects.create(title=data_dicionario['file'], description=data_dicionario['description'], video=data_dicionario['file'], destaque=data_dicionario['destaque'])
        
        # serializer = VideoSerializer(data=data_dicionario)
        # print(serializer)

        return HttpResponse({'message':'Video inserido'}, status=200)

        # if serializer.is_valid():
        #     print('\né valido')
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)