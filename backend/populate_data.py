import os
import django
from datetime import datetime

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

# Import your models
from portfolio.models import Profile, Experience, Skill, Education

def populate_data():
    # Create a Profile instance
    profile = Profile.objects.create(
        name="Danford Christopher",
        title="Web Developer",
        location="Temeke, Dar es Salaam - Tanzania",
        phone="+255 699 500 156",
        email="jurvisdanford329@gmail.com",
        website="https://danford.vercel.app"
    )

    # Create Experience instances
    experiences = [
        {
            "company_name": "Finhub community",
            "position": "Web Designer",
            "start_date": datetime(2022, 1, 1),
            "end_date": None,
            "responsibilities": "Develop custom web design solutions; Collaborated with corporations and helped them build powerful websites; Designed an e-commerce web app"
        },
        {
            "company_name": "Trilabs Limited",
            "position": "Web Developer & Backend with Django",
            "start_date": datetime(2022, 1, 1),
            "end_date": datetime(2023, 1, 1),
            "responsibilities": "Develop custom web design solutions and integrate with AI; Designed a tax payment web app"
        },
        {
            "company_name": "Software development club",
            "position": "Web Developer & UI/UX Designer",
            "start_date": datetime(2020, 1, 1),
            "end_date": datetime(2021, 1, 1),
            "responsibilities": "Develop custom web design solutions; Designed an e-commerce web app"
        }
    ]

    for exp in experiences:
        Experience.objects.create(
            profile=profile,
            company_name=exp["company_name"],
            position=exp["position"],
            start_date=exp["start_date"],
            end_date=exp["end_date"],
            responsibilities=exp["responsibilities"]
        )

    # Create Skill instances
    skills = [
        "Web Design",
        "Design Thinking",
        "Responsive Design",
        "Testing and Debugging",
        "Computer Literacy",
        "Strong Communication",
        "Devops Engineering",
        "Excellent Problem-Solving"
    ]

    for skill_name in skills:
        Skill.objects.create(profile=profile, name=skill_name)

    # Create Education instances
    educations = [
        {
            "institution_name": "University of Dar es Salaam",
            "degree": "Bachelor of Science in Computer Science",
            "start_date": datetime(2022, 1, 1),
            "end_date": None
        },
        {
            "institution_name": "Udemy.com",
            "degree": "The Complete 2023 Web Development Bootcamp",
            "start_date": datetime(2023, 1, 1),
            "end_date": datetime(2023, 12, 1)
        },
        {
            "institution_name": "EC-Council.org",
            "degree": "Introduction to Dark Web, Anonymity, and Cryptocurrency",
            "start_date": datetime(2024, 1, 1),
            "end_date": datetime(2024, 2, 1)
        },
        {
            "institution_name": "EC-Council.org",
            "degree": "SQL Injection Attacks",
            "start_date": datetime(2024, 2, 1),
            "end_date": datetime(2024, 3, 1)
        },
        {
            "institution_name": "EC-Council.org",
            "degree": "Ethical Hacking Essentials (EHE)",
            "start_date": datetime(2024, 3, 1),
            "end_date": datetime(2024, 4, 1)
        }
    ]

    for edu in educations:
        Education.objects.create(
            profile=profile,
            institution_name=edu["institution_name"],
            degree=edu["degree"],
            start_date=edu["start_date"],
            end_date=edu["end_date"]
        )

if __name__ == "__main__":
    populate_data()
