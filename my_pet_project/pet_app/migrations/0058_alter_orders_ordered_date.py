# Generated by Django 5.0.1 on 2024-03-26 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0057_products_offer_percentage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='ordered_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]