"""back_assembleia URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from user_videos.views import *
from search import views as search_views
from user_videos import views as user_videos_views
from app_cronograma import views as cronograma_videos_views
from app_searchBar import views as searchBar_views
from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls.static import static
from django.conf import settings
from auntt import views as auntt_views

urlpatterns = [
    path('admin/', admin.site.urls),

    # YOUTUBE ----------------------------------------------------------------------
    # Retorna os vídeos do Youtube
    re_path('search/', search_views.index),

    # Salva(POST) e Retorna(GET) os vídeos do Youtube selecionados
    re_path('select_videos_Youtube/', search_views.select_videos_Youtube),

    # VÍDEOS MP4 ----------------------------------------------------------------------
    # Lista dos Vídeos MP4
    re_path('videos_get/', user_videos_views.videos_list),    

    # Salva o Vídeo MP4
    re_path('videos_post/', user_videos_views.save_video),

    # Deleta o Vídeo MP4
    re_path(r'video_delete/(?P<pk>\d+)$', user_videos_views.delete_video),

    # Retorna um Vídeo MP4 pela pk
    re_path(r'video_detail/(?P<pk>\d+)$', user_videos_views.video_detail),

    # Atualiza o Vídeo MP4
    re_path(r'video_update/(?P<pk>\d+)$', user_videos_views.update_video),


    # CRONOGRAMA ----------------------------------------------------------------------
    # Lista o Cronograma
    re_path('cronograma_get/', cronograma_videos_views.cronogramas_list),

    # Cria o Cronograma
    re_path('cronograma_post/', cronograma_videos_views.create_cronograma),

    # Retorna um item do Cronograma
    re_path(r'cronograma_detail/(?P<pk>\d+)$', cronograma_videos_views.cronograma_detail),

    # Deleta um item do Cronograma
    re_path(r'cronograma_delete/(?P<pk>\d+)$', cronograma_videos_views.delete_cronograma),

    # Atualizar um item do Cronograma
    re_path(r'cronograma_update/(?P<pk>\d+)$', cronograma_videos_views.update_cronograma),

    # SearchBar
    re_path('searchBar/', searchBar_views.searchVideos),

    # USUÁRIO ------------------------------------------------------------------------
    # Login do Usuário
    re_path('login/', auntt_views.user_login),
    
    # Cadastro do Usuário
    re_path('register/', auntt_views.create_user),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)