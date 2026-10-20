import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface TopStripArProps {
  onLanguageSwitch?: () => void;
}

const TopStripAr: React.FC<TopStripArProps> = ({ onLanguageSwitch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemsAr = [
    { name: 'لماذا تختارنا', id: 'why-choose-us' },
    { name: 'تطبيقات الألواح', id: 'our-work' },
    { name: 'الاعتمادات والوثائق', id: 'certifications' },
    { name: 'منتجاتنا', id: 'products' },
    { name: 'من نحن', id: 'about-us' },
    { name: 'الأسئلة الشائعة', id: 'faq' },
    { name: 'اتصل بنا', id: 'lead-form' },
  ];

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, '', `#${id}`);
    } else if (id === 'top' || id === 'contact-us') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', ' ');
    }
  };

  const handleLanguageSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLanguageSwitch) {
      onLanguageSwitch();
    }
  };

  return (
    <header className="bg-emerald-900 text-white sticky top-0 z-[100] shadow-md border-b border-emerald-800/50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <button 
          onClick={(e) => handleNav(e, 'contact-us')}
          className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity focus:outline-none cursor-pointer py-2"
          type="button"
        >
          <img 
            src="https://ghoshgroups.com/lp/logo.png" 
            alt="شعار مجموعة غوش" 
            className="h-10 w-auto" 
            width="120" 
            height="40"
            fetchPriority="high"
            decoding="async"
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {menuItemsAr.map((item) => (
            <button 
              key={item.id} 
              onClick={(e) => handleNav(e, item.id)}
              className="text-[12px] xl:text-[14px] font-bold hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
              type="button"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Left Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={handleLanguageSwitch}
            className="flex items-center gap-2 text-[11px] sm:text-xs border border-white/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-1.5 hover:bg-white/10 transition-all font-bold whitespace-nowrap focus:outline-none cursor-pointer"
            type="button"
            title="Switch to English"
          >
            <Globe size={16} className="text-amber-400" />
            <span className="hidden xs:inline">English</span>
            <span className="xs:hidden">EN</span>
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-emerald-800 rounded-lg transition-colors focus:outline-none cursor-pointer"
            aria-label="تبديل القائمة"
            type="button"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 top-[80px] bg-emerald-950 z-[90] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-8 gap-5 h-full overflow-y-auto text-right">
          {menuItemsAr.map((item) => (
            <button 
              key={item.id} 
              onClick={(e) => handleNav(e, item.id)}
              className="text-right text-xl font-bold border-b border-emerald-900 pb-3 hover:text-amber-400 transition-colors focus:outline-none cursor-pointer"
              type="button"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default TopStripAr;
