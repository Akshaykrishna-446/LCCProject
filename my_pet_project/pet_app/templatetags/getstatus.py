# getstatus.py

from django import template

register = template.Library()

@register.simple_tag
def getstatus(status):
    if status == 'ORDER_PROCESSED':
        return 'Order Processed'
    elif status == 'ORDER_DELIVERED':
        return 'Order Delivered'
    elif status == 'ORDER_REJECTED':
        return 'Order Rejected'
    
    else:
        return "Order Confirmed"
