# Generated by Django 3.2.8 on 2021-10-21 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_image',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]