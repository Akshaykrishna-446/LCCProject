# Generated by Django 5.0.1 on 2024-03-12 12:12

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0037_remove_products_offer_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_reg',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customer_profile', to=settings.AUTH_USER_MODEL),
        ),
    ]