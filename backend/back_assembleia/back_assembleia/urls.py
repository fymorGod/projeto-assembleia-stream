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
from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('search/', search_views.index),
    re_path('videos_get/', user_videos_views.videos_list),
    re_path('videos_post/', user_videos_views.save_video),
    re_path('video_delete/(?P<pk>\d+)$', user_videos_views.delete_video),
    re_path(r'git(?P<pk>\d+)$', user_videos_views.video_detail),
    re_path('video_update/(?P<pk>\d+)$', user_videos_views.update_video),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)