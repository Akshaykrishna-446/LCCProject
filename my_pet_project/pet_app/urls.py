from django.urls import path

from . import views
 
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('navbar/', views.navbar, name='navbar'),
    path('login1/', views.login1, name='login1'),
    path('sign_out/', views.sign_out, name='sign_out'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('add_products/', views.add_products, name='add_products'),
    path('shop/', views.shop, name='shop'),
    path('product_details/<id>', views.product_details, name='product_details'),
    path('cart/', views.cart1, name='cart'),
    path('addtoCart/<id>', views.addtoCart, name='addtoCart'),
    path('cart_remove/<id>', views.cartremove, name='cartremove'),
    path('BuyNow/<id>', views.BuyNow, name='BuyNow'),
    path('checkoutCartRemove/<id>', views.checkoutCartRemove, name='checkoutCartRemove'),
    path('show_product_dashboard/', views.show_product_dashboard, name='show_product_dashboard'),
    path('show_orders_dashboard/', views.show_orders_dashboard, name='show_orders_dashboard'),
    path('checkout/', views.checkout, name='checkout'),
    path('index/', views.index, name='index'),
    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('contact_us/', views.contact_us, name='contact_us'),
    path('increaseItem/<id>', views.increaseItem, name='increaseItem'),
    path('decreaseItem/<id>', views.decreaseItem, name='decreaseItem'),
    path('wishlist/', views.wishlist1, name='wishlist'),
    path('remove_wishlist/<id>', views.wishlistRemove, name='wishlistRemove'),
    path('cancel_order/<id>', views.cancel_order, name='cancel_order'),
    path('checkoutFromCart/', views.checkoutFromCart, name='checkoutFromCart'),
    path('ordered_page/', views.ordered_page, name='ordered_page'),
    path('user_dashboard/', views.user_dashboard, name='user_dashboard'),
    path('user_orders/', views.user_orders, name='user_orders'),
    path('user_address/', views.user_address, name='user_address'),
    
    
]