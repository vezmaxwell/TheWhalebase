from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Whale
from .serializers.common import WhaleSerializer
from .serializers.populated import PopulatedWhaleSerializer

# Create your views here.
class WhaleListView(APIView):

    def get(self, _request):
        whales = Whale.objects.all()
        serialized_whales = PopulatedWhaleSerializer(whales, many=True)
        return Response(serialized_whales.data, status=status.HTTP_200_OK)




class WhaleDetailView(APIView):

    def get_whale(self, pk):
        try: 
            return Whale.objects.get(pk=pk)
        except Whale.DoesNotExist:
            raise NotFound(detail="Can't find that whale! 🦭")

    #  Single Whale
    def get(self, _request, pk):
        try:
            whale = Whale.objects.get(pk=pk)
            print(whale)
            serialized_whale = PopulatedWhaleSerializer()
            print(serialized_whale.data)
            return Response(serialized_whale.data, status=status.HTTP_200_OK)
        except Whale.DoesNotExist:
            raise NotFound(detail="Can't find that whale! 🦭")
    

    # Delete Whale
    def delete(self, _request, pk):
        whale_to_delete = Whale.objects.get(pk=pk)
        whale_to_delete.delete()
        raise Response(status=status.HTTP_204_NO_CONTENT)


    # Update Whale
    def put(self, request, pk):
        whale_to_update = self.get_whale(pk=pk)
        updated_whale = WhaleSerializer(whale_to_update, data=request.data)
        if updated_whale.is_valid():
            updated_whale.save()
            return Response(updated_whale.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_whale.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # Post Whale
    def post(self, request):
        whale_to_add = WhaleSerializer(data=request.data)
        if whale_to_add.is_valid():
            whale_to_add.save()
            return Response(whale_to_add.data, status=status.HTTP_201_CREATED)
        return Response(whale_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)