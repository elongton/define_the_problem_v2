from django.db.models import Q

from rest_framework.serializers import (
                                CharField,
                                ListField,
                                EmailField,
                                BooleanField,
                                ModelSerializer,
                                HyperlinkedIdentityField,
                                SerializerMethodField,
                                ValidationError,)

from ..models import User
from rest_framework_jwt.settings import api_settings



class UserCreateSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
        ]

    def create(self, validated_data):
        username = validated_data['username']
        user_obj = User(
            username = username,
        )
        user_obj.save()
        return validated_data
