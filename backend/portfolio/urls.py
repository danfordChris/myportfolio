from . import views
from django.urls import path

urlpatterns = [
   path('projects/', views.get_projects, name='projects'),
   path('generate-cv/', views.generate_cv, name='generate_cv'),
   path('submit/', views.submit_contact_form, name='submit_contact_form'),
   path('updateCv/', views.cv_view, name='cv_view'),
]
