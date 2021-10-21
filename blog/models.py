from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=50)
    image = models.CharField(max_length=300, default=None)
    section = models.CharField(max_length=2000)


    def __str__(self):
        return f"{self.title}"