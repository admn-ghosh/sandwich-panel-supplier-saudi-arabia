
import React, { useState, useEffect } from 'react';
import TopStrip from './components/TopStrip';
import Hero from './components/Hero';
import Features from './components/Features';
import Certifications from './components/Certifications';
import ProductSection from './components/ProductSection';
import ProjectsDelivery from './components/ProjectsDelivery';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

// Arabic Components
import TopStripAr from './ar/TopStrip';
import HeroAr from './ar/Hero';
import FeaturesAr from './ar/Features';
import CertificationsAr from './ar/Certifications';
import ProductSectionAr from './ar/ProductSection';
import ProjectsDeliveryAr from './ar/ProjectsDelivery';
import ProjectGalleryAr from './ar/ProjectGallery';
import TestimonialsAr from './ar/Testimonials';
import FAQAr from './ar/FAQ';
import FooterAr from './ar/Footer';
import StickyCTAAr from './ar/StickyCTA';

interface AppProps {
  initialLanguage?: 'en' | 'ar';
}

function App({ initialLanguage = 'en' }: AppProps) {
  const [lang, setLang] = useState<'en' | 'ar'>(initialLanguage);

  useEffect(() => {
    // Synchronize HTML dir attribute and lang for RTL support & SEO
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update Document Title
    if (lang === 'ar') {
      document.title = "مورد رائد للألواح العازلة في السعودية | مجموعة غوش";
    } else {
      document.title = "Leading Sandwich Panels Supplier in Saudi Arabia | Ghosh Group";
    }

    // Update URL without reloading to keep language state on refresh
    try {
      const url = new URL(window.location.href);
      if (lang === 'ar') {
        url.searchParams.set('lang', 'ar');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.pushState({}, '', url.toString());
    } catch (e) {
      console.warn("Could not update URL state:", e);
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (lang === 'ar') {
    return (
      <div className="min-h-screen bg-stone-50 font-sans" dir="rtl" style={{ fontFamily: '"Tajawal", sans-serif' }}>
        <TopStripAr onLanguageSwitch={toggleLanguage} />
        <main>
          <HeroAr />
          <FeaturesAr />
          <ProjectGalleryAr />
          <CertificationsAr />
          <ProductSectionAr />
          <ProjectsDeliveryAr />
          <TestimonialsAr />
          <FAQAr />
        </main>
        <FooterAr />
        <StickyCTAAr />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans" dir="ltr" style={{ fontFamily: '"Inter", sans-serif' }}>
      <TopStrip onLanguageSwitch={toggleLanguage} />
      <main>
        <Hero />
        <Features />
        <ProjectGallery />
        <Certifications />
        <ProductSection />
        <ProjectsDelivery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
