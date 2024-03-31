from audioop import avg
from django.shortcuts import get_object_or_404, redirect, render
from .models import *
from datetime import date
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator



# Create your views here.


def index(request):
    
    featured_product=products.objects.order_by('priority')[:3]
    latest_product=products.objects.order_by('-id')[:3]
   
    

    

    name=""
    count=""
    cartCount=""
    if "userID" in request.session:
        u_id=request.session["userID"]
        user=user_reg.objects.get(user__id=u_id)

        count=wishlist.objects.filter(user_id__id=user.id).count()
        cartCount = cart.objects.filter(user_id__id=user.id).count()
        name=user.user_full_name




    
    
    
    
    context={
        'featured_product':featured_product,
        'latest_product':latest_product,
        'count':count,
        'name':name, 
        'cartCount':cartCount,
        
        
        
        
    }
    return render(request,'pet_app/index.html',context)

def addtoCart(request,id):
        
    product=products.objects.get(id=id)
    
    amt=product.product_price
    amt=int(amt)*int(1)
    u_id=request.session["userID"]
    
    user=user_reg.objects.get(user__id=u_id)
    
    obj=cart.objects.create(
                            product_id=product,
                            user_id=user,
                            cart_amount=amt,

                            order_qty=1
                            )
    
    
    obj.save()

    return redirect('cart')

def BuyNow(request,id):
        
    product=products.objects.get(id=id)
    
    qty=1
    amt=product.product_price
    product_name=product.product_name
    product_image=product.product_image
    product_id=product.id
    product_price=product.product_price
    off_percentage = product.offer_percentage

    final_price = 0

    if product_price is not None and off_percentage is not None:
        offered_price= int(product_price)* (int(off_percentage)/100)
        final_price= int(product_price) - int(offered_price)
    

    real_price=int(final_price)*int(qty)

    if real_price <= 500:
        total=real_price+100
    else:
        total=real_price


    
    amt=int(amt)*int(1)

    if real_price <= 500:
        total=real_price+100
    else:
        total=real_price

        
    
    u_id=request.session["userID"]
    current_date=date.today()
    
    
    user=user_reg.objects.get(user__id=u_id)
    obj=orders.objects.create(product_id=product,
                            user_id=user,
                            order_amount=amt,
                            order_qty=1,
                            ordered_date=current_date,
                            order_status=orders.CART_STAGE)
    obj.save()

    my_dict = {'product': product_name,
                'total': total,
                'qty':qty,
                'amt':real_price,
                'product_image':product_image,
                'product_price':final_price,
                'product_id':product_id,
                }
    import urllib.parse
    query_string = urllib.parse.urlencode(my_dict)
    
    return redirect('/checkout/?{}'.format(query_string))


def forgot_password(request):
    return render(request,'pet_app/forgot_password.html')


def profile(request):
    user_id=request.session["userID"]
    reg_id=user_reg.objects.get(user__id=user_id)
    profile = user_reg.objects.filter(user_id__id=reg_id.id).first()
    if request.method == 'POST':
        profile.profile_pic = request.FILES.get('profile_pic', profile.profile_pic)
        profile.save()
        return redirect('user_dashboard')
    return render(request, 'profile.html', {'profile': profile})

def checkoutFromCart(request):

    user_id=request.session["userID"]
    reg_id=user_reg.objects.get(user__id=user_id)
    
    data=cart.objects.filter(user_id__id=reg_id.id)
    
    current_date=date.today()
    total=0
    zipped_price=[]
    for i in (data):
        if i.order_qty is not None and i.product_id.product_price is not None:
            product_price=i.product_id.product_price
            off_percentage=i.product_id.offer_percentage

            offered_price= int(product_price) * (int(off_percentage)/100)
            final_price= int(product_price) - int(offered_price)

            total += i.order_qty * final_price
        zipped_price.append((i,final_price))
    if total <= 500:
        grand_total=total+100
    else:
        grand_total=total 

    if request.POST:
        for d in data:
            product=d.product_id
            product_price=d.product_id.product_price

            
            off_percentage=d.product_id.offer_percentage

            offered_price= product_price * off_percentage/100
            final_price= product_price - offered_price

            qty=d.order_qty
            
            
            house=request.POST['House-Name']
            name=request.POST['Name']
            address=request.POST['address']
            pincode=request.POST['pincode']
            city=request.POST['city']
            country=request.POST['country']
            buy=orders.objects.create(user_id=reg_id,
                                        product_id=product,
                                        house=house,
                                        name=name,
                                        address=address,
                                        zipcode=pincode,
                                        city=city,
                                        country=country,
                                        order_amount=final_price,
                                        ordered_date=current_date,
                                        order_qty=qty,
                                        order_status=orders.ORDER_CONFIRMED)
            buy.save()
            product1=d.product_id.id
            pro = products.objects.get(id=product1)
            pro.stock_quantity -= qty
            pro.save()

            
            

            data.delete()
            
        

        return redirect('ordered_page')
    

    context={
        "data":data,
        "grand_total":grand_total,
        "total":total,
        'zipped_price':zipped_price
       
        
    }
    return render(request,'pet_app/checkoutFromCart.html',context)


