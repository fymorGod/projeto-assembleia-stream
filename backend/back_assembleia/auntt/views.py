from multiprocessing import context
from django.forms import PasswordInput
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .authentication import authBackend
from .models import User 
from .serializers import *
from django_token.models import Token
# Create your views here.


@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        users = User.objects.all()
        serializer = UserSerializer(users, context={'request': request}, many=True)
        username = request.data['username']
        password = request.data['password']
        token = Token.objects.get_or_create(user=user)
        for user in serializer.data:
            if username == user['username'] and password == user['password']:
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)



@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data = request.data)
        serializer.is_valid()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def user_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user, context={'request':request})
        return Response(serializer.data)


@api_view(['DELETE'])
def delete_user(request, pk):

    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def update_user(request, pk):

    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        Serializer = UserSerializer(user, context={'request':request})
    return Response(status=status.HTTP_201_CREATED)