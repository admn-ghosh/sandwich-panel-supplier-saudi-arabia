import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-wider">KSA Projects Desk (answered from UAE office)</h3>
        
        <div className="space-y-6 mb-8">
          <p>
            <span className="block text-emerald-400 text-sm md:text-base uppercase mb-1 font-semibold">WhatsApp & Calls</span>
            <a href="https://wa.me/971503034002" className="text-2xl md:text-3xl text-white font-bold hover:text-amber-400 transition-colors">+971 50 303 4002</a>
          </p>
          
          <p>
            <span className="block text-emerald-400 text-sm md:text-base uppercase mb-1 font-semibold">Email</span>
            <a href="mailto:parimal@ghoshgroups.com" className="text-lg md:text-xl text-white hover:text-amber-400 transition-colors">parimal@ghoshgroups.com</a>
          </p>
        </div>

        <p className="max-w-xl mx-auto text-sm md:text-base text-emerald-500 border-t border-emerald-900 pt-8 mt-8">
          Supply to: NEOM, Riyadh, Jeddah, Dammam, Al Khobar and other Saudi cities
        </p>
        <div className="mt-4 text-sm text-emerald-600">
           &copy; {new Date().getFullYear()} Ghosh Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;