
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import WelcomePopup from './components/WelcomePopup';
import Shop from './pages/Shop';
import ProductDetailView from './pages/ProductDetailView';
import Admin from './pages/Admin';
import Login from './pages/LogIn';
import { Product, Category, Coupon, User } from './types';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS, INITIAL_COUPONS } from './constants';

type Page = 'home' | 'blog' | 'shop' | 'product-detail' | 'admin' | 'login';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showPopup, setShowPopup] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // State for products and coupons
  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [coupons] = useState<Coupon[]>(INITIAL_COUPONS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Check for saved session
  useEffect(() => {
    const savedUser = localStorage.getItem('shop_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProduct]);

  const handleNavigate = (page: Page) => {
    // Role protection for Admin
    if (page === 'admin' && currentUser?.role !== 'admin') {
      alert('Bạn không có quyền truy cập vào khu vực này!');
      setCurrentPage('home');
      return;
    }
    
    setCurrentPage(page);
    if (page !== 'product-detail') setSelectedProduct(null);
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('shop_user', JSON.stringify(user));
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('shop_user');
    setCurrentPage('home');
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  // Admin Actions
  const handleAddProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-100 selection:text-[#ff5c62]">
      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
      
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow bg-white">
        {currentPage === 'home' && (
          <Home onNavigateBlog={() => handleNavigate('blog')} />
        )}
        
        {currentPage === 'blog' && (
          <BlogPost />
        )}

        {currentPage === 'shop' && (
          <Shop 
            products={products} 
            categories={categories} 
            onViewDetail={handleViewProduct} 
          />
        )}

        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetailView 
            product={selectedProduct} 
            coupons={coupons}
            onBack={() => handleNavigate('shop')}
          />
        )}

        {currentPage === 'admin' && (
          <Admin 
            products={products}
            categories={categories}
            coupons={coupons}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        )}

        {currentPage === 'login' && (
          <Login 
            onLogin={handleLogin}
            onBack={() => handleNavigate('home')}
          />
        )}
      </main>

      {['home', 'shop', 'blog'].includes(currentPage) && <Footer />}
      
      {['admin', 'product-detail', 'login'].includes(currentPage) && (
        <div className="py-8 bg-gray-50 text-center text-xs text-slate-400 border-t border-gray-100">
           © 2024 ShopWebStore. All rights reserved. Quản lý bởi Phạm Khánh Tài.
        </div>
      )}
    </div>
  );
};

export default App;
