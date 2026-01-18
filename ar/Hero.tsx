
import React, { useState } from 'react';
import { CITY_OPTIONS_AR, PANEL_OPTIONS_AR } from './constants-ar';
import { FormData } from '../types';
import { db, serverTimestamp } from '../firebase-config';

const HeroAr: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    projectCity: '',
    panelType: '',
    areaQuantity: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (db) {
        await db.collection("ksa-leads").add({
          ...formData,
          submittedAt: serverTimestamp(),
          language: 'Arabic',
          source: window.location.hostname,
          to: 'parimal@ghoshgroups.com',
          cc: 'admin@ghoshgroups.com',
          message: {
            subject: `طلب عرض سعر جديد (الموقع السعودي): ${formData.companyName}`,
            html: `
              <div dir="rtl">
                <h3>طلب جديد من صفحة الهبوط السعودية</h3>
                <p><strong>الاسم:</strong> ${formData.fullName}</p>
                <p><strong>الشركة:</strong> ${formData.companyName}</p>
                <p><strong>البريد:</strong> ${formData.email}</p>
                <p><strong>الجوال:</strong> ${formData.mobile}</p>
                <p><strong>المدينة:</strong> ${formData.projectCity}</p>
                <p><strong>النوع:</strong> ${formData.panelType}</p>
                <p><strong>الكمية:</strong> ${formData.areaQuantity}</p>
              </div>
            `
          }
        });
      }

      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'generate_lead', {
          'event_category': 'engagement',
          'event_label': 'Hero Arabic Form Submit'
        });
      }

      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        window.location.href = 'https://ghoshgroups.com/thank-you/';
      }, 3000);

    } catch (error) {
      console.error('Error saving lead:', error);
      alert('حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.');
      setIsSubmitting(false);
    }
  };

  const inputClasses = "block px-4 pb-2.5 pt-5 w-full text-base text-stone-900 bg-white rounded border border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer placeholder-transparent shadow-sm text-right";
  const labelClasses = "absolute text-sm text-stone-500 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-top-right right-4 peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pointer-events-none";

  return (
    <section id="contact-us" className="bg-white py-8 md:py-16 bg-gradient-to-b from-stone-50 to-stone-100 relative scroll-mt-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-start text-right">
          <div className="lg:w-1/2 pt-4">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-emerald-950 leading-tight mb-6">
              مورد الألواح العازلة الرائد في السعودية لمشاريع نيوم والرياض وجدة
            </h1>
            <p className="text-lg md:text-xl text-stone-700 mb-6 leading-relaxed">
              تعتبر مجموعة غوش مُصنعاً معتمداً من الدفاع المدني والمورد الرئيسي للألواح العازلة في المملكة العربية السعودية، حيث ندعم المقاولين والاستشاريين وأصحاب المشاريع في نيوم والرياض وجدة والدمام والخبر ومكة والمدينة.
            </p>
            <div className="bg-emerald-50 border-r-4 border-emerald-700 p-6 mb-8">
              <p className="font-semibold text-emerald-900 text-base md:text-lg">
                نخدم مشاريع رؤية المملكة من الإمارات – دعم مخصص لنيوم والرياض وجدة والمدن الرئيسية الأخرى.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full" id="lead-form">
            <div 
              className="bg-white shadow-xl rounded-lg border border-stone-200 p-6 md:p-8 flex flex-col justify-center"
              style={{ minHeight: '680px' }} // Stabilizes layout to prevent CLS
            >
              {submitted ? (
                <div className="text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-emerald-900 mb-4">تم استلام طلبكم بنجاح</h2>
                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    شكراً لتواصلكم معنا. تم إرسال تفاصيل مشروعكم إلى مكتبنا.<br/>
                    <span className="font-semibold">جاري تحويلكم إلى الموقع الرئيسي...</span>
                  </p>
                  <div className="flex justify-center">
                    <div className="w-12 h-1 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 animate-[progress_3s_linear_forwards]"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6 text-right">احصل على أفضل سعر لمشروعك</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                      <input type="text" id="fullName" name="fullName" className={inputClasses} placeholder="محمد العتيبي" value={formData.fullName} onChange={handleChange} required />
                      <label htmlFor="fullName" className={labelClasses}>الاسم الكامل <span className="text-red-600">*</span></label>
                    </div>
                    <div className="relative">
                      <input type="text" id="companyName" name="companyName" className={inputClasses} placeholder="اسم الشركة" value={formData.companyName} onChange={handleChange} required />
                      <label htmlFor="companyName" className={labelClasses}>اسم الشركة <span className="text-red-600">*</span></label>
                    </div>
                    <div className="relative">
                      <input type="email" id="email" name="email" className={inputClasses} placeholder="email@company.com" value={formData.email} onChange={handleChange} required />
                      <label htmlFor="email" className={labelClasses}>البريد الإلكتروني <span className="text-red-600">*</span></label>
                    </div>
                    <div className="relative">
                      <input type="text" id="mobile" name="mobile" className={inputClasses} placeholder="+966" value={formData.mobile} onChange={handleChange} required />
                      <label htmlFor="mobile" className={labelClasses}>رقم الجوال <span className="text-red-600">*</span></label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="text-right">
                        <label className="block text-sm font-medium text-stone-700 mb-1">المدينة <span className="text-red-600">*</span></label>
                        <select name="projectCity" value={formData.projectCity} onChange={handleChange} required className="w-full rounded border-stone-300 p-3 border bg-white text-stone-900 text-right">
                          <option value="">اختر المدينة</option>
                          {CITY_OPTIONS_AR.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                      </div>
                      <div className="text-right">
                        <label className="block text-sm font-medium text-stone-700 mb-1">النوع <span className="text-red-600">*</span></label>
                        <select name="panelType" value={formData.panelType} onChange={handleChange} required className="w-full rounded border-stone-300 p-3 border bg-white text-stone-900 text-right">
                          <option value="">اختر النوع</option>
                          {PANEL_OPTIONS_AR.map(opt => <option key={opt.value} value={opt.label}>{opt.label}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea id="areaQuantity" name="areaQuantity" value={formData.areaQuantity} onChange={handleChange} rows={2} className={inputClasses} placeholder="الكمية"></textarea>
                      <label htmlFor="areaQuantity" className={labelClasses}>المساحة / الكمية التقريبية</label>
                    </div>
                    <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded font-bold text-white text-lg transition-all shadow-md ${isSubmitting ? 'bg-emerald-500 opacity-70 cursor-not-allowed' : 'bg-emerald-700 hover:bg-emerald-800'}`}>
                      {isSubmitting ? 'جاري الإرسال...' : 'احصل على عرض سعر الآن'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAr;
