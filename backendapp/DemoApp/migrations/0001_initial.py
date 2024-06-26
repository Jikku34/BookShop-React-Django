# Generated by Django 5.0.6 on 2024-05-24 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BookModel',
            fields=[
                ('book_id', models.AutoField(primary_key=True, serialize=False)),
                ('book_name', models.CharField(max_length=50)),
                ('book_price', models.IntegerField()),
                ('book_description', models.TextField()),
                ('book_image', models.ImageField(null=True, upload_to='images/')),
            ],
        ),
    ]
