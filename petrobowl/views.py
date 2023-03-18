from django.http import JsonResponse

from django.shortcuts import render

from .models import QuizSetOne

from .dictionary import DICTIONARY

def convertToVoiceText(text):
    words = text.split()
    length = len(words)
    for x in range(length):
        if words[x] in DICTIONARY:
            words[x] = DICTIONARY[words[x]]
    result = " ".join(words)
    return result

# Create your views here.
def HomePageView(request):
    return render(request, "home.html",)

def TrainingPageView(request):
    return render(request, "training.html")

def QuizPageView(request):
    return render(request, "quiz.html")

def QuizDataview(request):
    # Orders database randomly (? argument) and selects the first data
    # This is used to generate a random data
    data = QuizSetOne.objects.order_by("?").first()
    questionV = convertToVoiceText(data.question)
    answerV = convertToVoiceText(data.answer)

    dict_data = {
        "question": data.question, 
        "answer": data.answer,
        "questionV": questionV,
        "answerV": answerV,
        }
    
    return JsonResponse(dict_data)