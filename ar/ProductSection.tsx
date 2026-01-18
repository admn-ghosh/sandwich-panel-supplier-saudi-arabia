import React from 'react';
import { PRODUCTS_AR } from './constants-ar';

const ProductSectionAr: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">أنواع الألواح العازلة الرائدة للمشاريع السعودية</h2>
          <p className="text-lg text-stone-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            اختر من بين مجموعة كاملة من ألواح الأسقف والجدران، كل منها مصمم خصيصاً للتطبيقات السعودية واحتياجات الأداء.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_AR.map((product, idx) => (
            <div key={idx} className="bg-stone-50 rounded-lg p-6 border border-stone-200 text-right">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{product.title}</h3>
              <p className="text-stone-700 mb-5 min-h-[48px]">{product.description}</p>
              <ul className="space-y-3">
                {product.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-stone-600">
                    <span className="ml-2 text-amber-500 mt-1.5 text-xs">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSectionAr;