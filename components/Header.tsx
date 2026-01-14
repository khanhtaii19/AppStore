
import React from 'react';
import { Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'blog') => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Trang chủ', id: 'home' },
    { label: 'Blog', id: 'blog' },
    { label: 'Thực đơn', id: 'menu' },
    { label: 'Khuyến mãi', id: 'promo' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <span className="text-2xl font-extrabold text-slate-800">ShopWeb</span>
          <span className="text-2xl font-extrabold text-[#ff5c62]">Store</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'home' || item.id === 'blog') onNavigate(item.id as any);
              }}
              className={`text-[15px] font-medium transition-colors ${
                (currentPage === item.id || (currentPage === 'blog-post' && item.id === 'blog'))
                  ? 'text-[#ff5c62] relative after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#ff5c62]'
                  : 'text-slate-600 hover:text-[#ff5c62]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-slate-600 hover:text-slate-900 transition-colors">
            <Moon size={20} />
          </button>
          <button className="bg-[#ff5c62] text-white px-7 py-2.5 rounded-full font-semibold hover:bg-[#ee4b51] transition-all shadow-lg shadow-red-200">
            Liên hệ
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full top-20 left-0 py-4 px-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'home' || item.id === 'blog') onNavigate(item.id as any);
                  setIsMenuOpen(false);
                }}
                className="text-left py-2 font-medium text-slate-600 hover:text-[#ff5c62]"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#ff5c62] text-white py-3 rounded-xl font-bold">Liên hệ</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
