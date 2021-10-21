from django.db import models

# Create your models here.

class Status(models.Model):
    status = models.CharField(max_length=50)
    status_description = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.status}"