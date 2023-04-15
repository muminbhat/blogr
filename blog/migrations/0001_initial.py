# Generated by Django 4.2 on 2023-04-15 12:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(unique=True)),
                ('author', models.CharField(max_length=255)),
                ('read_time', models.IntegerField()),
                ('publish_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('hero_image', models.ImageField(blank=True, upload_to='')),
                ('content', models.TextField()),
                ('tags', models.CharField(max_length=100)),
                ('status', models.BooleanField(default=True)),
                ('category', models.CharField(max_length=100)),
            ],
        ),
    ]
