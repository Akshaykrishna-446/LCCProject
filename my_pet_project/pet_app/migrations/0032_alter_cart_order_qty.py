# Generated by Django 5.0.1 on 2024-03-06 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0031_rename_name_products_product_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='order_qty',
            field=models.DecimalField(decimal_places=100, max_digits=100, null=True),
        ),
    ]