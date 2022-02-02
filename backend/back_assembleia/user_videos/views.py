from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

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
        print(videos)
        return Response(videos)
