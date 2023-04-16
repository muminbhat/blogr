from django.urls import path
from . import views

urlpatterns = [
    path('blog', views.blog, name='blog'),
    path('blog/<str:pk>/', views.blogPost, name='blogpost')
]
