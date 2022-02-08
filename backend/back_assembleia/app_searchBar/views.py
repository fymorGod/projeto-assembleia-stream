from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from search import views as searchViews

# Create your views here.
@api_view(['POST'])
def searchVideos(request):
    print(request)
    print(request.data)
    if request.method == 'GET':

        videos = searchViews.index()
        print(videos)

        return Response(videos)