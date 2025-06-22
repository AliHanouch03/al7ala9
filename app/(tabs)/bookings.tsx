import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Calendar, Clock, Plus } from 'lucide-react-native';
import BookingCard from '@/components/BookingCard';
import { mockBookings } from '@/data/mockData';

export default function BookingsScreen() {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingBookings = mockBookings.filter(
    booking => booking.status === 'confirmed' || booking.status === 'pending'
  );

  const pastBookings = mockBookings.filter(
    booking => booking.status === 'completed' || booking.status === 'cancelled'
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>حجوزاتي</Text>
        
        {/* Tab Selector */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'upcoming' && styles.tabActive]}
            onPress={() => setSelectedTab('upcoming')}
          >
            <Text style={[styles.tabText, selectedTab === 'upcoming' && styles.tabTextActive]}>
              القادمة
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'past' && styles.tabActive]}
            onPress={() => setSelectedTab('past')}
          >
            <Text style={[styles.tabText, selectedTab === 'past' && styles.tabTextActive]}>
              السابقة
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickActionButton}>
          <Plus size={20} color="#FFFFFF" />
          <Text style={styles.quickActionText}>حجز جديد</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.emergencyButton}>
          <Clock size={20} color="#FFFFFF" />
          <Text style={styles.emergencyText}>حجز طارئ</Text>
        </TouchableOpacity>
      </View>

      {/* Bookings List */}
      <ScrollView style={styles.bookingsContainer} showsVerticalScrollIndicator={false}>
        {selectedTab === 'upcoming' ? (
          <>
            {upcomingBookings.length > 0 ? (
              <>
                <Text style={styles.sectionTitle}>الحجوزات القادمة ({upcomingBookings.length})</Text>
                {upcomingBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onPress={() => console.log('View booking:', booking.id)}
                  />
                ))}
              </>
            ) : (
              <View style={styles.emptyState}>
                <Calendar size={64} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>لا توجد حجوزات قادمة</Text>
                <Text style={styles.emptySubtitle}>احجز موعدك التالي مع حلاقك المفضل</Text>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>احجز الآن</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        ) : (
          <>
            {pastBookings.length > 0 ? (
              <>
                <Text style={styles.sectionTitle}>الحجوزات السابقة ({pastBookings.length})</Text>
                {pastBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onPress={() => console.log('View booking:', booking.id)}
                  />
                ))}
              </>
            ) : (
              <View style={styles.emptyState}>
                <Clock size={64} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>لا توجد حجوزات سابقة</Text>
                <Text style={styles.emptySubtitle}>ستظهر حجوزاتك المكتملة هنا</Text>
              </View>
            )}
          </>
        )}

        {/* Ramadan Special Banner */}
        <View style={styles.specialBanner}>
          <Text style={styles.bannerTitle}>🌙 عروض رمضان الخاصة</Text>
          <Text style={styles.bannerText}>
            باقات عائلية مع خصم 20% - ساعات ممتدة حتى الساعة 2 صباحاً
          </Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>اعرف المزيد</Text>
          </TouchableOpacity>
        </View>

        {/* Loyalty Program */}
        <View style={styles.loyaltyCard}>
          <Text style={styles.loyaltyTitle}>برنامج الولاء</Text>
          <Text style={styles.loyaltyText}>
            أكمل 10 حجوزات واحصل على قصة مجانية! 
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '30%' }]} />
          </View>
          <Text style={styles.progressText}>3 من 10 حجوزات</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#D97706',
    fontFamily: 'Cairo-Bold',
  },
  quickActions: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D97706',
    borderRadius: 12,
    padding: 12,
  },
  quickActionText: {
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF4444',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  emergencyText: {
    fontSize: 14,
    fontFamily: 'Cairo-Bold',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  bookingsContainer: {
    flex: 1,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginHorizontal: 16,
    marginBottom: 12,
    marginTop: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontFamily: 'Cairo-Bold',
    color: '#374151',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  bookButton: {
    backgroundColor: '#D97706',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  bookButtonText: {
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
    color: '#FFFFFF',
  },
  specialBanner: {
    backgroundColor: '#14B8A6',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
  },
  bannerTitle: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  bannerText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  bannerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
  bannerButtonText: {
    fontSize: 14,
    fontFamily: 'Cairo-Bold',
    color: '#14B8A6',
  },
  loyaltyCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
  },
  loyaltyTitle: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginBottom: 8,
  },
  loyaltyText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    textAlign: 'right',
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginBottom: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#D97706',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
});