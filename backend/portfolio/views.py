from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate


from django.http import HttpResponse,JsonResponse
from weasyprint import HTML
import os




@api_view(['GET','POST'])
def get_projects(request):
    
    if request.method == 'GET':
        try:
            projects = Projects.objects.all()
            serializer = ProjectSerializer(projects, many=True)
            return Response(serializer.data)
        except Exception as e:
            # Log the error here
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    elif request.method == 'POST':
        try:
            serializer = ProjectSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Log the error here
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
            

    
@api_view(['GET'])
def get_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
        serializer = ProjectSerializer(project, many=False)
        return Response(serializer.data)
    except Project.DoesNotExist:
        return Response({"error": "Project not found."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        # Log the error here
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['PUT'])
def update_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Project.DoesNotExist:
        return Response({"error": "Project not found."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        # Log the error here
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
def delete_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Project.DoesNotExist:
        return Response({"error": "Project not found."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        # Log the error here
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def submit_contact_form(request):
    if request.method == 'POST':
        serializer = ContactSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Form submitted successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def get_contact_Submissions_count(request):
    try:
        total_submissions = ContactSubmission.objects.all()
        serializer = ContactSubmissionSerializer(total_submissions, many=True)
        data = {
            'count': total_submissions.count(),
            'submissions': serializer.data
        }
        return Response(data)
    
    except Exception as e:
            # Log the error here
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    






from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def authenticate_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        return Response({'authenticated': True}, status=status.HTTP_200_OK)
    return Response({'authenticated': False}, status=status.HTTP_401_UNAUTHORIZED)











from django.http import HttpResponse
from weasyprint import HTML
import os

def generate_cv(request):
    # Path to your HTML template
    html_file = os.path.join(os.path.dirname(__file__), 'cv.html')
    
    # Read HTML content
    with open(html_file, 'r') as file:
        html_content = file.read()
    
    # Convert HTML to PDF
    pdf = HTML(string=html_content).write_pdf()

    # Create HTTP response
    response = HttpResponse(pdf, content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="cv.pdf"'
    return response






# from django.shortcuts import render
# from .models import Profile

# def cv_view(request):
#     profile = Profile.objects.prefetch_related('experiences', 'skills', 'education').first()
#     context = {
#         'profile': profile
#     }
#     return render(request, 'cv.html', context)




from django.shortcuts import render
from django.http import HttpResponse
from .models import Profile
from weasyprint import HTML
import os

def cv_view(request):
    profile = Profile.objects.prefetch_related('experiences', 'skills', 'education').first()
    context = {
        'profile': profile
    }
    

    
    # Render the HTML template
    html_string = render(request, 'cv.html', context).content.decode('utf-8')
    
    # Specify the directory and file name
    save_path = '../frontend/Portfolio/src/Assets/cv.pdf'
    
    # Convert HTML to PDF and save to the specified path
    HTML(string=html_string).write_pdf(save_path)
    
    # Read the PDF content
    with open(save_path, 'rb') as pdf_file:
        pdf_content = pdf_file.read()

    # Create an HTTP response with the PDF content
    response = HttpResponse(pdf_content, content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="cv.pdf"'
    
    return render(request, 'cv.html', context)
