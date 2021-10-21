from .common import StatusSerializer
from whales.serializers.common import WhaleSerializer

class PopulatedStatusSerializer(WhaleSerializer):
    status = WhaleSerializer(many=True)