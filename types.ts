
export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  details: string;
  price: number;
  salePrice?: number;
  image: string;
  promotionText?: string;
}

export interface Coupon {
  code: string;
  discountPercent: number;
  limit: number;
  usedCount: number;
  expiryDate: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isBestSeller?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author?: {
    name: string;
    avatar: string;
    date: string;
    readTime: string;
  };
  content?: string[];
  tags?: string[];
}
