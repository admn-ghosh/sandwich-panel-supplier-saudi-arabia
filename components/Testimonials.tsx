import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-900 mb-12">What Saudi Clients Say About Our Leading Service</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-lg relative">
              <Quote className="text-emerald-200 absolute top-6 left-6" size={48} />
              <div className="relative z-10 pt-4">
                <p className="text-stone-700 italic mb-6 text-lg md:text-xl leading-relaxed">"{t.quote}"</p>
                <p className="font-bold text-emerald-900 text-base">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;