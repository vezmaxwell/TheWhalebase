from django import urls
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('whales/', include('whales.urls')),
    path('blog/', include('blog.urls')),
    path('comments/', include('comments.urls')),
    path('auth/', include('jwt_auth.urls')),
    path('status/', include('status.urls'))
]
