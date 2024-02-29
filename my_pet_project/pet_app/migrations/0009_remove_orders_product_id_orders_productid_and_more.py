# Generated by Django 5.0 on 2024-02-23 12:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0008_remove_orders_product_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orders',
            name='product_id',
        ),
        migrations.AddField(
            model_name='orders',
            name='productid',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pet_app.products'),
        ),
        migrations.AlterField(
            model_name='orders',
            name='order_amount',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='orders',
            name='ordered_date',
            field=models.DateField(null=True),
        ),
    ]
