import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS_AR } from './constants-ar';

const ProjectGalleryAr: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % PROJECTS_AR.length), []);
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + PROJECTS_AR.length) % PROJECTS_AR.length), []);

  return (
    <section id="our-work" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">أعمالنا في الخليج - توريدات رائدة</h2>
          <p className="text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed">
            بصفتنا <span className="font-semibold text-emerald-800">المورد الرائد للألواح العازلة في السعودية</span> والخليج، قدمنا حلولاً موثوقة للمقاولين والمطورين في المنطقة.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="overflow-hidden rounded-xl shadow-lg border border-stone-200 aspect-[16/9] relative bg-stone-100">
            {PROJECTS_AR.map((project, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'}`}>
                <img 
                  src={project.imageSrc} 
                  alt={project.alt} 
                  className="object-cover w-full h-full" 
                  width="1024"
                  height="576"
                  loading={index === 0 ? "eager" : "lazy"}
                  // Fix: fetchpriority -> fetchPriority
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                />
                <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-black/80 p-6 text-white text-right">
                   <div className="border-r-4 border-emerald-500 pr-4">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-stone-200">{project.description}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={nextSlide} className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-emerald-600/90 text-white p-3 rounded-full opacity-80 hover:opacity-100" aria-label="Next">
            <ChevronLeft size={28} />
          </button>
          <button onClick={prevSlide} className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-emerald-600/90 text-white p-3 rounded-full opacity-80 hover:opacity-100" aria-label="Previous">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGalleryAr;
