# Generated by Django 5.0 on 2024-02-26 06:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0017_alter_orders_product_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='product_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pet_app.products'),
        ),
    ]