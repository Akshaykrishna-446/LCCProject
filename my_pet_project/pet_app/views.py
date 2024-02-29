from django.shortcuts import redirect, render
from .models import *
from datetime import date

from django.http import HttpResponse
# Create your views here.


def index(request):
    data=products.objects.all()
    return render(request,'pet_app/index.html',{"data":data})

def forgot_password(request):
    return render(request,'pet_app/forgot_password.html')


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
def checkout(request):
    return render(request,'pet_app/checkout.html')
def contact_us(request):
    return render(request,'pet_app/contact_us.html')


def show_product_dashboard(request):
    data=products.objects.all()
    return render(request,'pet_app/show_product_dashboard.html',{"data":data})

def show_orders_dashboard(request):
    order_details=orders.objects.all()
    
    context={
        "order_details":order_details,
        
    }
    return render(request,'pet_app/show_orders_dashboard.html',context)

def cart1(request):
    cart_products=cart.objects.all()
    
    context={
        "cart_products":cart_products,
        
        }
    return render(request,'pet_app/cart.html',context)

def cartremove(request,id):
    
    
    remove=cart.objects.get(id=id)
        
    remove.delete()

    
    return render(request,'pet_app/cart.html')




def shop(request):
    data=products.objects.all()
    if request.method == "POST":
        
        query_name = request.POST.get('name', None)
        
        results = products.objects.filter(name__contains=query_name)

        return render(request, 'pet_app/shop.html', {"results":results})
    
    return render(request,'pet_app/shop.html',{"data":data})


        
    
        
    

def wishlist1(request):
    wishlisted=wishlist.objects.all()
    return render(request,'pet_app/wishlist.html',{"wishlisted":wishlisted})

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
                                cart_amount=amt,
                                order_qty=qty)
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
                                ordered_date=current_date,
                                
                                order_qty=qty
                                )
        obj.save()

    if 'wishlist' in request.POST:
        u_id=1
        user=user_reg.objects.get(id=u_id)
        obj=wishlist.objects.create(product_id=product,
                                    user_id=user
                                    )
        obj.save()

    
        
    return render(request,'pet_app/product_details.html',context)
    


