from django.urls import path

from .views import TrainingPageView, HomePageView, QuizDataview, QuizPageView

urlpatterns = [
    path("", HomePageView, name = "home"),
    path("training/", TrainingPageView, name = "training"),
    path("quiz/", QuizPageView, name="quiz"),
    path("quiz.data/", QuizDataview, name="quiz_data"),
]