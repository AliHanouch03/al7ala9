import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Scissors, Chrome as Home, Calendar, Star, Users, Heart } from 'lucide-react-native';
import ServiceCard from '@/components/ServiceCard';

export default function HomeScreen() {
  const services = [
    {
      title: 'Quick Haircut',
      titleAr: 'قص شعر سريع',
      description: 'احجز قص شعر سريع في أقرب صالون',
      icon: <Scissors size={24} color="#FFFFFF" />,
      color: '#D97706',
      onPress: () => console.log('Quick Haircut'),
    },
    {
      title: 'Home Service',
      titleAr: 'خدمة منزلية',
      description: 'حلاق يأتي إلى منزلك براحة تامة',
      icon: <Home size={24} color="#FFFFFF" />,
      color: '#10B981',
      onPress: () => console.log('Home Service'),
    },
    {
      title: 'Special Events',
      titleAr: 'المناسبات الخاصة',
      description: 'باقات العرس والعيد والمناسبات',
      icon: <Star size={24} color="#FFFFFF" />,
      color: '#8B5CF6',
      onPress: () => console.log('Special Events'),
    },
    {
      title: 'Book Appointment',
      titleAr: 'حجز موعد',
      description: 'احجز موعداً مع حلاقك المفضل',
      icon: <Calendar size={24} color="#FFFFFF" />,
      color: '#EF4444',
      onPress: () => console.log('Book Appointment'),
    },
    {
      title: 'Women Only',
      titleAr: 'نساء فقط',
      description: 'مصففات شعر للنساء - خدمة محتشمة',
      icon: <Users size={24} color="#FFFFFF" />,
      color: '#EC4899',
      onPress: () => console.log('Women Only'),
    },
    {
      title: 'Ramadan Special',
      titleAr: 'عروض رمضان',
      description: 'باقات عائلية وساعات ممتدة',
      icon: <Heart size={24} color="#FFFFFF" />,
      color: '#14B8A6',
      onPress: () => console.log('Ramadan Special'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>أهلاً وسهلاً</Text>
          <Text style={styles.subtitle}>أين تريد أن تحلق اليوم؟</Text>
        </View>

        {/* Ramadan Banner */}
        <View style={styles.specialBanner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>🌙 وضع رمضان الكريم</Text>
            <Text style={styles.bannerText}>
              ساعات عمل ممتدة وباقات عائلية خاصة
            </Text>
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>500+</Text>
            <Text style={styles.statLabel}>حلاق وصالون</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5000+</Text>
            <Text style={styles.statLabel}>عميل راضي</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>تقييم المنصة</Text>
          </View>
        </View>

        {/* Services */}
        <View style={styles.servicesContainer}>
          <Text style={styles.servicesTitle}>خدماتنا</Text>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              titleAr={service.titleAr}
              description={service.description}
              icon={service.icon}
              color={service.color}
              onPress={service.onPress}
            />
          ))}
        </View>

        {/* Why Choose Us */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>لماذا الحلاق؟</Text>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>✅</Text>
              <Text style={styles.featureText}>حلاقون معتمدون ومراجعون</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🏠</Text>
              <Text style={styles.featureText}>خدمة منزلية آمنة ومريحة</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>💳</Text>
              <Text style={styles.featureText}>طرق دفع متنوعة ومرنة</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>⚡</Text>
              <Text style={styles.featureText}>حجز سريع في أقل من دقيقة</Text>
            </View>
          </View>
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
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 28,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    textAlign: 'right',
  },
  specialBanner: {
    backgroundColor: '#14B8A6',
    margin: 16,
    borderRadius: 16,
    padding: 20,
  },
  bannerContent: {
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 20,
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
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    padding: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    color: '#D97706',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
  servicesContainer: {
    marginTop: 8,
  },
  servicesTitle: {
    fontSize: 22,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  featuresContainer: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
  },
  featuresTitle: {
    fontSize: 20,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginBottom: 16,
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  featureIcon: {
    fontSize: 20,
    marginLeft: 12,
  },
  featureText: {
    fontSize: 16,
    fontFamily: 'Cairo-Regular',
    color: '#374151',
    textAlign: 'right',
  },
});