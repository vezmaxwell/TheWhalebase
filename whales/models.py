from django.db import models

# Create your models here.
class Whale(models.Model):
    name = models.CharField(max_length=50)
    scientific_name = models.CharField(max_length=100)
    image = models.CharField(max_length=300)
    size = models.CharField(max_length=50)
    regions = models.CharField(max_length=300)
    title_1 = models.CharField(max_length=100, default=None)
    info_1 = models.TextField(max_length=2000, default=None)
    title_2 = models.CharField(max_length=100, default=None, blank=True)
    info_2 = models.TextField(max_length=2000, default=None, blank=True)
    title_3 = models.CharField(max_length=100, default=None, blank=True)
    info_3 = models.TextField(max_length=2000, default=None, blank=True)
    status = models.ForeignKey(
        'status.Status',
        related_name="whales",
        on_delete=models.CASCADE
    )
    # foreign key for one to many 

    def __str__(self):
        return f"{self.name}"