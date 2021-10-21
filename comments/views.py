# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from comments.models import Comment

from .serializers.common import CommentSerializer

# Create your views here.
class CommentListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly)

    def post(self, request):
        comment_to_add = CommentSerializer(data=request.data)
        if comment_to_add.is_valid():
            comment_to_add.save()
            return Response(comment_to_add.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class CommentDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly)

    def get_comment(self, pk):
        try: 
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound(detail="Can't find the comment you're looking for! 🐢")

    #  Single Comment
    def get(self, _request, pk):
        try:
            comment = Comment.objects.get(pk=pk)
            print(comment)
            serialized_comment = CommentSerializer()
            print(serialized_comment.data)
            return Response(serialized_comment.data, status=status.HTTP_200_OK)
        except Comment.DoesNotExist:
            raise NotFound(detail="Can't find the comment you're looking for! 🐢")
    

    # Delete Comment
    def delete(self, _request, pk):
        comment_to_delete = Comment.objects.get(pk=pk)
        comment_to_delete.delete()
        raise Response(status=status.HTTP_204_NO_CONTENT)


    # Update Comment
    def put(self, request, pk):
        comment_to_update = self.get_Comment(pk=pk)
        updated_comment = CommentSerializer(comment_to_update, data=request.data)
        if updated_comment.is_valid():
            updated_comment.save()
            return Response(updated_comment.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_comment.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # Post Comment
    def post(self, request):
        comment_to_add = CommentSerializer(data=request.data)
        if comment_to_add.is_valid():
            comment_to_add.save()
            return Response(comment_to_add.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)