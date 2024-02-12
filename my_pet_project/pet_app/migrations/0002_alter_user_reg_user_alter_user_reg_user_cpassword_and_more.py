# Generated by Django 5.0.1 on 2024-01-18 06:58

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_reg',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='user_reg',
            name='user_cpassword',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='user_reg',
            name='user_email',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='user_reg',
            name='user_full_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='user_reg',
            name='user_mob_number',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='user_reg',
            name='user_password',
            field=models.TextField(null=True),
        ),
    ]