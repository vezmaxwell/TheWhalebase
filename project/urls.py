from django import urls
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('whales/', include('whales.urls')),
    path('blog/', include('blog.urls')),
    path('whales/comments/', include('comments.urls'))
]
