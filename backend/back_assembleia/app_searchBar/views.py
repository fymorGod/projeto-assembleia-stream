from queue import Empty
from re import search
import requests
from django.conf import settings
from isodate import parse_duration
from urllib.request import Request
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from search.models import Search
from search.serializers import SearchSerializer

# Create your views here.
@api_view(['POST'])
def searchVideos(request):
    # Cria a lista de vídeos
    videos = []

    if request.method == 'POST':

    # Get vídeos do banco
        id_videos = Search.objects.all()
        serializer = SearchSerializer(id_videos, context={'request':request}, many=True)
        ids_list = []
        for item in serializer.data:
            ids_list.append(item['id_video'])

        # Links de busca
        video_url = 'https://www.googleapis.com/youtube/v3/videos'
        
        # Parâmetros de busca dos vídeos com base na lista dos IDs
        video_params = {
            'key': settings.YOUTUBE_DATA_API_KEY,
            'part':'snippet, contentDetails',
            'id':','.join(ids_list),
            'maxResults': len(request.data)
        }

        # Faz a request com base na url de busca e usa os parâmetros de busca
        r = requests.get(video_url, params=video_params)

        # Salva em um JSON os resultados
        results = r.json()['items']

        # Percorre os resultados dos vídeos, salva em um dict e depois em uma lista
        for result in results:            
            video_data = {
                'title': result['snippet']['title'],
                'description': result['snippet']['description'],
                'id': result['id'],
                'thumbnail': result['snippet']['thumbnails']['high']['url'],
                'duration': parse_duration(result['contentDetails']['duration']).total_seconds(),            
                'link': f'https://www.youtube.com/watch?v={ result["id"] }'
            }

            videos.append(video_data)

    resultados_return = []
    for video in videos:
        if ((request.data['search']).lower() in (video['title']).lower()):
            resultados_return.append(video)

    if(not resultados_return):
        return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        print('\n\n')
        print(resultados_return)
        return Response(resultados_return, status=status.HTTP_200_OK) 