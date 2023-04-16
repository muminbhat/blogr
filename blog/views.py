from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Blog
from .serializers import BlogSerializer


# Create your views here.
@api_view(['GET'])
def blog(request):
    blog = Blog.objects.all()
    serializer = BlogSerializer(blog, many=True )
    return Response(serializer.data)

@api_view(['GET'])
def blogPost(request, pk):
    blogpost = Blog.objects.get(sno=pk)
    serializer = BlogSerializer(blogpost, many=False)
    return Response(serializer.data)

