# Generated by Django 4.0.1 on 2022-02-03 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_videos', '0002_rename_videos_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='video',
            field=models.FileField(upload_to='video/%y'),
        ),
    ]