def checkoutCartRemove(request,id):
    remove=cart.objects.get(id=id)
        
    remove.delete()
    return redirect('checkoutFromCart')
    
def navbar(request):
    
    return render(request,'pet_app/navbar.html')


def register(request):
    if request.POST:
        name=request.POST["name"]
        email=request.POST["email"]
        phone_number=request.POST["phone_number"]
        dob=request.POST["DOB"]
        country=request.POST["country"]
        password=request.POST["pass"]
        confirm_password=request.POST["cpass"]
        login=Login.objects.create_user(username=email,
                                        password=password,
                                        userType='Customer',
                                        viewpassword=password)
        login.save()
        obj=user_reg.objects.create(user=login,
                                    user_full_name=name,
                                    user_DOB=dob,
                                    user_contry=country,
                                    user_email=email,
                                    user_mob_number=phone_number,
                                    user_password=password,
                                    user_cpassword=confirm_password
                                    )
        obj.save()
        return redirect('login1')
    
    return render(request,'pet_app/user_register.html')
    

def login1(request):
    if request.POST:
        email=request.POST["email"]
        password=request.POST["pass"]
        user=authenticate(username=email,password=password)
        if user:
            login(request,user)
            request.session["userID"]=user.id
            return redirect('index')
        else:

            wrong_message="invalid username or wrong password"
            messages.error(request,wrong_message)
            

    return render(request,'pet_app/login.html')

def sign_out(request):
    logout(request)

    return redirect('index')


def dashboard(request):
    return render(request,'pet_app/dashboard.html')

def checkout(request):
    product_name = request.GET.get('product')
    
    total = request.GET.get('total')
    qty = request.GET.get('qty')
    amt = request.GET.get('amt')
    product_image = request.GET.get('product_image')
    product_price = request.GET.get('product_price')
    productId=request.GET.get('product_id')
    
    


    context={
        'product_name':product_name,
        'total':total,
        'qty':qty,
        'amt':amt,
        'product_image':product_image,
        'product_price':product_price
    }

    
    if request.POST:
        u_id=request.session["userID"]


        
        user=user_reg.objects.get(user__id=u_id)
        productId1=request.GET.get('product_id')
        product = get_object_or_404(products, id=productId1)
        house=request.POST['House-Name']
        name=request.POST['Name']
        address=request.POST['Address']
        pincode=request.POST['pincode']
        city=request.POST['city']
        country=request.POST['country']
       
        

        try:
            buy=orders.objects.get(
                               user_id=user,
                               product_id=product,
                               order_status=orders.CART_STAGE,
                                

                                )
            if buy:
                buy.order_status=orders.ORDER_CONFIRMED
                buy.house=house
                buy.name=name
                buy.address=address
                buy.zipcode=pincode
                buy.city=city
                buy.country=country

                product1=productId1
                pro = products.objects.get(id=product1)
                
                pro.stock_quantity -= int(qty)
                pro.save()
                buy.save()

                return redirect('ordered_page')
        except orders.MultipleObjectsReturned:

            buy = orders.objects.filter(user_id=user,
                                        product_id=product,
                                        order_status=orders.CART_STAGE,
                                        ).last()
            if buy:
                buy.order_status=orders.ORDER_CONFIRMED
                buy.house=house
                buy.name=name
                buy.address=address
                buy.zipcode=pincode
                buy.city=city
                buy.country=country
                


                buy.save()

                return redirect('ordered_page')
    

    return render(request,'pet_app/checkout.html',context)

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

