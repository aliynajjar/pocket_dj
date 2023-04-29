# Generated by Django 4.2 on 2023-04-29 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_song_danceability_alter_song_duration_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='danceability',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
        migrations.AlterField(
            model_name='song',
            name='duration',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
        migrations.AlterField(
            model_name='song',
            name='energy',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
        migrations.AlterField(
            model_name='song',
            name='instrumentalness',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
        migrations.AlterField(
            model_name='song',
            name='liveness',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
        migrations.AlterField(
            model_name='song',
            name='loudness',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
        migrations.AlterField(
            model_name='song',
            name='speechiness',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
        migrations.AlterField(
            model_name='song',
            name='tempo',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
        migrations.AlterField(
            model_name='song',
            name='valence',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=15),
        ),
    ]
