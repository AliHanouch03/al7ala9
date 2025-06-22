import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Scissors, Chrome as Home, Calendar, Star } from 'lucide-react-native';

interface ServiceCardProps {
  title: string;
  titleAr: string;
  description: string;
  icon: React.ReactNode;
  onPress: () => void;
  color: string;
}

export default function ServiceCard({ 
  title, 
  titleAr, 
  description, 
  icon, 
  onPress, 
  color 
}: ServiceCardProps) {
  return (
    <TouchableOpacity style={[styles.container, { borderColor: color }]} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        {icon}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{titleAr}</Text>
        <Text style={styles.subtitle}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    marginBottom: 4,
    textAlign: 'right',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    lineHeight: 20,
  },
});