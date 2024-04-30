from django.urls import path,include
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns=[
    path('signup/',views.signup),
    path('login/',obtain_auth_token)
]