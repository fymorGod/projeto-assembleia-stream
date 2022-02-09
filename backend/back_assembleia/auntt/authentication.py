from django.contrib.auth.backends import BaseBackend
from .models import User

class authBackend(BaseBackend):
    def authenticate(request, username, password):
        try:
            users = User.objects.all()
            print(users)
            if users:
                return users
        except User.DoesNotExist:
            pass
        return None

    def get_user(self, id):
        try:
            return User.objects.get(pk=id)
        except:
            return None