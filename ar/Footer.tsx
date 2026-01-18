import React from 'react';

const FooterAr: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-12 pb-24 md:pb-12 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-wider">مكتب مشاريع السعودية (يتم الرد من مكتب الإمارات)</h3>
        <div className="space-y-6 mb-8">
          <p>
            <span className="block text-emerald-400 text-sm font-semibold mb-1">واتساب واتصالات</span>
            <a href="https://wa.me/971503034002" className="text-2xl md:text-3xl text-white font-bold hover:text-amber-400 transition-colors">+971 50 303 4002</a>
          </p>
          <p>
            <span className="block text-emerald-400 text-sm font-semibold mb-1">البريد الإلكتروني</span>
            <a href="mailto:parimal@ghoshgroups.com" className="text-lg text-white hover:text-amber-400 transition-colors">parimal@ghoshgroups.com</a>
          </p>
        </div>
        <p className="max-w-xl mx-auto text-sm text-emerald-500 border-t border-emerald-900 pt-8 mt-8">
          التوريد إلى: نيوم، الرياض، جدة، الدمام، الخبر والمدن السعودية الأخرى
        </p>
        <div className="mt-4 text-sm text-emerald-600">
           &copy; {new Date().getFullYear()} مجموعة غوش. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default FooterAr;