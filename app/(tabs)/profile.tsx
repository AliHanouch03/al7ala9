import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { User, Settings, CreditCard, MessageCircle, Star, Gift, CircleHelp as HelpCircle, LogOut, CreditCard as Edit3, Bell, Shield, Globe } from 'lucide-react-native';

export default function ProfileScreen() {
  const menuItems = [
    {
      icon: <Edit3 size={20} color="#6B7280" />,
      title: 'تعديل الملف الشخصي',
      titleEn: 'Edit Profile',
      onPress: () => console.log('Edit Profile'),
    },
    {
      icon: <CreditCard size={20} color="#6B7280" />,
      title: 'طرق الدفع',
      titleEn: 'Payment Methods',
      onPress: () => console.log('Payment Methods'),
    },
    {
      icon: <Bell size={20} color="#6B7280" />,
      title: 'الإشعارات',
      titleEn: 'Notifications',
      onPress: () => console.log('Notifications'),
    },
    {
      icon: <Star size={20} color="#6B7280" />,
      title: 'تقييماتي',
      titleEn: 'My Reviews',
      onPress: () => console.log('My Reviews'),
    },
    {
      icon: <Gift size={20} color="#6B7280" />,
      title: 'برنامج الولاء',
      titleEn: 'Loyalty Program',
      onPress: () => console.log('Loyalty Program'),
    },
    {
      icon: <MessageCircle size={20} color="#6B7280" />,
      title: 'واتساب للدعم',
      titleEn: 'WhatsApp Support',
      onPress: () => console.log('WhatsApp Support'),
    },
    {
      icon: <Globe size={20} color="#6B7280" />,
      title: 'اللغة',
      titleEn: 'Language',
      onPress: () => console.log('Language'),
    },
    {
      icon: <HelpCircle size={20} color="#6B7280" />,
      title: 'المساعدة والدعم',
      titleEn: 'Help & Support',
      onPress: () => console.log('Help & Support'),
    },
    {
      icon: <Shield size={20} color="#6B7280" />,
      title: 'الخصوصية والأمان',
      titleEn: 'Privacy & Security',
      onPress: () => console.log('Privacy & Security'),
    },
    {
      icon: <Settings size={20} color="#6B7280" />,
      title: 'الإعدادات',
      titleEn: 'Settings',
      onPress: () => console.log('Settings'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>الملف الشخصي</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200' }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>محمد الأحمدي</Text>
            <Text style={styles.userNameEn}>Mohammed Al-Ahmadi</Text>
            <Text style={styles.userPhone}>+212 6XX XXX XXX</Text>
            <View style={styles.membershipBadge}>
              <Star size={16} color="#D97706" fill="#D97706" />
              <Text style={styles.membershipText}>عضو ذهبي</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Edit3 size={16} color="#D97706" />
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>حجوزات مكتملة</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>تقييم متوسط</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>650</Text>
            <Text style={styles.statLabel}>نقاط الولاء</Text>
          </View>
        </View>

        {/* Special Offers */}
        <View style={styles.offersContainer}>
          <Text style={styles.offersTitle}>عروض خاصة لك</Text>
          <View style={styles.offerCard}>
            <Text style={styles.offerTitle}>🎁 خصم 25% على الحجز التالي</Text>
            <Text style={styles.offerDescription}>
              احصل على خصم 25% عند حجز خدمة العيد قبل نهاية الشهر
            </Text>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={styles.offerButtonText}>استخدم الآن</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={item.onPress}>
              <View style={styles.menuItemContent}>
                {item.icon}
                <View style={styles.menuItemText}>
                  <Text style={styles.menuItemTitle}>{item.title}</Text>
                  <Text style={styles.menuItemSubtitle}>{item.titleEn}</Text>
                </View>
              </View>
              <View style={styles.menuArrow}>
                <Text style={styles.arrowText}>›</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#EF4444" />
          <Text style={styles.logoutText}>تسجيل الخروج</Text>
        </TouchableOpacity>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>الحلاق v1.0.0</Text>
          <Text style={styles.appDescription}>
            منصة حجز الحلاقين المعتمدة في المغرب
          </Text>
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
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginBottom: 4,
  },
  userNameEn: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'right',
    marginBottom: 4,
  },
  userPhone: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'right',
    marginBottom: 8,
  },
  membershipBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  membershipText: {
    fontSize: 12,
    fontFamily: 'Cairo-Bold',
    color: '#D97706',
    marginLeft: 4,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    marginTop: 0,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 16,
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
  offersContainer: {
    margin: 16,
    marginTop: 0,
  },
  offersTitle: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginBottom: 12,
  },
  offerCard: {
    backgroundColor: '#10B981',
    borderRadius: 16,
    padding: 20,
  },
  offerTitle: {
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
    color: '#FFFFFF',
    textAlign: 'right',
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#FFFFFF',
    textAlign: 'right',
    marginBottom: 16,
    lineHeight: 20,
  },
  offerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
  },
  offerButtonText: {
    fontSize: 14,
    fontFamily: 'Cairo-Bold',
    color: '#10B981',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    marginLeft: 12,
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontFamily: 'Cairo-Regular',
    color: '#1F2937',
    textAlign: 'right',
    marginBottom: 2,
  },
  menuItemSubtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    textAlign: 'right',
  },
  menuArrow: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 16,
    color: '#9CA3AF',
    transform: [{ rotate: '180deg' }],
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
    color: '#EF4444',
    marginLeft: 8,
  },
  appInfo: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  appVersion: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginBottom: 4,
  },
  appDescription: {
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
    color: '#9CA3AF',
    textAlign: 'center',
  },
});