# Generated by Django 4.0.1 on 2022-02-03 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_videos', '0007_alter_video_destaque'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='destaque',
            field=models.CharField(choices=[('destaque_S', 'sim'), ('destaque_n', 'nao')], default='destaque_n', max_length=10),
        ),
    ]