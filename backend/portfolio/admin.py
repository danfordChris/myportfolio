from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Projects)
admin.site.register(ContactSubmission)
#cv
admin.site.register(Profile)
admin.site.register(Experience)
admin.site.register(Skill)
admin.site.register(Education)