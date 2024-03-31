from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser

class Login(AbstractUser):
    userType=models.CharField(max_length=50)
    
    viewpassword=models.CharField(max_length=50,null=True)
    
    def _str_(self):
        return self.username

class user_reg(models.Model):
    
    user=models.OneToOneField(Login,on_delete=models.CASCADE,null=True)
    user_full_name=models.CharField(max_length=100,null=True)
    user_email=models.EmailField(null=True)
    user_mob_number=models.PositiveIntegerField(null=True)
    user_DOB=models.DateField(null=True)
    user_contry=models.TextField(null=True)
    user_password=models.TextField(null=True)
    user_cpassword=models.TextField(null=True)
    profile_pic = models.ImageField(upload_to='profile_pics/', blank=True, null=True)




class products(models.Model):
    

    product_name=models.TextField(max_length=100)
    product_desc=models.TextField(max_length=300)
    product_image=models.ImageField()
    product_price=models.IntegerField()
    priority=models.IntegerField(default=5)
    stock_quantity = models.IntegerField(default=0)
    offer_percentage=models.IntegerField(default=0)

    
    def is_in_stock(self):
        return self.stock_quantity > 0
    
    
    def __str__(self):
        return self.product_name
    
class Review(models.Model):
    product = models.ForeignKey(products, on_delete=models.CASCADE)
    content = models.TextField()
    rating = models.IntegerField()
    user = models.ForeignKey(user_reg, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.user_full_name}'s review for {self.product.product_name}"

class wishlist(models.Model):
    user_id=models.ForeignKey(user_reg,on_delete=models.CASCADE)
    product_id=models.ForeignKey(products,on_delete=models.CASCADE,default=None)
    

class cart(models.Model):

    user_id=models.ForeignKey(user_reg,on_delete=models.CASCADE,related_name='added_items')
    product_id=models.ForeignKey(products,on_delete=models.CASCADE)
    order_qty=models.IntegerField(null=True)
    cart_amount=models.FloatField()
    
    
class orders(models.Model):
    
    CART_STAGE=0
    ORDER_CONFIRMED=1
    ORDER_PROCESSED='ORDER_PROCESSED'
    ORDER_DELIVERED='ORDER_DELIVERED'
    ORDER_REJECTED='ORDER_REJECTED'
    STATUS_CHOICE=((ORDER_PROCESSED,'ORDER_PROCESSED'),
                   (ORDER_DELIVERED,'ORDER_DELIVERED'),
                   (ORDER_REJECTED,'ORDER_REJECTED')
                   )
    order_status=models.TextField(choices=STATUS_CHOICE,default=CART_STAGE)
    user_id=models.ForeignKey(user_reg,on_delete=models.CASCADE)
    product_id=models.ForeignKey(products,on_delete=models.CASCADE,null=True)
    name=models.CharField(max_length=150, null=True)
    house=models.CharField(max_length=100,null=True)
    address=models.TextField(max_length=400,null=True)
    zipcode=models.TextField(max_length=100,null=True)
    city=models.CharField(max_length=100,null=True)
    country=models.CharField(max_length=100,null=True)
    order_amount=models.IntegerField(null=True)
    order_qty=models.IntegerField(null=True)
    ordered_date= models.DateField(auto_now_add=True,null=True)
    def __str__(self):
        return "order-{}-{}".format(self.id,self.user_id.user_full_name)

class payment(models.Model):
    user_id=models.ForeignKey(user_reg,on_delete=models.CASCADE)
    amount=models.IntegerField()
    payment_date=models.DateField()



# models of supplier.
    


class supplier_reg(models.Model):
    supplier_full_name=models.CharField(max_length=100)
    supplier_email=models.EmailField()
    supplier_mob_number=models.PositiveIntegerField()
    supplier_password=models.TextField()
    supplier_cpassword=models.TextField()








# models of admin.
    
class category(models.Model):

    category_product_name=models.CharField(max_length=50,null=True)
    
