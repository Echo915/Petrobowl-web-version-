from django.urls import path

from .views import QuizPageView, HomePageView, QuizDataview

urlpatterns = [
    path("", HomePageView, name = "home"),
    path("quiz/", QuizPageView, name = "quiz"),
    path("quiz.data/", QuizDataview, name="quiz_data"),
]