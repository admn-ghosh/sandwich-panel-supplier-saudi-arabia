import React from 'react';
import { TESTIMONIALS_AR } from './constants-ar';
import { Quote } from 'lucide-react';

const TestimonialsAr: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-900 mb-12">ماذا يقول عملاؤنا في السعودية عن خدماتنا</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS_AR.map((t, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-lg relative text-right">
              <Quote className="text-emerald-200 absolute top-6 right-6 transform scale-x-[-1]" size={48} />
              <div className="relative z-10 pt-4">
                <p className="text-stone-700 italic mb-6 text-xl">"{t.quote}"</p>
                <p className="font-bold text-emerald-900">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAr;