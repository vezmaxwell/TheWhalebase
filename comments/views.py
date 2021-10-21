# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from comments.models import Comment

from .serializers.common import CommentSerializer

# Create your views here.
class CommentListView(APIView):

    def post(self, request):
        comment_to_add = CommentSerializer(data=request.data)
        if comment_to_add.is_valid():
            comment_to_add.save()
            return Response(comment_to_add.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)