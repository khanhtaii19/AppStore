
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import WelcomePopup from './components/WelcomePopup';   

type Page = 'home' | 'blog';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showPopup, setShowPopup] = useState(true);

  // Simple scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-100 selection:text-[#ff5c62]">
      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
      
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-grow bg-white">
        {currentPage === 'home' ? (
          <Home onNavigateBlog={() => handleNavigate('blog')} />
        ) : (
          <BlogPost />
        )}
      </main>

      {currentPage === 'home' && <Footer />}
      
      {/* Small copyright at bottom for blog view */}
      {currentPage === 'blog' && (
        <div className="py-8 bg-gray-50 text-center text-xs text-slate-400 border-t border-gray-100">
           © 2024 ShopWebStore. All rights reserved.
        </div>
      )}
    </div>
  );
};

export default App;
