
import React, { useState } from 'react';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw, Star, Plus, Minus, Ticket } from 'lucide-react';
import { Product, Coupon } from '../types';

interface ProductDetailViewProps {
  product: Product;
  coupons: Coupon[];
  onBack: () => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, coupons, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const finalPrice = product.salePrice || product.price;
  const discountAmount = appliedCoupon ? (finalPrice * appliedCoupon.discountPercent / 100) : 0;
  const totalPrice = (finalPrice - discountAmount) * quantity;

  const handleApplyCoupon = () => {
    const coupon = coupons.find(c => c.code.toUpperCase() === couponCode.toUpperCase());
    if (coupon) {
       if (coupon.usedCount < coupon.limit) {
         setAppliedCoupon(coupon);
         alert(`Áp dụng mã ${coupon.code} thành công!`);
       } else {
         alert('Mã này đã hết lượt sử dụng!');
       }
    } else {
      alert('Mã giảm giá không hợp lệ.');
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 font-bold mb-10 hover:text-[#ff5c62] transition-colors"
        >
          <ChevronLeft size={20} /> Quay lại cửa hàng
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square bg-gray-50 border-4 border-white">
              <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                 <div key={i} className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 ${i === 1 ? 'border-[#ff5c62]' : 'border-transparent'}`}>
                    <img src={product.image} className="w-full h-full object-cover opacity-60" alt="thumb" />
                 </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff5c62] uppercase tracking-widest mb-4">
               <Star size={14} fill="currentColor" /> {product.promotionText || 'Món ngon được yêu thích'}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-sm text-slate-400 font-medium mb-1">Giá ưu đãi</span>
                <span className="text-4xl font-extrabold text-[#ff5c62]">{finalPrice.toLocaleString()}đ</span>
              </div>
              {product.salePrice && (
                 <div className="flex flex-col">
                    <span className="text-sm text-slate-400 font-medium mb-1">Giá gốc</span>
                    <span className="text-xl text-slate-300 line-through decoration-slate-300 decoration-2">{product.price.toLocaleString()}đ</span>
                 </div>
              )}
            </div>

            <p className="text-slate-500 text-lg leading-relaxed mb-10">{product.description}</p>

            <div className="bg-slate-50 rounded-3xl p-8 mb-10 border border-slate-100">
               <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <Ticket size={18} className="text-[#ff5c62]" /> Nhập mã giảm giá (Coupon)
               </h4>
               <div className="flex gap-2">
                 <input 
                  type="text" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Ví dụ: HELLO2024"
                  className="flex-grow bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff5c62] font-bold"
                 />
                 <button 
                  onClick={handleApplyCoupon}
                  className="bg-slate-900 text-white px-6 rounded-xl font-bold hover:bg-[#ff5c62] transition-colors"
                 >
                   Áp dụng
                 </button>
               </div>
               {appliedCoupon && (
                 <p className="mt-3 text-sm font-bold text-green-600">Đã áp dụng: Giảm {appliedCoupon.discountPercent}%</p>
               )}
            </div>

            <div className="flex items-center gap-6 mb-10">
               <div className="flex items-center bg-slate-100 rounded-2xl p-1.5">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-red-50 hover:text-[#ff5c62] transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-16 text-center font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-red-50 hover:text-[#ff5c62] transition-colors"
                  >
                    <Plus size={18} />
                  </button>
               </div>
               <button className="flex-grow bg-[#ff5c62] text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-[#ee4b51] transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-3">
                  <ShoppingCart size={24} /> 
                  Mua Ngay - {totalPrice.toLocaleString()}đ
               </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center"><Truck size={20}/></div>
                  <span className="text-sm font-bold text-slate-700">Giao nhanh 30p</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center"><ShieldCheck size={20}/></div>
                  <span className="text-sm font-bold text-slate-700">An toàn vệ sinh</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center"><RefreshCw size={20}/></div>
                  <span className="text-sm font-bold text-slate-700">Đổi trả dễ dàng</span>
               </div>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="mt-24 pt-24 border-t border-gray-100">
           <div className="max-w-3xl">
             <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Thông tin chi tiết sản phẩm</h2>
             <div className="prose prose-lg text-slate-500 leading-relaxed space-y-6">
                <p>{product.details}</p>
                <p>Mỗi món ăn tại ShopWebStore đều được chuẩn bị với lòng say mê và cam kết mang lại trải nghiệm ẩm thực tinh tế nhất cho khách hàng. Chúng tôi sử dụng các nguồn nguyên liệu bền vững, hỗ trợ nông dân địa phương và tuân thủ các quy chuẩn nghiêm ngặt về chất lượng.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
