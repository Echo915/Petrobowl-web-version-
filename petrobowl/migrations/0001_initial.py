# Generated by Django 4.0.10 on 2023-02-28 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='QuizSetOne',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.TextField(max_length=5000)),
                ('answer', models.TextField(max_length=5000)),
            ],
        ),
    ]