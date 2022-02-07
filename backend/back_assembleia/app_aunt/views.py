from http.client import REQUESTED_RANGE_NOT_SATISFIABLE
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth import authenticate, login

# Create your views here.

def login_user(request):
    return render(request, 'http://localhost:3000/admin/login')

@csrf_protect
def submit_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request,user)
            return redirect ('http://localhost:3000/admin/system')