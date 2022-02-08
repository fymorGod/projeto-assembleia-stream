from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend.back_assembleia.search.views import index
from search import views as searchViews

# Create your views here.
@api_view(['POST'])
def searchVideos(request):

    if request.method == 'POST':
        videos = searchViews.index(request)
        print(videos)