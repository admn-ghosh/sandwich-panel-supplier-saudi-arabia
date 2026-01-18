import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = window.setInterval(nextSlide, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
    setIsPaused(false);
  };

  return (
    <section id="our-work" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">Our Work Across GCC - Leading Deliveries</h2>
          <p className="text-base md:text-lg text-stone-700 max-w-4xl mx-auto">
            Trusted panel solutions delivered across Saudi Arabia and the GCC.
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden rounded-xl shadow-lg border border-stone-200 bg-stone-100 relative aspect-[16/9]">
            {PROJECTS.map((project, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={project.imageSrc} 
                  alt={project.alt}
                  className="object-cover w-full h-full"
                  width="1024"
                  height="576"
                  loading={index === 0 ? "eager" : "lazy"}
                  // @ts-ignore
                  fetchpriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                />
                
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-10 text-white">
                   <div className="border-l-4 border-emerald-500 pl-4">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-stone-200 text-base md:text-lg">{project.description}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-emerald-600/90 text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100" aria-label="Previous">
            <ChevronLeft size={28} />
          </button>
          
          <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-emerald-600/90 text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100" aria-label="Next">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;