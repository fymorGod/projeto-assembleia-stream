# Generated by Django 4.0.1 on 2022-02-04 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_videos', '0008_alter_video_destaque'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='video',
            field=models.FileField(blank=True, upload_to='video/%y'),
        ),
    ]
