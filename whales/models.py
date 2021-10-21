from django.db import models

# Create your models here.
class Whale(models.Model):
    name = models.CharField(max_length=50)
    scientific_name = models.CharField(max_length=100)
    image = models.CharField(max_length=300)
    size = models.CharField(max_length=50)
    regions = models.CharField(max_length=300)
    about = models.TextField(max_length=2000, default=None)

    def __str__(self):
        return f"{self.name}"