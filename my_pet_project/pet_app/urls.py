from django.urls import path
from . import views
 
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('login1/', views.login1, name='login1'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('add_products/', views.add_products, name='add_products'),
    path('shop/', views.shop, name='shop'),
    path('product_details/<id>', views.product_details, name='product_details'),
    path('cart/', views.cart1, name='cart'),
    path('cart_remove/<id>', views.cartremove, name='cartremove'),
    path('show_product_dashboard/', views.show_product_dashboard, name='show_product_dashboard'),
    path('show_orders_dashboard/', views.show_orders_dashboard, name='show_orders_dashboard'),
    path('checkout/', views.checkout, name='checkout'),
    path('index/', views.index, name='index'),
    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('contact_us/', views.contact_us, name='contact_us'),
    path('wishlist/', views.wishlist1, name='wishlist'),
    
    
]