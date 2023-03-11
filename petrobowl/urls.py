from django.urls import path

from .views import TrainingPageView, HomePageView, QuizDataview, QuizPageView, ResourcesPageView

urlpatterns = [
    path("", HomePageView, name = "home"),
    path("resources/", ResourcesPageView, name="resources"),
    path("training/", TrainingPageView, name = "training"),
    path("quiz/", QuizPageView, name="quiz"),
    path("quiz.data/", QuizDataview, name="quiz_data"),
]