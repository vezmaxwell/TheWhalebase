from rest_framework import serializers
from ..models import Whale


class WhaleSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Whale
        fields = '__all__'