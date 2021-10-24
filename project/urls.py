from django import urls
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/whales/', include('whales.urls')),
    path('api/blog/', include('blog.urls')),
    path('api/comments/', include('comments.urls')),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/status/', include('status.urls')),
    path('api/auth/', include('jwt_auth.urls'))
]

