# Generated by Django 5.0 on 2024-02-27 14:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0027_rename_productname_products_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='products',
            old_name='name',
            new_name='product_name',
        ),
    ]