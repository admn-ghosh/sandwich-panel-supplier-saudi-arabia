import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <div className="relative group">
        {/* Heartbeat Ripple Outer Layer */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></div>
        
        {/* Main Floating Button */}
        <a 
          href="https://wa.me/971503034002" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-heartbeat"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={32} className="md:w-9 md:h-9" fill="currentColor" />
          
          {/* Tooltip for desktop */}
          <span className="absolute right-full mr-4 bg-emerald-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block pointer-events-none shadow-lg border border-emerald-800">
            WhatsApp KSA Desk
          </span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;