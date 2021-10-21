from django.core import exceptions
from django.utils.translation import pgettext_lazy
from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt 

User = get_user_model()

class JWTAuthentication(BasicAuthentication):
    
    def authenticate(self, request):
        header = request.headers.get('Authorization')

        if not header:
            return None
            
        if not header.startsWith('Bearer'):
            raise PermissionDenied(detail='Invalid auth token')

        token = header.replace('Bearer ', '')

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))

        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied(detail='Invalid Token')
        
        except User.DoesNotExist:
            raise PermissionDenied(detail='User Not Found')

        return (user, token)