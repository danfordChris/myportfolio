from . import views
from django.urls import path

urlpatterns = [
   path('projects/', views.get_projects, name='projects'),
   path('generate-cv/', views.generate_cv, name='generate_cv'),
   
   path('contact_form_count/', views.get_contact_Submissions_count, name='contact_form_count'),
   path('submit/', views.submit_contact_form, name='submit_contact_form'),
   
   path('api/authenticate/', views.authenticate_user, name='authenticate_user'),
   path('updateCv/', views.cv_view, name='cv_view'),
]
