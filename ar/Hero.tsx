import React, { useState } from 'react';
import { CITY_OPTIONS_AR, PANEL_OPTIONS_AR } from './constants-ar';
import { FormData } from '../types';
import { collection, addDoc } from 'firebase/firestore';
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
        // STEP 1: Save lead to ksa-leads (primary — must succeed)
        await addDoc(collection(db, 'ksa-leads'), {
          leadData: formData,
          submittedAt: serverTimestamp(),
          language: 'Arabic',
          source: window.location.hostname
        });

        // STEP 2: Trigger email notification via mail collection (secondary — failure does NOT block lead)
        try {
          await addDoc(collection(db, 'mail'), {
            from: 'admin@ghoshgroups.com',
            to: ['parimal@ghoshgroups.com'],
            cc: ['admin@ghoshgroups.com'],
            message: {
              subject: 'New Lead from KSA Landing Page (Arabic)',
              html: `
                <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; text-align: right;">
                  <h2 style="color: #064e3b;">طلب جديد من صفحة الهبوط السعودية</h2>
                  <hr style="border: 0; border-top: 1px solid #eee;" />
                  <p><strong>الاسم بالكامل:</strong> ${formData.fullName}</p>
                  <p><strong>الشركة:</strong> ${formData.companyName}</p>
                  <p><strong>البريد الإلكتروني:</strong> ${formData.email}</p>
                  <p><strong>رقم الجوال:</strong> ${formData.mobile}</p>
                  <p><strong>المدينة:</strong> ${formData.projectCity}</p>
                  <p><strong>نوع اللوح العازل:</strong> ${formData.panelType}</p>
                  <p><strong>المساحة / الكمية:</strong> ${formData.areaQuantity || 'غير محدد'}</p>
                  <hr style="border: 0; border-top: 1px solid #eee;" />
                  <p style="font-size: 12px; color: #999;">تاريخ الإرسال: ${new Date().toLocaleString('ar-EG')}</p>
                </div>
              `
            }
          });
        } catch (mailError) {
          // Email notification failed — lead is already saved, so just log and continue
          console.warn('Email notification failed (lead was saved):', mailError);
        }
      }

              // STEP 3: GA4 event with enhanced conversion data for Google Ads
      if (typeof (window as any).gtag === 'function') {
        // Send user-provided data for Enhanced Conversions
        (window as any).gtag('set', 'user_data', {
          email: formData.email,
          phone_number: formData.mobile,
        });
        // Fire the generate_lead event
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'Hero Arabic Form Submit',
          value: 50,
          currency: 'SAR',
        });
      }
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
  const labelClasses = "absolute text-sm text-stone-600 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-top-right right-4 peer-focus:text-emerald-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pointer-events-none font-medium";

  return (
    <section id="lead-form" className="relative min-h-screen bg-[#f5f2eb] flex items-center" dir="rtl">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-right">
            <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 leading-tight">
              مجموعة غوش هي المورد الرئيسي للألواح العازلة في المملكة العربية السعودية، وتدعم المقاولين والاستشاريين في جميع أنحاء نيوم الرياض و جدة و غيرها.
            </h1>
            <p className="text-lg text-stone-700">
              نحن نوفر حلول تصنيع معتمدة، وندعم مشاريع البنية التحتية بألواح عازلة عالية الجودة من نوع PIR و PUR والصوف الصخري يتم توريدها في جميع أنحاء المملكة.
            </p>
            <blockquote className="border-r-4 border-emerald-600 pr-4 py-2 bg-emerald-50 rounded-l">
              <p className="text-emerald-900 font-semibold">نخدم مشاريع رؤية المملكة من الإمارات – دعم مخصص لنيوم والرياض وجدة والمدن الرئيسية الأخرى.</p>
            </blockquote>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">تم استلام طلبكم بنجاح</h3>
                <p className="text-stone-600">شكراً لتواصلكم معنا. تم إرسال تفاصيل مشروعكم إلى مكتبنا.</p>
                <p className="text-stone-500 text-sm mt-4">جاري تحويلكم إلى الموقع الرئيسي...</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-right">احصل على أفضل سعر لمشروعك</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input type="text" id="fullNameAr" name="fullName" className={inputClasses} placeholder="محمد العتيبي" value={formData.fullName} onChange={handleChange} required aria-required="true" />
                    <label htmlFor="fullNameAr" className={labelClasses}>الاسم الكامل *</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="companyNameAr" name="companyName" className={inputClasses} placeholder="اسم الشركة" value={formData.companyName} onChange={handleChange} required aria-required="true" />
                    <label htmlFor="companyNameAr" className={labelClasses}>اسم الشركة *</label>
                  </div>
                  <div className="relative">
                    <input type="email" id="emailAr" name="email" className={inputClasses} placeholder="email@company.com" value={formData.email} onChange={handleChange} required aria-required="true" />
                    <label htmlFor="emailAr" className={labelClasses}>البريد الإلكتروني *</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="mobileAr" name="mobile" className={inputClasses} placeholder="+966" value={formData.mobile} onChange={handleChange} required aria-required="true" />
                    <label htmlFor="mobileAr" className={labelClasses}>رقم الجوال *</label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-right">
                      <label htmlFor="projectCityAr" className="block text-sm font-medium text-stone-700 mb-1">المدينة *</label>
                      <select id="projectCityAr" name="projectCity" value={formData.projectCity} onChange={handleChange} required className="w-full rounded border-stone-300 p-3 border bg-white text-stone-900 text-right focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all">
                        <option value="">اختر المدينة</option>
                        {CITY_OPTIONS_AR.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                      </select>
                    </div>
                    <div className="text-right">
                      <label htmlFor="panelTypeAr" className="block text-sm font-medium text-stone-700 mb-1">النوع *</label>
                      <select id="panelTypeAr" name="panelType" value={formData.panelType} onChange={handleChange} required className="w-full rounded border-stone-300 p-3 border bg-white text-stone-900 text-right focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all">
                        <option value="">اختر النوع</option>
                        {PANEL_OPTIONS_AR.map(opt => <option key={opt.value} value={opt.label}>{opt.label}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="relative">
                    <textarea id="areaQuantityAr" name="areaQuantity" className={`${inputClasses} resize-none`} placeholder="الكمية" value={formData.areaQuantity} onChange={handleChange} rows={3} />
                    <label htmlFor="areaQuantityAr" className={labelClasses}>المساحة / الكمية التقريبية</label>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-800 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-4 px-6 rounded transition-all duration-200 text-lg shadow-lg">
                    {isSubmitting ? 'جاري الإرسال...' : 'احصل على عرض سعر الآن'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAr;
