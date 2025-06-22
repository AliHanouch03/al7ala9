import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Star, MapPin, Clock, Shield, CircleCheck as CheckCircle } from 'lucide-react-native';
import { Barber } from '@/types';

interface BarberCardProps {
  barber: Barber;
  onPress: () => void;
}

export default function BarberCard({ barber, onPress }: BarberCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: barber.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameAr}>{barber.nameAr}</Text>
            <Text style={styles.name}>{barber.name}</Text>
            {barber.isVerified && (
              <CheckCircle size={16} color="#10B981" style={styles.verifiedIcon} />
            )}
          </View>
          
          <View style={styles.ratingContainer}>
            <Star size={16} color="#F59E0B" fill="#F59E0B" />
            <Text style={styles.rating}>{barber.rating}</Text>
            <Text style={styles.reviewCount}>({barber.reviewCount})</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <MapPin size={14} color="#6B7280" />
          <Text style={styles.location}>{barber.locationAr}</Text>
          <Text style={styles.distance}>{barber.distance} كم</Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.hygieneContainer}>
            <Shield size={14} color="#10B981" />
            <Text style={styles.hygieneText}>نظافة {barber.hygieneRating}/5</Text>
          </View>
          
          <Text style={styles.priceRange}>
            {barber.priceRange.min}-{barber.priceRange.max} درهم
          </Text>
        </View>

        <View style={styles.statusContainer}>
          {barber.isAvailable ? (
            <View style={styles.availableContainer}>
              <View style={styles.availableDot} />
              <Text style={styles.availableText}>متاح الآن</Text>
            </View>
          ) : (
            <View style={styles.busyContainer}>
              <Clock size={14} color="#F59E0B" />
              <Text style={styles.busyText}>التالي: {barber.nextAvailable}</Text>
            </View>
          )}
        </View>

        <View style={styles.specialtiesContainer}>
          {barber.specialties.slice(0, 2).map((specialty, index) => (
            <View key={index} style={styles.specialtyTag}>
              <Text style={styles.specialtyText}>{specialty}</Text>
            </View>
          ))}
        </View>
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
  image: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameAr: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    marginRight: 8,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginRight: 8,
  },
  verifiedIcon: {
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    marginLeft: 4,
    flex: 1,
  },
  distance: {
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
    color: '#D97706',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  hygieneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hygieneText: {
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
    color: '#10B981',
    marginLeft: 4,
  },
  priceRange: {
    fontSize: 14,
    fontFamily: 'Cairo-Bold',
    color: '#D97706',
  },
  statusContainer: {
    marginBottom: 12,
  },
  availableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availableDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  availableText: {
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
    color: '#10B981',
  },
  busyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  busyText: {
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
    color: '#F59E0B',
    marginLeft: 4,
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specialtyTag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 4,
  },
  specialtyText: {
    fontSize: 11,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
});