import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, Clock, MapPin, CreditCard } from 'lucide-react-native';
import { Booking } from '@/types';

interface BookingCardProps {
  booking: Booking;
  onPress: () => void;
}

export default function BookingCard({ booking, onPress }: BookingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '#10B981';
      case 'pending':
        return '#F59E0B';
      case 'completed':
        return '#6B7280';
      case 'cancelled':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const getStatusTextAr = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'مؤكد';
      case 'pending':
        return 'في الانتظار';
      case 'completed':
        return 'تم';
      case 'cancelled':
        return 'ملغي';
      default:
        return status;
    }
  };

  const getPaymentMethodAr = (method: string) => {
    switch (method) {
      case 'cash':
        return 'نقدي';
      case 'orange_money':
        return 'أورانج موني';
      case 'cih_pay':
        return 'سي آي إتش باي';
      case 'on_site':
        return 'دفع في المكان';
      default:
        return method;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceName}>{booking.serviceNameAr}</Text>
          <Text style={styles.barberName}>{booking.barberNameAr}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(booking.status) }]}>
          <Text style={styles.statusText}>{getStatusTextAr(booking.status)}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Calendar size={16} color="#6B7280" />
          <Text style={styles.detailText}>{booking.date}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Clock size={16} color="#6B7280" />
          <Text style={styles.detailText}>{booking.time}</Text>
        </View>

        <View style={styles.detailRow}>
          <MapPin size={16} color="#6B7280" />
          <Text style={styles.detailText}>
            {booking.location === 'home' ? 'زيارة منزلية' : 'في الصالون'}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <CreditCard size={16} color="#6B7280" />
          <Text style={styles.detailText}>{getPaymentMethodAr(booking.paymentMethod)}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>{booking.price} درهم</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    marginBottom: 4,
    textAlign: 'right',
  },
  barberName: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    textAlign: 'right',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Cairo-Bold',
    color: '#FFFFFF',
  },
  detailsContainer: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    marginLeft: 8,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#D97706',
  },
});