# Generated by Django 4.0.1 on 2022-02-03 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_videos', '0006_alter_video_destaque'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='destaque',
            field=models.CharField(choices=[('sim', 'sim'), ('sim', 'nao')], default='sim', max_length=10),
        ),
    ]