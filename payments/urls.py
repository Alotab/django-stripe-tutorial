
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
    path('config/', views.stripe_config),
    path('create-checkout-session/', views.create_checkout_session),
]
