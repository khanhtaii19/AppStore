
import { Category, Product, Coupon, FoodItem, BlogPost } from './types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Món Chính',
    description: 'Các món ăn no nê, đậm đà hương vị truyền thống và hiện đại.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 'cat-2',
    name: 'Khai Vị',
    description: 'Bắt đầu bữa tiệc với những món nhẹ nhàng, kích thích vị giác.',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'cat-3',
    name: 'Tráng Miệng',
    description: 'Kết thúc ngọt ngào với các loại bánh và kem đặc sắc.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1944&auto=format&fit=crop'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p-1',
    categoryId: 'cat-1',
    name: 'Pizza Hải Sản Pesto',
    description: 'Sự kết hợp hoàn hảo giữa tôm, mực tươi và sốt pesto xanh mướt.',
    details: 'Được làm từ bột tươi ủ 24h, nướng trong lò gạch truyền thống. Tôm sú tươi, mực lá cắt khoanh kết hợp cùng phô mai Mozzarella nhập khẩu từ Ý.',
    price: 220000,
    salePrice: 185000,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    promotionText: 'Giảm giá 15% cho thành viên mới'
  },
  {
    id: 'p-2',
    categoryId: 'cat-1',
    name: 'Steak Thăn Nội Bò Mỹ',
    description: 'Thịt thăn mềm tan, phục vụ kèm khoai tây nghiền và sốt vang đỏ.',
    details: 'Thịt bò Black Angus được chọn lọc kỹ lưỡng, tẩm ướp thảo mộc và nướng Medium-Rare chuẩn vị. Ăn kèm măng tây và cà rốt baby.',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop',
    promotionText: 'Tặng 1 ly vang đỏ kèm theo'
  },
  {
    id: 'p-3',
    categoryId: 'cat-3',
    name: 'Tiramisu Cổ Điển',
    description: 'Hương vị cà phê nồng nàn quyện cùng lớp kem béo ngậy.',
    details: 'Bánh được làm theo công thức truyền thống từ vùng Treviso, sử dụng phô mai Mascarpone tươi và bánh sâm panh thấm đẫm Espresso.',
    price: 85000,
    salePrice: 75000,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974&auto=format&fit=crop'
  }
];

export const INITIAL_COUPONS: Coupon[] = [
  {
    code: 'HELLO2024',
    discountPercent: 10,
    limit: 100,
    usedCount: 5,
    expiryDate: '2024-12-31'
  },
  {
    code: 'GIAM30',
    discountPercent: 30,
    limit: 10,
    usedCount: 0,
    expiryDate: '2024-06-30'
  }
];

// Re-export old constants for backward compatibility
export const FEATURED_FOODS: FoodItem[] = [
  {
    id: '1',
    name: 'Pizza Hải Sản Gi',
    description: 'Tươi ngon từ biển cả, phô mai tan chảy',
    price: '185.000đ',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    isBestSeller: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Bí quyết chọn nguyên liệu tươi sạch cho bữa ăn gia đình',
    excerpt: 'Việc chọn lựa nguyên liệu đầu vào quyết định 80% độ ngon của món ăn...',
    date: '12 Tháng 10, 2023',
    category: 'Mẹo nấu ăn',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop'
  }
];

export const DETAILED_POST: BlogPost = {
  id: '10-cach-an-uong',
  title: '10 Cách Ăn Uống Lành Mạnh Mỗi Ngày Để Duy Trì Vóc Dáng',
  excerpt: 'Xây dựng một chế độ ăn uống lành mạnh không có nghĩa là bạn phải từ bỏ hoàn toàn những món ăn yêu thích.',
  date: '22 Tháng 5, 2024',
  category: 'Sống khỏe',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
  author: {
    name: 'Phạm Khánh An',
    avatar: 'https://picsum.photos/id/64/100/100',
    date: '22 Tháng 5, 2024',
    readTime: '8 phút đọc'
  },
  content: [
    "Xây dựng một chế độ ăn uống lành mạnh không có nghĩa là bạn phải từ bỏ hoàn toàn những món ăn yêu thích. Bí quyết nằm ở sự cân bằng và lựa chọn thực phẩm thông minh mỗi ngày."
  ],
  tags: ['#HealthyLife', '#Nutrition', '#FoodTips']
};
