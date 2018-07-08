from django.shortcuts import render

def index(request):
    return render(request, 'landing/index.html', {})

def page2(request):
    return render(request, 'landing/page2.html', {})