from queue import Empty
import requests
from django.conf import settings
from isodate import parse_duration
from urllib.request import Request
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

# Create your views here.
@api_view(['POST'])
def searchVideos(request):

    if request.method == 'POST':
        # Links de busca
        search_url = 'https://www.googleapis.com/youtube/v3/search'
        video_url = 'https://www.googleapis.com/youtube/v3/videos'

        # Parâmetros para busca dos vídeos
        search_params = {
            'part':'snippet',
            # 'q':'learn python',
            'maxResults': 8,
            'channelId':'UCQTEYscjlvwG_1j0a0Wky0w',
            'order':'date',
            'key': settings.YOUTUBE_DATA_API_KEY,
            'type': 'video'
        }

        # Lista dos ids dos vídeos
        video_ids = []

        # Faz a request com base na url de busca e usa os parâmetros de busca
        r = requests.get(search_url, params=search_params)

        # Salva em um JSON os resultados
        results = r.json()['items']    

        # Percorre os resultados do JSON e coleta o ID de cada vídeo
        for result in results:
            video_ids.append(result['id']['videoId'])

        # Parâmetros de busca dos vídeos com base na lista dos IDs
        video_params = {
            'key': settings.YOUTUBE_DATA_API_KEY,
            'part':'snippet, contentDetails',
            'id':','.join(video_ids),
            'maxResults': 8
        }

        # Faz a request com base na url de busca e usa os parâmetros de busca
        r = requests.get(video_url, params=video_params)

        # Salva em um JSON os resultados
        results = r.json()['items']

        # Cria a lista de vídeos
        videos = []

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
        return Response(resultados_return, status=status.HTTP_200_OK) 