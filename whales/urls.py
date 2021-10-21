from django.urls import path
from .views import WhaleListView, WhaleDetailView

urlpatterns = [
    path('', WhaleListView.as_view()),
    path('<int:pk>', WhaleDetailView.as_view()) # /whales/:pk
]