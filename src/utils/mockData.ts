import { v4 as uuidv4 } from 'uuid';
import { Product, Category, Customer, Order } from '../types';

// Mock Categories
export const mockCategories: Category[] = [
  { id: uuidv4(), name: 'Electronics' },
  { id: uuidv4(), name: 'Clothing' },
  { id: uuidv4(), name: 'Books' }
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: uuidv4(),
    name: 'Smartphone',
    price: 599,
    image: '/placeholder.jpg',
    category: mockCategories[0].id
  },
  {
    id: uuidv4(),
    name: 'T-Shirt',
    price: 29,
    image: '/placeholder.jpg',
    category: mockCategories[1].id
  }
];

// Mock Customers
export const mockCustomers: Customer[] = [
  {
    id: uuidv4(),
    name: 'John Doe',
    email: 'john@example.com',
    username: '@johndoe',
    contactNumber: '+1234567890',
    location: 'New York'
  }
];

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: uuidv4(),
    customerId: mockCustomers[0].id,
    products: [{ productId: mockProducts[0].id, quantity: 1 }],
    status: 'pending',
    totalAmount: 599,
    createdAt: new Date().toISOString()
  }
];