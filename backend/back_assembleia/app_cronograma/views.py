from multiprocessing import context
from wsgiref.util import request_uri
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import CronogramaSerializer
from .models import Cronograma

# Create your views here.
@api_view(['GET'])
def cronogramas_list(request):
    if request.method == 'GET':
        cronograma_itens = Cronograma.objects.all()
        serializer = CronogramaSerializer(cronograma_itens, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def create_cronograma(request):
    if request.method == 'POST':
        serializer = CronogramaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def cronograma_detail(request, pk):
    try:
        cronograma = Cronograma.objects.get(pk=pk)
    except Cronograma.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CronogramaSerializer(cronograma, context={'request':request})
        return Response(serializer.data)

@api_view(['DELETE'])
def delete_cronograma(request, pk):
    try:
        cronograma = Cronograma.objects.get(pk=pk)
    except Cronograma.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        cronograma.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
def update_cronograma(request, pk):

    try:
        cronograma = Cronograma.objects.get(pk=pk)
    except Cronograma.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = CronogramaSerializer(cronograma, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_201_CREATED)