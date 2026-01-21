import React, { useState, useEffect, Suspense, lazy } from 'react';
import TopStrip from './components/TopStrip';
import Hero from './components/Hero'; 
import ProjectGallery from './components/ProjectGallery'; 
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

import TopStripAr from './ar/TopStrip';
import HeroAr from './ar/Hero';
import ProjectGalleryAr from './ar/ProjectGallery';

// Only lazy load components deep below the fold
const Features = lazy(() => import('./components/Features'));
const Certifications = lazy(() => import('./components/Certifications'));
const ProductSection = lazy(() => import('./components/ProductSection'));
const ProjectsDelivery = lazy(() => import('./components/ProjectsDelivery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));

const FeaturesAr = lazy(() => import('./ar/Features'));
const CertificationsAr = lazy(() => import('./ar/Certifications'));
const ProductSectionAr = lazy(() => import('./ar/ProductSection'));
const ProjectsDeliveryAr = lazy(() => import('./ar/ProjectsDelivery'));
const TestimonialsAr = lazy(() => import('./ar/Testimonials'));
const FAQAr = lazy(() => import('./ar/FAQ'));
const FooterAr = lazy(() => import('./ar/Footer'));
const StickyCTAAr = lazy(() => import('./ar/StickyCTA'));

const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center bg-stone-50">
    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-700 rounded-full animate-spin"></div>
  </div>
);

interface AppProps {
  initialLanguage?: 'en' | 'ar';
}

function App({ initialLanguage = 'en' }: AppProps) {
  const [lang, setLang] = useState<'en' | 'ar'>(initialLanguage);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    if (lang === 'ar') {
      document.title = "مورد رائد للألواح العازلة في السعودية | مجموعة غوش";
    } else {
      document.title = "Leading Sandwich Panels Supplier in Saudi Arabia | Ghosh Group";
    }

    try {
      const url = new URL(window.location.href);
      if (lang === 'ar') url.searchParams.set('lang', 'ar');
      else url.searchParams.delete('lang');
      window.history.pushState({}, '', url.toString());
    } catch (e) {}
    
    setIsLoaded(true);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (!isLoaded) return null;

  if (lang === 'ar') {
    return (
      <div className="min-h-screen bg-stone-50 font-sans" dir="rtl" style={{ fontFamily: '"Tajawal", sans-serif' }}>
        <TopStripAr onLanguageSwitch={toggleLanguage} />
        <main>
          <HeroAr />
          <ProjectGalleryAr />
          <Suspense fallback={<SectionLoader />}>
            <FeaturesAr />
            <CertificationsAr />
            <ProductSectionAr />
            <ProjectsDeliveryAr />
            <TestimonialsAr />
            <FAQAr />
          </Suspense>
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
        <ProjectGallery />
        <Suspense fallback={<SectionLoader />}>
          <Features />
          <Certifications />
          <ProductSection />
          <ProjectsDelivery />
          <Testimonials />
          <FAQ />
        </Suspense>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
