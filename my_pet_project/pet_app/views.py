from django.shortcuts import redirect, render
from .models import *
from datetime import date

from django.http import HttpResponse
# Create your views here.
def home(request):
    return render(request,'pet_app/home.html')

def register(request):
    if request.POST:
        name=request.POST["name"]
        email=request.POST["email"]
        phone_number=request.POST["phone_number"]
        password=request.POST["pass"]
        confirm_password=request.POST["cpass"]
        
        obj=user_reg.objects.create(user_full_name=name,
                                    user_email=email,
                                    user_mob_number=phone_number,
                                    user_password=password,
                                    user_cpassword=confirm_password)
        obj.save()
    return render(request,'pet_app/user_register.html')
    

def login1(request):
    return render(request,'pet_app/login.html')
def dashboard(request):
    return render(request,'pet_app/dashboard.html')

def test(request):
    return render(request,'pet_app/test.html')

def cart1(request):
    
    return render(request,'pet_app/cart.html')

def all_products(request):
    data=products.objects.all()
    return render(request,'pet_app/all_products.html',{"data":data})

def add_products(request):
    if request.POST:
        products_product_nam=request.POST["selected_name"]
        product_description=request.POST["selected_description"]
        products_product_p=request.POST["selected_price"]
        products_product_img=request.FILES["selected_image"]
        
        
        obj=products.objects.create(product_name=products_product_nam,
                                    product_desc=product_description,
                                    product_price=products_product_p,
                                    product_image=products_product_img)
        obj.save()
    return render(request,'pet_app/add_products.html')

def product_details(request,id):
    
    product=products.objects.get(id=id)
    context={"product":product}
    if 'addToCart' in request.POST:
        
        qty=request.POST['qty']
        amt=product.product_price
        amt=int(amt)*int(qty)
        u_id=1
        user=user_reg.objects.get(id=u_id)
        obj=cart.objects.create(product_id=product,
                                user_id=user,
                                cart_amount=amt)
        obj.save()

    if 'buyNow' in request.POST:
        
        qty=request.POST['qty']
        amt=product.product_price
        amt=int(amt)*int(qty)
        u_id=1
        current_date=date.today()
        user=user_reg.objects.get(id=u_id)
        obj=orders.objects.create(product_id=product,
                                user_id=user,
                                order_amount=amt,
                                ordered_date=current_date)
        obj.save()
        
    return render(request,'pet_app/product_details.html',context)