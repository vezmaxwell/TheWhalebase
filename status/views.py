from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Status

from .serializers.common import StatusSerializer
from .serializers.populated import PopulatedStatusSerializer

# Create your views here.

class StatusListView(APIView):

    def get(self, _request):
        status = Status.objects.all()
        serialized_status = StatusSerializer(status, many=True)
        return Response(serialized_status.data, status=status.HTTP_200_OK)

