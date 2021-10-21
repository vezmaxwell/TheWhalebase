from whales.models import Whale
from .common import WhaleSerializer
from comments.serializers.common import CommentSerializer

class PopulatedWhaleSerializer(WhaleSerializer):
    comments = CommentSerializer(many=True)