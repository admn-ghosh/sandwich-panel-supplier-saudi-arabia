
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TopStripProps {
  onLanguageSwitch?: () => void;
}

const TopStrip: React.FC<TopStripProps> = ({ onLanguageSwitch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'Our Work Across GCC', id: 'our-work' },
    { name: 'Certified Quality', id: 'certifications' },
    { name: 'Our Products', id: 'products' },
    { name: 'About Us', id: 'about-us' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: "FAQ's", id: 'faq' },
    { name: 'Contact Us', id: 'lead-form' },
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
    <header className="bg-emerald-900 text-white sticky top-0 z-[100] shadow-md border-b border-emerald-800/50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <button 
          onClick={(e) => handleNav(e, 'contact-us')}
          className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity focus:outline-none cursor-pointer py-2"
          type="button"
        >
          <img 
            src="https://ghoshgroups.com/lp/logo.png" 
            alt="Ghosh Group Logo" 
            className="h-12 md:h-14 w-auto" 
            width="220" 
            height="56"
            fetchPriority="high"
            decoding="async"
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={(e) => handleNav(e, item.id)}
              className="text-[10px] xl:text-[11px] uppercase tracking-wider font-bold hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
              type="button"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <button 
              onClick={handleLanguageSwitch}
              className="flex items-center gap-2 text-xs border border-white/30 rounded-full px-4 py-1.5 hover:bg-white/10 transition-all font-bold whitespace-nowrap focus:outline-none cursor-pointer"
              type="button"
            >
              <span>🌐 العربية</span>
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-emerald-800 rounded-lg transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
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
        <nav className="flex flex-col p-8 gap-5 h-full overflow-y-auto">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={(e) => handleNav(e, item.id)}
              className="text-left text-lg font-bold border-b border-emerald-900 pb-3 hover:text-amber-400 transition-colors focus:outline-none cursor-pointer"
              type="button"
            >
              {item.name}
            </button>
          ))}
          <div className="mt-4 pt-6 border-t border-emerald-900 sm:hidden">
             <button 
              onClick={handleLanguageSwitch}
              className="w-full flex items-center justify-center gap-2 text-base border border-amber-400/50 text-amber-400 rounded-lg px-4 py-4 hover:bg-white/5 transition-all font-bold focus:outline-none cursor-pointer"
              type="button"
            >
              <span>🌐 Switch to Arabic Language</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopStrip;
