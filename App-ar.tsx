import React from 'react';
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

function AppAr() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans" dir="rtl">
      <TopStripAr />
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

export default AppAr;