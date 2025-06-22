export interface Barber {
  id: string;
  name: string;
  nameAr: string;
  image: string;
  rating: number;
  reviewCount: number;
  hygieneRating: number;
  location: string;
  locationAr: string;
  distance: number;
  services: Service[];
  specialties: string[];
  gender: 'male' | 'female' | 'both';
  isVerified: boolean;
  isAvailable: boolean;
  nextAvailable?: string;
  workingHours: WorkingHours;
  priceRange: {
    min: number;
    max: number;
  };
}

export interface Service {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  duration: number;
  description?: string;
  isHomeService: boolean;
}

export interface WorkingHours {
  monday: TimeSlot[];
  tuesday: TimeSlot[];
  wednesday: TimeSlot[];
  thursday: TimeSlot[];
  friday: TimeSlot[];
  saturday: TimeSlot[];
  sunday: TimeSlot[];
}

export interface TimeSlot {
  start: string;
  end: string;
}

export interface Booking {
  id: string;
  barberId: string;
  barberName: string;
  barberNameAr: string;
  serviceId: string;
  serviceName: string;
  serviceNameAr: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  location: 'salon' | 'home';
  address?: string;
  paymentMethod: 'cash' | 'orange_money' | 'cih_pay' | 'on_site';
  notes?: string;
}

export interface Review {
  id: string;
  barberId: string;
  userName: string;
  rating: number;
  comment: string;
  commentAr?: string;
  date: string;
  serviceType: string;
}