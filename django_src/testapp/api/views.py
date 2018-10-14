from django.db.models import Q
# from django.contrib.auth import get_user_model

from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView


from rest_framework.generics import (
                    CreateAPIView,
                    DestroyAPIView,
                    ListAPIView,
                    RetrieveAPIView,
                    UpdateAPIView,
                    RetrieveUpdateAPIView,)

from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)

from ..models import User


from .serializers import (
      UserCreateSerializer,
      )


class UserCreateAPIView(CreateAPIView):
    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny]
    queryset = User.objects.all()
