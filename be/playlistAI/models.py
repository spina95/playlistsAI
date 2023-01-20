from django.db import models

# Create your models here.
from django.db import models

class Menu(models.Model):

    class Meta:
        db_table = "menu"

    name = models.CharField(max_length=100)
