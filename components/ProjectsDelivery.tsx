import React from 'react';
import { Truck } from 'lucide-react';

const ProjectsDelivery: React.FC = () => {
  return (
    <section id="about-us" className="py-12 bg-stone-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">Leading Sandwich Panel Deliveries Across Saudi Arabia</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <p className="text-base md:text-lg text-stone-700 mb-6 leading-relaxed">
              Ghosh Group is the leading sandwich panels supplier throughout Saudi Arabia, supporting new builds, extensions and retrofit work.
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "Regular shipments to NEOM, Riyadh, Jeddah, Dammam, Al Khobar and other industrial clusters.",
                "Experience with warehouses, logistics hubs, factories, cold rooms, showrooms and residential compounds in the Kingdom.",
                "Panels are packed, documented and dispatched so they arrive ready for installation on Saudi project sites."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-base text-stone-700 leading-relaxed">
                  <Truck className="text-emerald-700 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-emerald-900 text-base md:text-lg leading-relaxed">
              Many clients now rely on Ghosh Group as their preferred leading sandwich panel supplier in Saudi Arabia, proudly serving the Kingdom’s Vision projects from UAE.
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <img 
              src="https://ghoshgroups.com/lp/leading-sandwich-panel-deliveries-across-saudi-arabia.jpg" 
              alt="Leading sandwich panel delivery logistics across Saudi Arabia" 
              className="rounded-lg shadow w-full object-cover aspect-[4/3]"
              width="400"
              height="300"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDelivery;