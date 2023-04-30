from django.urls import path
from .views import UserDetailAPI,RegisterUserAPIView,SongCreateAPIView,MoodCreateAPIView,RemixCreateAPIView,RequestCreateAPIView,UserList
urlpatterns = [
  path('get-details',UserDetailAPI.as_view()),
  path('register',RegisterUserAPIView.as_view()),
  path('song/create', SongCreateAPIView.as_view()),
  path('mood/create', MoodCreateAPIView.as_view()),
  path('remix/create', RemixCreateAPIView.as_view()),
  path('request/create', RequestCreateAPIView.as_view()),
  path('users/', UserList.as_view()),
]