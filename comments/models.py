from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class Comment(models.Model):
    title = models.CharField(max_length=50, default=None, blank=True)   
    text = models.TextField(max_length=300, default=None)
    whale = models.ForeignKey(
        "whales.Whale",
        related_name="comments",
        on_delete= models.CASCADE
    )
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name = "comments",
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.title}"