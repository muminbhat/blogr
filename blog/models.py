from django.db import models
from django.utils import timezone
from django.utils.text import slugify

# Create your models here.
class Blog(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True,  allow_unicode=True, blank=True)
    author = models.CharField(max_length=255)
    read_time = models.IntegerField()
    publish_time = models.DateTimeField(default=timezone.now)
    hero_image = models.ImageField(blank=True)
    content = models.TextField()
    tags = models.CharField(max_length=100)
    status = models.BooleanField(default=True)
    category = models.CharField(max_length=100)


    def save(self,*args,**kwargs):
        self.slug=slugify(self.title)
        super(Blog,self).save(*args,**kwargs)
