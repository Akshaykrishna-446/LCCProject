from django.urls import path
from . import views
 
urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('login1/', views.login1, name='login1'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('add_products/', views.add_products, name='add_products'),
    path('all_products/', views.all_products, name='all_products'),
    path('product_details/<id>', views.product_details, name='product_details'),
    path('cart/', views.cart1, name='cart'),
    path('test/', views.test, name='cart'),
]