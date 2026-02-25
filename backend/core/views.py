from django.shortcuts import render
from django.http import JsonResponse

def home(request):
    return render(request, "index.html")

def hello(request):
    return JsonResponse({"message": "hello from django"})

DATA = ["apple", "banana", "carrot", "orange", "grape", "melon", "test", "example", "sample"]

def search(request):
    query = request.GET.get("q", "").lower()
    results = [item for item in DATA if query in item.lower()]
    return JsonResponse({"results": results})