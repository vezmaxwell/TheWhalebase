from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=50)
    image = models.CharField(max_length=300, default=None, blank=True)
    heading_1 = models.CharField(max_length=100, default=None, blank=True)
    section_1 = models.TextField(max_length=2000, default=None)
    heading_2 = models.CharField(max_length=100, default=None, blank=True)
    section_2 = models.TextField(max_length=2000, default=None, blank=True)
    heading_3 = models.CharField(max_length=100, default=None, blank=True)
    section_3 = models.TextField(max_length=2000, default=None, blank=True)

    owner = models.ForeignKey(
    "jwt_auth.User",
    related_name = "blog",
    on_delete = models.CASCADE
    )


    def __str__(self):
        return f"{self.title}"