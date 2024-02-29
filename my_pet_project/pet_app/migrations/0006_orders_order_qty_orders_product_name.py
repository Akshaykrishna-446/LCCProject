# Generated by Django 5.0 on 2024-02-15 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0005_alter_orders_product_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='order_qty',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='orders',
            name='product_name',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
