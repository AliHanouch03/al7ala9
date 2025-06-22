import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Search, Filter, MapPin, Users } from 'lucide-react-native';
import BarberCard from '@/components/BarberCard';
import { barbers } from '@/data/mockData';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female'>('all');
  const [selectedService, setSelectedService] = useState<'all' | 'haircut' | 'home' | 'event'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBarbers = barbers.filter(barber => {
    const matchesSearch = barber.nameAr.includes(searchQuery) || 
                         barber.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         barber.locationAr.includes(searchQuery);
    
    const matchesGender = selectedGender === 'all' || 
                         barber.gender === selectedGender || 
                         barber.gender === 'both';
    
    return matchesSearch && matchesGender;
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>البحث عن الحلاقين</Text>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="ابحث عن حلاق أو منطقة..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filter Toggle */}
        <TouchableOpacity 
          style={styles.filterButton} 
          onPress={() => setShowFilters(!showFilters)}
        >
          <Filter size={20} color="#D97706" />
          <Text style={styles.filterButtonText}>التصفية</Text>
        </TouchableOpacity>

        {/* Filters */}
        {showFilters && (
          <View style={styles.filtersContainer}>
            {/* Gender Filter */}
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>النوع</Text>
              <View style={styles.filterOptions}>
                <TouchableOpacity 
                  style={[styles.filterOption, selectedGender === 'all' && styles.filterOptionActive]}
                  onPress={() => setSelectedGender('all')}
                >
                  <Text style={[styles.filterOptionText, selectedGender === 'all' && styles.filterOptionTextActive]}>
                    الكل
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filterOption, selectedGender === 'male' && styles.filterOptionActive]}
                  onPress={() => setSelectedGender('male')}
                >
                  <Text style={[styles.filterOptionText, selectedGender === 'male' && styles.filterOptionTextActive]}>
                    رجال
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filterOption, selectedGender === 'female' && styles.filterOptionActive]}
                  onPress={() => setSelectedGender('female')}
                >
                  <Text style={[styles.filterOptionText, selectedGender === 'female' && styles.filterOptionTextActive]}>
                    نساء
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Service Filter */}
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>نوع الخدمة</Text>
              <View style={styles.filterOptions}>
                <TouchableOpacity 
                  style={[styles.filterOption, selectedService === 'all' && styles.filterOptionActive]}
                  onPress={() => setSelectedService('all')}
                >
                  <Text style={[styles.filterOptionText, selectedService === 'all' && styles.filterOptionTextActive]}>
                    الكل
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filterOption, selectedService === 'haircut' && styles.filterOptionActive]}
                  onPress={() => setSelectedService('haircut')}
                >
                  <Text style={[styles.filterOptionText, selectedService === 'haircut' && styles.filterOptionTextActive]}>
                    قص شعر
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filterOption, selectedService === 'home' && styles.filterOptionActive]}
                  onPress={() => setSelectedService('home')}
                >
                  <Text style={[styles.filterOptionText, selectedService === 'home' && styles.filterOptionTextActive]}>
                    منزلي
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filterOption, selectedService === 'event' && styles.filterOptionActive]}
                  onPress={() => setSelectedService('event')}
                >
                  <Text style={[styles.filterOptionText, selectedService === 'event' && styles.filterOptionTextActive]}>
                    مناسبات
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>

      {/* Quick Filters */}
      <View style={styles.quickFilters}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.quickFilter}>
            <MapPin size={16} color="#D97706" />
            <Text style={styles.quickFilterText}>الأقرب إليك</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickFilter}>
            <Users size={16} color="#D97706" />
            <Text style={styles.quickFilterText}>الأعلى تقييماً</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickFilter}>
            <Text style={styles.quickFilterText}>متاح الآن</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickFilter}>
            <Text style={styles.quickFilterText}>خدمة منزلية</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Results */}
      <ScrollView style={styles.resultsContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.resultsCount}>
          {filteredBarbers.length} حلاق متاح
        </Text>
        
        {filteredBarbers.map((barber) => (
          <BarberCard
            key={barber.id}
            barber={barber}
            onPress={() => console.log('View barber:', barber.id)}
          />
        ))}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Cairo-Regular',
    color: '#1F2937',
    textAlign: 'right',
    marginRight: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  filterButtonText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#D97706',
    marginLeft: 8,
  },
  filtersContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterTitle: {
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    textAlign: 'right',
    marginBottom: 8,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  filterOption: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 8,
    marginBottom: 8,
  },
  filterOptionActive: {
    backgroundColor: '#D97706',
    borderColor: '#D97706',
  },
  filterOptionText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
  },
  filterOptionTextActive: {
    color: '#FFFFFF',
  },
  quickFilters: {
    padding: 16,
    paddingBottom: 8,
  },
  quickFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  quickFilterText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#D97706',
    marginLeft: 4,
  },
  resultsContainer: {
    flex: 1,
    paddingTop: 8,
  },
  resultsCount: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#6B7280',
    textAlign: 'right',
    marginHorizontal: 16,
    marginBottom: 8,
  },
});