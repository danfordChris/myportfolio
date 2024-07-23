from . import views
from django.urls import path

urlpatterns = [
   path('projects/', views.get_projects, name='projects'),
   path('generate-cv/', views.generate_cv, name='generate_cv'),
]
