from django.db import models

class Projects(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')
    github_link = models.URLField(max_length=200)
    demo_link = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.title
