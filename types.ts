
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