@login_required(login_url='register')
def cart1(request):
    user_id=request.session["userID"]
    reg_id=user_reg.objects.get(user__id=user_id)
    data=cart.objects.filter(user_id__id=reg_id.id)

    final_price=0
    total=0
    zipped_price=[]
    for i in (data):

        
        if i.order_qty is not None and i.product_id.product_price is not None:
            product_price=i.product_id.product_price
            off_percentage=i.product_id.offer_percentage

            offered_price= int(product_price) * (int(off_percentage)/100)
            final_price= int(product_price) - int(offered_price)

            total += i.order_qty * final_price
        zipped_price.append((i,final_price))
        
    if total <= 500:
        grand_total=total+100
    else:
        grand_total=total

    context={
        "data":data,
        "grand_total":grand_total,
        "total":total,
        'zipped_price':zipped_price
    }
    return render(request,'pet_app/cart.html',context)

def cartremove(request,id):
    remove=cart.objects.get(id=id)
        
    remove.delete()
    return redirect('cart')

def increaseItem(request,id):
    item = cart.objects.get(id=id)

    price=item.product_id.product_price  
    final_price=0 
    if price is not None:
        product_price=price
        off_percentage=item.product_id.offer_percentage

        offered_price= int(product_price) * (int(off_percentage)/100)
        final_price= int(product_price) - int(offered_price)

    if item.order_qty is None:
        item.order_qty = 0

    item.order_qty += 1
    item.cart_amount+= final_price
    item.save()
        
    
    return redirect('cart')

def decreaseItem(request,id):
    item = cart.objects.get(id=id)
    price=item.product_id.product_price
    final_price=0
    if price is not None:
        product_price=price
        off_percentage=item.product_id.offer_percentage

        offered_price= int(product_price) * (int(off_percentage)/100)
        final_price= int(product_price) - int(offered_price)

    item.order_qty += -1
    item.cart_amount -= final_price
    if item.order_qty < 1:
        item.delete() 
    else:

        item.save()
       
    
    return redirect('cart')

def ordered_page(request):
    
    return render(request,'pet_app/ordered_page.html')
def cancel_order(request,id):
    
    
    data=orders.objects.get(id=id)
    
    data.delete()
    
    return redirect('user_orders')
    
    

def shop(request):
    page=1
    if request.GET:
        page=request.GET.get('page',1)
    data=products.objects.all()
    product_paginator=Paginator(data,8)
    data=product_paginator.get_page(page)


    zipped_price=[]
    

    for i in data:
        if i.product_price is not None:
            product_price=i.product_price
            off_percentage=i.offer_percentage

            offered_price= int(product_price) * (int(off_percentage)/100)
            final_price= int(product_price) - int(offered_price)
            yousave=product_price-final_price
        zipped_price.append((i,final_price))



    if 'search' in  request.POST:
        query_name = request.POST['searched']
        if query_name:
            results = products.objects.filter(product_name__contains=query_name)
            zipped_data=[]
    

            for i in results:
                if i.product_price is not None:
                    product_price=i.product_price
                    off_percentage=i.offer_percentage

                    offered_price= int(product_price) * (int(off_percentage)/100)
                    final_price= int(product_price) - int(offered_price)
                    yousave=product_price-final_price
                zipped_data.append((i,final_price))
        context={
            "results":results,
            'zipped_data':zipped_data,
            'yousave':yousave
        }
        return render(request,'pet_app/shop.html',context)
        
    context={
        "data":data,
        'zipped_price':zipped_price,
        'yousave':yousave
    }

    return render(request,'pet_app/shop.html',context)

def user_dashboard(request):
    user_id=request.session["userID"]
    reg_id=user_reg.objects.get(user__id=user_id)
    try:
        if request.method == 'POST' and request.FILES['profile_pic']:
            user_profile = user_reg.objects.get(user__id=user_id)
            user_profile.profile_pic = request.FILES['profile_pic']
            user_profile.save()
            return redirect('user_dashboard')
    except:
        return redirect('user_dashboard')
        
    context={
        'reg_id':reg_id,
        
    }
    return render(request,'pet_app/user_dashboard.html',context)

def user_orders(request):
    user_id=request.session["userID"]
    reg_id=user_reg.objects.get(user__id=user_id)
    
    datas=orders.objects.filter(user_id__id=reg_id.id).exclude(order_status=orders.CART_STAGE)
    

    context={
        'datas':datas
    }
    
    return render(request,'pet_app/profileOrders.html',context)
