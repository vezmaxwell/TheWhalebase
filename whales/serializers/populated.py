from status.models import Status
from status.serializers.common import StatusSerializer
from whales.models import Whale
from .common import WhaleSerializer
from comments.serializers.common import CommentSerializer
from status.serializers.common import StatusSerializer

class PopulatedWhaleSerializer(WhaleSerializer):
    comments = CommentSerializer(many=True)
    status = StatusSerializer()