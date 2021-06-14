from rest_framework import serializers 
from .models import Employee
 
 
class Serializer(serializers.ModelSerializer):
 
    class Meta:
        model = Employee
        fields = ('id',
                  'firstname',
                  'middlename',
                  'lastname',
                  'email',
                  'department',
                  'authorities',
                  'password',
                  'photoname',
                  'description',
                  'published')