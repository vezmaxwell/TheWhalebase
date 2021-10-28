from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Blog
from .serializers.common import BlogSerializer

# Create your views here.


class BlogListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # Get All Blogs
    def get(self, request):
        blogs = Blog.objects.all()
        serialized_blogs = BlogSerializer(blogs, many=True)
        return Response(serialized_blogs.data, status=status.HTTP_200_OK)

    # Post Blog
    def post(self, request):
        request.data['owner'] = request.user.id
        blog_to_add = BlogSerializer(data=request.data)
        if blog_to_add.is_valid():
            blog_to_add.save()
            return Response(blog_to_add.data, status=status.HTTP_201_CREATED)
        return Response(blog_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)



class BlogDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )


    def get_blog(self, pk):
        try:
            return Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            raise NotFound(detail="Can't find anything! 🦭")

    #  Single Blog
    def get(self, _request, pk):
        blog = self.get_blog(pk=pk)
        serialized_blog = BlogSerializer(blog)
        return Response(serialized_blog.data, status=status.HTTP_200_OK)

    # Delete Blog
    def delete(self, request, pk):
        blog_to_delete = self.get_blog(pk=pk)
        if blog_to_delete.owner != request.user:
            raise PermissionDenied()
        blog_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        

    # Update Blog
    def put(self, request, pk):
        blog_to_update = self.get_blog(pk=pk)
        updated_blog = BlogSerializer(blog_to_update, data=request.data)
        if updated_blog.is_valid():
            updated_blog.save()
            return Response(updated_blog.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_blog.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


