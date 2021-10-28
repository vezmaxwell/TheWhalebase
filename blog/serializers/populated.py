from rest_framework import serializers
from blog.serializers.common import BlogSerializer
from jwt_auth.serializers.common import UserSerializer
 
class PopulatedBlogSerializer(BlogSerializer):
    owner = UserSerializer()