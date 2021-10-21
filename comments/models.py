from django.db import models

# Create your models here.
class Comment(models.Model):
    title = models.CharField(max_length=50, default=None)   
    text = models.TextField(max_length=300, default=None)

    def __str__(self):
        return f"{self.title}"