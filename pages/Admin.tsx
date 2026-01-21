
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Package, Tag, Layers, Home, Search, AlertCircle } from 'lucide-react';
import { Product, Category, Coupon } from '../types';

interface AdminProps {
  products: Product[];
  categories: Category[];
  coupons: Coupon[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
}

const Admin: React.FC<AdminProps> = ({ products, categories, coupons, onAddProduct, onUpdateProduct, onDeleteProduct }) => {
  const [activeTab, setActiveTab] = useState<'products' | 'coupons'>('products');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    categoryId: categories[0]?.id || '',
    description: '',
    details: '',
    price: 0,
    salePrice: undefined,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop',
    promotionText: ''
  });

  const handleEdit = (p: Product) => {
    setFormData(p);
    setEditingId(p.id);
    setIsEditing(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      categoryId: categories[0]?.id || '',
      description: '',
      details: '',
      price: 0,
      salePrice: undefined,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop',
      promotionText: ''
    });
    setEditingId(null);
    setIsEditing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return alert('Vui lòng điền đủ thông tin');

    if (editingId) {
      onUpdateProduct({ ...formData, id: editingId } as Product);
    } else {
      onAddProduct({ ...formData, id: `p-${Date.now()}` } as Product);
    }
    handleResetForm();
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Hệ Thống Quản Trị</h1>
            <p className="text-slate-500">Quản lý nội dung cửa hàng, sản phẩm và khuyến mãi của bạn.</p>
          </div>
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setActiveTab('products')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'products' ? 'bg-[#ff5c62] text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
             >
                <Package size={18} /> Sản phẩm
             </button>
             <button 
                onClick={() => setActiveTab('coupons')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'coupons' ? 'bg-[#ff5c62] text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
             >
                <Tag size={18} /> Khuyến mãi
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 sticky top-28">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                {isEditing ? <Edit2 className="text-blue-500" /> : <Plus className="text-[#ff5c62]" />}
                {isEditing ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tên sản phẩm</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff5c62] font-medium"
                    placeholder="Ví dụ: Steak Bò Mỹ"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Giá gốc (đ)</label>
                    <input 
                      type="number" 
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff5c62] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Giá Sale (đ)</label>
                    <input 
                      type="number" 
                      value={formData.salePrice || ''}
                      onChange={(e) => setFormData({...formData, salePrice: e.target.value ? Number(e.target.value) : undefined})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff5c62] font-medium"
                      placeholder="Trống nếu ko giảm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Danh mục</label>
                  <select 
                    value={formData.categoryId}
                    onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff5c62] font-medium appearance-none"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Link hình ảnh</label>
                  <input 
                    type="text" 
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff5c62] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Mô tả chi tiết</label>
                  <textarea 
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff5c62] font-medium"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button type="submit" className="flex-grow bg-[#ff5c62] text-white py-4 rounded-2xl font-bold hover:bg-[#ee4b51] transition-all shadow-lg shadow-red-100">
                    {isEditing ? 'Cập nhật' : 'Thêm sản phẩm'}
                  </button>
                  {isEditing && (
                    <button type="button" onClick={handleResetForm} className="bg-slate-100 text-slate-500 px-6 rounded-2xl font-bold hover:bg-slate-200">
                      Hủy
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right: List */}
          <div className="lg:col-span-2 space-y-8">
            {activeTab === 'products' ? (
              <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                   <h3 className="text-xl font-bold text-slate-900">Danh sách sản phẩm</h3>
                   <div className="relative">
                      <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                      <input type="text" placeholder="Tìm kiếm..." className="pl-10 pr-4 py-2 bg-slate-50 rounded-lg text-sm border-none focus:ring-1 focus:ring-red-200 w-64" />
                   </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50/50">
                      <tr>
                        <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Sản phẩm</th>
                        <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Danh mục</th>
                        <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Giá</th>
                        <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {products.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-50/30 transition-colors group">
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-100">
                                <img src={p.image} className="w-full h-full object-cover" alt="" />
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">{p.name}</div>
                                <div className="text-[10px] text-slate-400">ID: {p.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                             <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                               {categories.find(c => c.id === p.categoryId)?.name}
                             </span>
                          </td>
                          <td className="px-8 py-6">
                            <div className="font-bold text-slate-900">{(p.salePrice || p.price).toLocaleString()}đ</div>
                            {p.salePrice && <div className="text-xs text-slate-300 line-through">{p.price.toLocaleString()}đ</div>}
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => handleEdit(p)}
                                className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button 
                                onClick={() => onDeleteProduct(p.id)}
                                className="w-10 h-10 rounded-xl bg-red-50 text-[#ff5c62] flex items-center justify-center hover:bg-[#ff5c62] hover:text-white transition-all"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                 {coupons.map(coupon => (
                   <div key={coupon.code} className="bg-white rounded-[2.5rem] p-10 border-2 border-dashed border-slate-100 shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 relative z-10">
                        <div className="flex gap-6 items-center">
                          <div className="w-20 h-20 bg-[#ff5c62] text-white rounded-[2rem] flex items-center justify-center text-3xl font-black shadow-lg shadow-red-200">
                             {coupon.discountPercent}%
                          </div>
                          <div>
                             <h4 className="text-2xl font-black text-slate-900 mb-1">{coupon.code}</h4>
                             <p className="text-slate-400 font-medium">Hết hạn: {coupon.expiryDate}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-8 items-center bg-slate-50 p-6 rounded-3xl border border-slate-100">
                           <div className="text-center">
                              <div className="text-2xl font-bold text-slate-800">{coupon.usedCount}</div>
                              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Đã dùng</div>
                           </div>
                           <div className="w-px h-10 bg-slate-200"></div>
                           <div className="text-center">
                              <div className="text-2xl font-bold text-slate-800">{coupon.limit}</div>
                              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Giới hạn</div>
                           </div>
                           <div className="w-px h-10 bg-slate-200"></div>
                           <div className="text-center">
                              <div className={`text-2xl font-bold ${coupon.limit - coupon.usedCount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {coupon.limit - coupon.usedCount}
                              </div>
                              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Còn lại</div>
                           </div>
                        </div>
                      </div>
                      <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-2 text-slate-400 text-sm italic">
                         <AlertCircle size={16} /> Gợi ý: Chia sẻ mã này cho khách hàng thân thiết để tăng doanh thu.
                      </div>
                   </div>
                 ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
