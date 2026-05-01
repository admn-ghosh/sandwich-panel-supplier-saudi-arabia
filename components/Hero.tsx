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
        // STEP 1: Save lead to ksa-leads (primary — must succeed)
        await addDoc(collection(db, 'ksa-leads'), {
          leadData: formData,
          submittedAt: serverTimestamp(),
          language: 'English',
          source: window.location.hostname
        });

        // STEP 2: Trigger email notification via mail collection (secondary — failure does NOT block lead)
        try {
          await addDoc(collection(db, 'mail'), {
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
          event_label: 'Hero Form Submit',
          value: 50,
          currency: 'SAR',
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
    <section id="lead-form" className="relative min-h-screen bg-[#f5f2eb] flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 leading-tight">
              Ghosh Group is the primary sandwich panel supplier in Saudi Arabia, supporting contractors and consultants across NEOM, Riyadh, Jeddah, and beyond.
            </h1>
            <p className="text-lg text-stone-700">
              We provide DCD&#8209;approved manufacturing solutions, supporting infrastructure projects with high-quality PIR, PUR, and Rockwool sandwich panels delivered throughout the Kingdom.
            </p>
            <blockquote className="border-l-4 border-emerald-600 pl-4 py-2 bg-emerald-50 rounded-r">
              <p className="text-emerald-900 font-semibold">Serving Saudi Arabia&apos;s Vision projects from UAE &ndash; dedicated support for major KSA infrastructure.</p>
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
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">Enquiry Received</h3>
                <p className="text-stone-600">Redirecting you to our main site...</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-emerald-900 mb-6">Get Best Price for Your Saudi Project</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectCity" className="block text-sm font-medium text-stone-700 mb-1">City *</label>
                      <select id="projectCity" name="projectCity" required value={formData.projectCity} onChange={handleChange} className="w-full rounded border-stone-300 p-3 border bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all">
                        <option value="">Select City</option>
                        {CITY_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="panelType" className="block text-sm font-medium text-stone-700 mb-1">Panel *</label>
                      <select id="panelType" name="panelType" required value={formData.panelType} onChange={handleChange} className="w-full rounded border-stone-300 p-3 border bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all">
                        <option value="">Select Type</option>
                        {PANEL_OPTIONS.map(opt => <option key={opt.value} value={opt.label}>{opt.label}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="relative">
                    <textarea id="areaQuantity" name="areaQuantity" className={`${inputClasses} resize-none`} placeholder="Quantity" value={formData.areaQuantity} onChange={handleChange} rows={3} />
                    <label htmlFor="areaQuantity" className={labelClasses}>Quantity / M²</label>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-800 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-4 px-6 rounded transition-all duration-200 text-lg shadow-lg">
                    {isSubmitting ? 'Processing...' : 'Get Quotation Now'}
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

export default Hero;
