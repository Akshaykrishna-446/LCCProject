# Generated by Django 5.0 on 2024-02-26 13:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0021_wishlist_ordered_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wishlist',
            name='ordered_date',
        ),
    ]
