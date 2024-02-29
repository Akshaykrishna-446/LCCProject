from email.policy import default
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
#Abstract user instead of user in case of variable users

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
    user_password=models.TextField(null=True)
    user_cpassword=models.TextField(null=True)


class feedback(models.Model):

    user_id=models.ForeignKey(user_reg,on_delete=models.CASCADE)
    user_feedback=models.TextField(max_length=500)
    feedback_date=models.DateField()

class products(models.Model):
    
    product_name=models.TextField(max_length=100)
    product_desc=models.TextField(max_length=300)
    product_image=models.ImageField()
    product_price=models.IntegerField()
 


class wishlist(models.Model):
    user_id=models.ForeignKey(user_reg,on_delete=models.CASCADE)
    product_id=models.ForeignKey(products,on_delete=models.CASCADE,default=None)
    

class cart(models.Model):

    user_id=models.ForeignKey(user_reg,on_delete=models.CASCADE)
    product_id=models.ForeignKey(products,on_delete=models.CASCADE)
    order_qty=models.IntegerField(null=True)
    cart_amount=models.IntegerField()
    
class orders(models.Model):
    user_id=models.ForeignKey(user_reg,on_delete=models.CASCADE)
    product_id=models.ForeignKey(products,on_delete=models.CASCADE,default=None)

    order_amount=models.IntegerField(null=True)
    order_qty=models.IntegerField(null=True)
    ordered_date=models.DateField(null=True)


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
    
