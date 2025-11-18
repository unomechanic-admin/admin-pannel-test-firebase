export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  status: 'active' | 'banned';
}

export interface Mechanic {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  status: 'pending' | 'verified' | 'rejected' | 'suspended';
  specialties: string[];
  rating: number;
  jobsCompleted: number;
  earnings: number;
  memberSince: string;
}

export interface Booking {
  id: string;
  service: string;
  customer: {
    name: string;
    avatar: string;
  };
  mechanic?: {
    name: string;
    avatar: string;
  };
  date: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  amount: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  duration: number; // in minutes
  isPopular: boolean;
}

export interface Payment {
  id: string;
  bookingId: string;
  customerName: string;
  amount: number;
  date: string;
  status: 'succeeded' | 'pending' | 'failed' | 'refunded';
}

export interface Review {
  id: string;
  bookingId: string;
  customerName: string;
  mechanicName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'support';
  lastLogin: string;
}

export interface ActivityLog {
  id: string;
  adminName: string;
  action: string;
  target: string;
  date: string;
}
