
import { FoodItem, BlogPost } from './types';

export const FEATURED_FOODS: FoodItem[] = [
  {
    id: '1',
    name: 'Pizza Hải Sản Gi',
    description: 'Tươi ngon từ biển cả, phô mai tan chảy',
    price: '185.000đ',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Steak Thượng Hạng',
    description: 'Thịt bò nhập khẩu, nước sốt đặc trưng',
    price: '250.000đ',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop'
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
  },
  {
    id: '2',
    title: 'Cách làm món bò nướng chuẩn vị nhà hàng 5 sao',
    excerpt: 'Hướng dẫn chi tiết từng bước ướp thịt và canh lửa để bò mềm tan...',
    date: '08 Tháng 10, 2023',
    category: 'Công thức',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Chế độ ăn Eat Clean cho người bận rộn',
    excerpt: 'Dù công việc có bận rộn đến đâu, bạn vẫn có thể duy trì vóc dáng...',
    date: '05 Tháng 10, 2023',
    category: 'Sức khỏe',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop'
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
    "Xây dựng một chế độ ăn uống lành mạnh không có nghĩa là bạn phải từ bỏ hoàn toàn những món ăn yêu thích. Bí quyết nằm ở sự cân bằng và lựa chọn thực phẩm thông minh mỗi ngày.",
    "1. Bắt đầu ngày mới với nước lọc: Uống một ly nước ngay sau khi ngủ dậy giúp đánh thức hệ tiêu hóa và cấp ẩm cho cơ thể sau một đêm dài. Đây là thói quen đơn giản nhất nhưng mang lại hiệu quả cực kỳ to lớn cho sức khỏe làn da và tinh thần.",
    "2. Ưu tiên thực phẩm nguyên bản: Hãy cố gắng lấp đầy 80% đĩa ăn của bạn bằng các loại thực phẩm chưa qua chế biến sâu như rau củ quả tươi, ngũ cốc nguyên hạt và các loại đậu. Những thực phẩm này giữ trọn vẹn vitamin và chất xơ cần thiết.",
    "\"Sức khỏe không chỉ là việc bạn ăn gì, mà là việc bạn suy nghĩ và thực hiện lối sống đó như thế nào mỗi ngày.\"",
    "3. Chế độ 5 màu sắc: Mỗi màu sắc trong rau củ đại diện cho một nhóm dưỡng chất khác nhau. Đảm bảo bữa ăn của bạn rực rỡ sắc màu: màu đỏ của cà chua, màu xanh của súp lơ, màu tím của bắp cải tím... Điều này giúp bạn nạp đầy đủ các loại chất chống oxy hóa.",
    "4. Lắng nghe cơ thể: Hãy ăn khi thấy đói và dừng lại khi cảm thấy vừa đủ (khoảng 80% dạ dày). Việc ăn quá no thường dẫn đến cảm giác mệt mỏi và tích tụ mỡ thừa không cần thiết."
  ],
  tags: ['#HealthyLife', '#Nutrition', '#FoodTips']
};
