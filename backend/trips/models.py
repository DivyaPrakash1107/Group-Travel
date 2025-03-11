from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class TravelAgent(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=200)
    license_number = models.CharField(max_length=50)
    address = models.TextField()
    phone = models.CharField(max_length=20)
    website = models.URLField(blank=True)
    verified = models.BooleanField(default=False)

class Trip(models.Model):
    agent = models.ForeignKey(TravelAgent, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    theme = models.CharField(max_length=50)
    duration = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    max_participants = models.IntegerField()
    overview = models.TextField()
    inclusions = models.JSONField()
    exclusions = models.JSONField()
    itinerary = models.JSONField()
    cancellation_policy = models.TextField()
    terms_conditions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

class TripDate(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    available_seats = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, default='open')

class Booking(models.Model):
    trip_date = models.ForeignKey(TripDate, on_delete=models.CASCADE)
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    booking_date = models.DateTimeField(auto_now_add=True)
    num_participants = models.IntegerField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.CharField(max_length=20)
    booking_status = models.CharField(max_length=20)
    special_requests = models.TextField(blank=True)

class Review(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    images = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)

class TripImage(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='trip_images/')
    caption = models.CharField(max_length=200, blank=True)

class Payment(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=50)
    transaction_id = models.CharField(max_length=100)
    status = models.CharField(max_length=20) 