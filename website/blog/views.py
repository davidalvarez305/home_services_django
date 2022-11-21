from datetime import date
import os
from django.shortcuts import render

# Environment Variables
DOMAIN = str(os.environ.get('DOMAIN'))
SITE_NAME = str(os.environ.get('SITE_NAME'))
CURRENT_YEAR = date.today().year

def home(request):
    print(request.user)
    return render(request, 'blog/home.html', {
        'user': { 'name': 'David' }
    })