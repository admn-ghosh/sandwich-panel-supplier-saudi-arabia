import React, { useState } from 'react';
import { CITY_OPTIONS, PANEL_OPTIONS } from '../constants';
import { FormData } from '../types';
import { collection, addDoc } from 'firebase/firestore';
import { db, serverTimestamp } from '../firebase-config';

const Hero: React.FC = () => {
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
        await addDoc(collection(db, "mail"), {
          from: 'admin@ghoshgroups.com',
          to: ['parimal@ghoshgroups.com'],
          cc: ['admin@ghoshgroups.com'],
          message: {
            subject: 'New Lead from KSA Landing Page',
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #064e3b;">New Lead from KSA Landing Page</h2>
                <hr style="border: 0; border-top: 1px solid #eee;" />
                <p><strong>Full Name:</strong> ${formData.fullName}</p>
                <p><strong>Company:</strong> ${formData.companyName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Mobile:</strong> ${formData.mobile}</p>
                <p><strong>Project City:</strong> ${formData.projectCity}</p>
                <p><strong>Panel Type:</strong> ${formData.panelType}</p>
                <p><strong>Quantity/Area:</strong> ${formData.areaQuantity || 'N/A'}</p>
                <hr style="border: 0; border-top: 1px solid #eee;" />
                <p style="font-size: 12px; color: #999;">Submitted at: ${new Date().toLocaleString()}</p>
              </div>
            `
          },
          leadData: formData,
          submittedAt: serverTimestamp(),
          language: 'English',
          source: window.location.hostname
        });
      }

      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'generate_lead', {
          'event_category': 'engagement',
          'event_label': 'Hero Form Submit'
        });
      }

      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        window.location.href = 'https://ghoshgroups.com/thank-you/';
      }, 3000);
      
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('There was an error submitting your request. Please try again.');
      setIsSubmitting(false);
    }
  };

  const inputClasses = "block px-4 pb-2.5 pt-5 w-full text-base text-stone-900 bg-white rounded border border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer placeholder-transparent focus:placeholder-stone-400 shadow-sm";
  const labelClasses = "absolute text-sm text-stone-600 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-emerald-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pointer-events-none font-medium";

  return (
    <section id="contact-us" className="bg-white py-8 md:py-16 bg-gradient-to-b from-stone-50 to-stone-100 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 pt-4">
            <h1 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-emerald-950 leading-tight mb-6">
              Ghosh Group is the primary sandwich panel supplier in Saudi Arabia, supporting contractors and consultants across NEOM, Riyadh, Jeddah, and beyond.
            </h1>
            <p className="text-lg md:text-xl text-stone-700 mb-6 leading-relaxed">
              We provide DCD‑approved manufacturing solutions, supporting infrastructure projects with high-quality PIR, PUR, and Rockwool sandwich panels delivered throughout the Kingdom.
            </p>
            <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 mb-8">
              <p className="font-semibold text-emerald-900 text-base md:text-lg">
                Serving Saudi Arabia’s Vision projects from UAE – dedicated support for major KSA infrastructure.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full" id="lead-form">
            <div 
              className="bg-white shadow-xl rounded-lg border border-stone-200 p-6 md:p-8 flex flex-col justify-center transition-all"
              style={{ minHeight: '680px' }}
            >
              {submitted ? (
                <div className="text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-emerald-900 mb-4">Enquiry Received</h2>
                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    Redirecting you to our main site...
                  </p>
                  <div className="flex justify-center">
                    <div className="w-12 h-1 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 animate-[progress_3s_linear_forwards]"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
                    Get Best Price for Your Saudi Project
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                      <input type="text" id="fullName" name="fullName" className={inputClasses} placeholder="Name" value={formData.fullName} onChange={handleChange} required aria-required="true" />
                      <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                    </div>
                    <div className="relative">
                      <input type="text" id="companyName" name="companyName" className={inputClasses} placeholder="Company" value={formData.companyName} onChange={handleChange} required aria-required="true" />
                      <label htmlFor="companyName" className={labelClasses}>Company Name *</label>
                    </div>
                    <div className="relative">
                      <input type="email" id="email" name="email" className={inputClasses} placeholder="Email" value={formData.email} onChange={handleChange} required aria-required="true" />
                      <label htmlFor="email" className={labelClasses}>Email *</label>
                    </div>
                    <div className="relative">
                      <input type="text" id="mobile" name="mobile" className={inputClasses} placeholder="Mobile" value={formData.mobile} onChange={handleChange} required aria-required="true" />
                      <label htmlFor="mobile" className={labelClasses}>Mobile *</label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="projectCity" className="block text-sm font-semibold text-stone-700 mb-1">City *</label>
                        <select id="projectCity" name="projectCity" required value={formData.projectCity} onChange={handleChange} className="w-full rounded border-stone-300 p-3 border bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all">
                          <option value="">Select City</option>
                          {CITY_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="panelType" className="block text-sm font-semibold text-stone-700 mb-1">Panel *</label>
                        <select id="panelType" name="panelType" required value={formData.panelType} onChange={handleChange} className="w-full rounded border-stone-300 p-3 border bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all">
                          <option value="">Select Type</option>
                          {PANEL_OPTIONS.map(opt => <option key={opt.value} value={opt.label}>{opt.label}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea id="areaQuantity" name="areaQuantity" value={formData.areaQuantity} onChange={handleChange} rows={2} className={inputClasses} placeholder="Quantity"></textarea>
                      <label htmlFor="areaQuantity" className={labelClasses}>Quantity / M²</label>
                    </div>
                    <button type="submit" disabled={isSubmitting} className={`w-full py-4 px-6 rounded font-bold text-white text-lg transition-all shadow-md ${isSubmitting ? 'bg-emerald-500 opacity-70 cursor-not-allowed' : 'bg-emerald-700 hover:bg-emerald-800 active:scale-95'}`}>
                      {isSubmitting ? 'Processing...' : 'Get Quotation Now'}
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

export default Hero;
