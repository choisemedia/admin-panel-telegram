export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Customer {
  id: string;
  name?: string;
  contactNumber?: string;
  email?: string;
  username?: string;
  location?: string;
  comment?: string;
}

export interface Order {
  id: string;
  customerId: string;
  products: Array<{productId: string; quantity: number}>;
  status: 'pending' | 'completed' | 'cancelled';
  totalAmount: number;
  createdAt: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'cash' | 'virtual' | 'crypto' | 'fiat';
  isActive: boolean;
}

export interface Manager {
  id: string;
  name: string;
  role: 'admin' | 'manager' | 'support';
  permissions: string[];
}