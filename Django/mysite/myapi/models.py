from django.db import models

# Create your models here.
class employee_login(models.Model):
    firstname = models.CharField(max_length=70, blank=False, default='')
    middlename = models.CharField(max_length=70, blank=False, default='')
    lastname = models.CharField(max_length=70, blank=False, default='')
    email = models.CharField(max_length=120, blank=False, default='')
    department = models.CharField(max_length=120, blank=False, default='')
    authorities = models.CharField(max_length=120, blank=False, default='')
    password = models.CharField(max_length=120, blank=False, default='', help_text='8 digits')
    photoname = models.CharField(max_length=120, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)


class employment_hierarchy(models.Model):
    eid = models.ForeignKey('employee_login', on_delete=models.SET_NULL, null=True)
    firstname = models.CharField(max_length=70, blank=False, default='')
    middlename = models.CharField(max_length=70, blank=False, default='')
    direct_report = models.CharField(max_length=70, blank=False, default='')
    department = models.CharField(max_length=120, blank=False, default='')
    