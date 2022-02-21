# Generated by Django 2.2.6 on 2022-02-21 10:31

import django_mysql.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('admin_username', models.CharField(max_length=50, verbose_name='管理员')),
            ],
        ),
        migrations.CreateModel(
            name='AwardApplicationRecord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('award_id', models.IntegerField(verbose_name='奖项id')),
                ('application_time', models.DateTimeField(verbose_name='申请时间')),
                ('application_reason', models.TextField(verbose_name='申请理由')),
                ('application_users', django_mysql.models.JSONField(default=list, verbose_name='申请人username列表')),
                ('application_attachments', django_mysql.models.JSONField(default=list, verbose_name='申请附件地址列表')),
                ('approval_state', models.IntegerField(choices=[
                 (0, '待评审'), (1, '评审通过'), (2, '评审不通过'), (3, '草稿')], default=3, verbose_name='评审状态')),
                ('approval_users', django_mysql.models.JSONField(default=dict, null=True, verbose_name='评审人map')),
                ('approval_turn', models.IntegerField(default=0, verbose_name='评审轮次')),
                ('approval_time', models.DateTimeField(null=True, verbose_name='评审时间')),
                ('approval_text', models.TextField(null=True, verbose_name='评审评语')),
            ],
        ),
        migrations.CreateModel(
            name='Awards',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('award_name', models.CharField(max_length=128, verbose_name='奖项名称')),
                ('award_level', models.CharField(max_length=128, verbose_name='奖项级别')),
                ('award_description', models.CharField(max_length=512, verbose_name='奖项描述')),
                ('award_department_fullname', models.CharField(max_length=50, verbose_name='奖项所属部门full_name')),
                ('award_reviewers', django_mysql.models.JSONField(default=list, verbose_name='奖项评委')),
                ('award_consultant', models.CharField(max_length=128, verbose_name='奖项顾问')),
                ('award_image', models.ImageField(max_length=1000, upload_to='img')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('start_time', models.DateTimeField(verbose_name='开始申请时间')),
                ('end_time', models.DateTimeField(verbose_name='截止申请时间')),
                ('approval_state', models.IntegerField(choices=[
                 (0, '未开始'), (1, '已开始'), (2, '已结束')], default=3, verbose_name='评审状态')),
            ],
        ),
        migrations.CreateModel(
            name='Secretary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group_id', models.IntegerField(unique=True, verbose_name='组id')),
                ('secretaries', django_mysql.models.JSONField(default=list, verbose_name='组内秘书')),
                ('group_full_name', models.CharField(max_length=50, verbose_name='组full_name')),
            ],
        ),
    ]
