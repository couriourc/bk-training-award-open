# Generated by Django 2.2.6 on 2022-01-19 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('awards_apply', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='secretary',
            name='parent',
            field=models.IntegerField(null=True, verbose_name='父级组织id'),
        ),
    ]
