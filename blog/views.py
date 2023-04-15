from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def blog():
    return HttpResponse('The Page Is Currently Going Scheduled Maitnenance')

def blogpost(request, slug):
    post = Blog.objects.filter(slug=slug)
    context = {'post':post}
    return render(request, 'index.html', context)
