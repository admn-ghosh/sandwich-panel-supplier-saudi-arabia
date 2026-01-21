import React, { Suspense, lazy } from 'react';
import TopStripAr from './ar/TopStrip';
import HeroAr from './ar/Hero';
import ProjectGalleryAr from './ar/ProjectGallery';

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

function AppAr() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans" dir="rtl" style={{ fontFamily: '"Tajawal", sans-serif' }}>
      <TopStripAr />
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

export default AppAr;
