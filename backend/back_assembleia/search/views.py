''' 
A função index faz a conexão com a API do youtube
1. Faz um GET e seleciona o ID dos vídeos
2. Utiliza o ID dos vídeos coletados e coleta mais dados de cada vídeo
'''
# pip install requests, isodate
from wsgiref.util import request_uri
import requests
from isodate import parse_duration
from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import SearchSerializer
from .models import Search

videos_youtube = []

# Coleta os vídeos
@api_view(['GET'])
def index(request):
    if request.method == 'GET':
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

    return Response(videos)

@api_view(['GET','POST','PUT'])
def select_videos_Youtube(request):
    # try:
    #     id_videos = Search.objects.get(pk=pk)
    # except Search.DoesNotExist:
    #     return Response(status=status.HTTP_404_NOT_FOUND)

    # Cria a lista de vídeos
    videos = []

    if request.method == 'GET':

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

<<<<<<< HEAD
        print(videos)

        return Response(videos, status=status.HTTP_200_OK)

    # elif request.method == 'POST':

    #     serializer = SearchSerializer(data=request.data, many=True)
    #     serializer.is_valid()
    #     print(serializer.errors)
    #     if serializer.is_valid():
    #         print(serializer.data)
    #         # serializer.save()
    #         return Response(status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



=======
        return Response(videos, status=status.HTTP_200_OK)

    
>>>>>>> 8318d6ca544a87f1fcac62e137efdd32898ce39f
    elif request.method == 'POST':
        # Get vídeos do banco
        id_videos = Search.objects.all()
        serializer_id = SearchSerializer(id_videos, context={'request':request}, many=True)
        ids_atuais = []
        for item in serializer_id.data:
            ids_atuais.append(item['id_video'])

        # Itens candidatos
        ids_candidatos = []
        for item in request.data:
            ids_candidatos.append(item['id_video'])

        # Verificar os candidatos que não estão no banco
        ids_novos = []
        achou = 0
        i = 0
        for item_candidato in ids_candidatos:
            for item_atual in ids_atuais:
                if(item_candidato == item_atual):
                    achou = 1
                    break
            if(achou == 0):
                ids_novos.append(item_candidato)

        ids_list = []
        for item in ids_novos:
            id_dict = {
                'id_video': item
            }

            ids_list.append(id_dict)

        serializer = SearchSerializer(data=ids_list, many=True)

        if serializer.is_valid():
            serializer.save()
<<<<<<< HEAD
            print(serializer.data)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# [OrderedDict([('id_video', 'g7Jwu1dmpww')])]




    # if request.method == 'POST':
    #     # Links de busca
    #     video_url = 'https://www.googleapis.com/youtube/v3/videos'

    #     # Parâmetros de busca dos vídeos com base na lista dos IDs
    #     video_params = {
    #         'key': settings.YOUTUBE_DATA_API_KEY,
    #         'part':'snippet, contentDetails',
    #         'id':','.join(request.data),
    #         'maxResults': len(request.data)
    #     }

    #     # Faz a request com base na url de busca e usa os parâmetros de busca
    #     r = requests.get(video_url, params=video_params)

    #     # Salva em um JSON os resultados
    #     results = r.json()['items']

    #     # Percorre os resultados dos vídeos, salva em um dict e depois em uma lista
    #     for result in results:            
    #         video_data = {
    #             'title': result['snippet']['title'],
    #             'description': result['snippet']['description'],
    #             'id': result['id'],
    #             'thumbnail': result['snippet']['thumbnails']['high']['url'],
    #             'duration': parse_duration(result['contentDetails']['duration']).total_seconds(),            
    #             'link': f'https://www.youtube.com/watch?v={ result["id"] }'
    #         }

    #         videos.append(video_data)

    #     print(videos)

    #     return Response(status=status.HTTP_201_CREATED)
=======
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
>>>>>>> 8318d6ca544a87f1fcac62e137efdd32898ce39f