def user_address(request):

    user_id=request.session["userID"]
    reg_id=user_reg.objects.get(user__id=user_id)
    data=orders.objects.filter(user_id__id=reg_id.id).exclude(order_status=orders.CART_STAGE)
    context={
        'datas':data,
    }
    return render(request,'pet_app/profileAddress.html',context)

def wishlist1(request):
    
    user_id=request.session["userID"]
    reg_id=user_reg.objects.get(user__id=user_id)
    wishlisted=wishlist.objects.filter(user_id__id=reg_id.id)
    zipped_price=[]
    for i in (wishlisted):
        if i.product_id.product_price is not None:
            product_price=i.product_id.product_price
            off_percentage=i.product_id.offer_percentage

            offered_price= int(product_price) * (int(off_percentage)/100)
            final_price= int(product_price) - int(offered_price)

            
        zipped_price.append((i,final_price))
    
    
    context={
        'wishlisted':wishlisted,
        'zipped_price':zipped_price
    }
    return render(request,'pet_app/wishlist.html',context)
    
def wishlistRemove(request,id):
    
    
    remove=wishlist.objects.get(id=id)
        
    remove.delete()

    
    return redirect('wishlist')

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


@login_required(login_url='register')
def product_details(request,id):
    user_id=request.session["userID"]
    reg_id=user_reg.objects.get(user__id=user_id)
    product = products.objects.get(id=id)
    reviews = Review.objects.filter(product=product)
    total_reviews = Review.objects.filter(product=product).count()
    
    product_price = product.product_price
    off_percentage = product.offer_percentage

    final_price = 0

    if product_price is not None and off_percentage is not None:
        offered_price= int(product_price)* (int(off_percentage)/100)
        final_price= int(product_price) - int(offered_price)
    
    yousave= int(product_price) - int(final_price)

    total_rating = sum(review.rating for review in reviews)
    average_rating = total_rating / len(reviews) if reviews else 0


    if 'submitReview' in request.POST:
        
        product_id = request.POST['product_id']
        content = request.POST['content']
        rating = request.POST['rating'] 
        product = products.objects.get(pk=product_id)
       
        review = Review.objects.create(product=product, content=content, rating=rating, user=reg_id)
        review.save()

        return redirect('shop')

    if 'addToCart' in request.POST:
        
        order_qty=request.POST['qty']
        amt=final_price
        amt=int(amt)*int(order_qty)

        u_id=request.session["userID"]
        
        user=user_reg.objects.get(user__id=u_id)
        
        obj=cart.objects.create(
                                product_id=product,
                                user_id=user,
                                cart_amount=amt,

                                order_qty=order_qty
                                )
       
        
        obj.save()


    if 'buyNow' in request.POST:
        
        qty=request.POST['qty']
        product_name=product.product_name
        product_id=product.id
        product_image=product.product_image
        product_price=product.product_price
        off_percentage = product.offer_percentage

        final_price = 0

        if product_price is not None and off_percentage is not None:
            offered_price= int(product_price)* (int(off_percentage)/100)
            final_price= int(product_price) - int(offered_price)
        

        real_price=int(final_price)*int(qty)

        if real_price <= 500:
            total=real_price+100
        else:
            total=real_price

            
        
        u_id=request.session["userID"]
        
        
        
        user=user_reg.objects.get(user__id=u_id)
        obj=orders.objects.create(product_id=product,
                                user_id=user,
                                order_amount=final_price,
                                order_qty=qty,
                                order_status=orders.CART_STAGE)
        obj.save()
        
        my_dict = {'product': product_name,
                    'total': total,
                    'qty':qty,
                    'amt':real_price,
                    'product_image':product_image,
                    'product_price':final_price,
                    'product_id':product_id,
                    
                    }
        import urllib.parse
        query_string = urllib.parse.urlencode(my_dict)
        
        return redirect('/checkout/?{}'.format(query_string))

    if 'wishlist' in request.POST:
        u_id=request.session["userID"]
        user=user_reg.objects.get(user__id=u_id)



        obj=wishlist.objects.create(product_id=product,
                                    user_id=user
                                    )
                                    
        obj.save()

    context={
        'product': product, 
        'average_rating':average_rating,
        'reviews':reviews,
        'total_reviews':total_reviews,
        'final_price':final_price,
        'yousave':yousave
        
        }
    
        
    return render(request,'pet_app/product_details.html',context)
    


