from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=50, null=True)
    image = models.CharField(max_length=300, default=None, blank=True, null=True)
    heading_1 = models.CharField(max_length=100, default=None, blank=True, null=True)
    section_1 = models.TextField(max_length=2000, default=None, null=True)
    heading_2 = models.CharField(max_length=100, default=None, blank=True, null=True)
    section_2 = models.TextField(max_length=2000, default=None, blank=True, null=True)
    heading_3 = models.CharField(max_length=100, default=None, blank=True, null=True)
    section_3 = models.TextField(max_length=2000, default=None, blank=True, null=True)

    owner = models.ForeignKey(
    "jwt_auth.User",
    related_name = "blog",
    on_delete = models.CASCADE,
    blank=True,
    null=True
    )


    def __str__(self):
        return f"{self.title}"