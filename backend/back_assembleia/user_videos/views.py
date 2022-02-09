from turtle import title
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import VideoSerializer
from .models import Video

'''
Funções:
- (GET) video_detail: retorna um video com os detalhes [DONE]
- (POST) save_video: salva um vídeo no bd [DONE]
- (UPDATE) edit_video: edita os dados de um vídeo [TO DO]
- (DELETE) delete_video: deleta um vídeo do bd [DONE]

- (GET) videos_list: retorna uma lista com os vídeos do bd site [DONE] 
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
        print(request.data)
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def video_detail(request, pk):

    try:        
        video = Video.objects.get(pk=pk)

    except Video.DoesNotExist:        
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET': 
        serializer = VideoSerializer(video, context={'request':request})                   
        return Response(serializer.data)

@api_view(['DELETE'])
def delete_video(request, pk):

    try:
        video = Video.objects.get(pk=pk)        
    except Video.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        video.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
def update_video(request, pk):

    try:
        video = Video.objects.get(pk=pk)
    except Video.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = VideoSerializer(video, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_201_CREATED)