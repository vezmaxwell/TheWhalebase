# Generated by Django 3.2.8 on 2021-10-21 15:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('status', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Whale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('scientific_name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=300)),
                ('size', models.CharField(max_length=50)),
                ('regions', models.CharField(max_length=300)),
                ('title_1', models.CharField(default=None, max_length=100)),
                ('info_1', models.TextField(default=None, max_length=2000)),
                ('title_2', models.CharField(blank=True, default=None, max_length=100)),
                ('info_2', models.TextField(blank=True, default=None, max_length=2000)),
                ('title_3', models.CharField(blank=True, default=None, max_length=100)),
                ('info_3', models.TextField(blank=True, default=None, max_length=2000)),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='whales', to='status.status')),
            ],
        ),
    ]