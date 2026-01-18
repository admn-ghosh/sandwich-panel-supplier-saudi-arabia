import React, { useState } from 'react';
import { FAQS_AR } from './constants-ar';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAr: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="py-12 bg-stone-50 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-900 mb-8">الأسئلة الشائعة - دعم المورد الرائد</h2>
        <div className="space-y-4">
          {FAQS_AR.map((faq, idx) => (
            <div key={idx} className="bg-white rounded border border-stone-200 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full text-right px-6 py-4 flex justify-between items-center bg-white hover:bg-stone-50 transition-colors">
                <span className="font-bold text-stone-900 text-lg">{faq.question}</span>
                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-stone-600 border-t border-stone-100 pt-4 leading-relaxed text-right">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAr;