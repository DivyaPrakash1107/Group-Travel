from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Sum, Avg
from .models import *
from .serializers import *

class TripViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        if self.request.user.is_staff:
            return Trip.objects.all()
        return Trip.objects.filter(agent__user=self.request.user)

    @action(detail=True, methods=['post'])
    def add_dates(self, request, pk=None):
        trip = self.get_object()
        serializer = TripDateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(trip=trip)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BookingViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Booking.objects.all()
        return Booking.objects.filter(trip_date__trip__agent__user=self.request.user)

    @action(detail=True, methods=['post'])
    def update_status(self, request, pk=None):
        booking = self.get_object()
        booking.booking_status = request.data.get('status')
        booking.save()
        return Response({'status': 'booking status updated'})

class AnalyticsViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        agent = request.user.travelagent
        trips = Trip.objects.filter(agent=agent)
        bookings = Booking.objects.filter(trip_date__trip__agent=agent)

        analytics = {
            'total_trips': trips.count(),
            'total_bookings': bookings.count(),
            'total_revenue': bookings.filter(payment_status='completed')
                .aggregate(Sum('total_amount'))['total_amount__sum'] or 0,
            'average_rating': Review.objects.filter(booking__trip_date__trip__agent=agent)
                .aggregate(Avg('rating'))['rating__avg'] or 0,
        }
        return Response(analytics) 