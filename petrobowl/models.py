from django.db import models

# Create your models here.
class QuizSetOne(models.Model):
    question = models.TextField(max_length=5000)
    answer = models.TextField(max_length=5000)