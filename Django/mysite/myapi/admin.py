from django.contrib import admin

# Register your models here.
from .models import employee_login, employment_hierarchy
admin.site.register(employee_login)
admin.site.register(employment_hierarchy)

