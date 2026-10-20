import React from 'react';
import { Truck } from 'lucide-react';

const ProjectsDelivery: React.FC = () => {
  return (
    <section id="about-us" className="py-12 bg-stone-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">Quotations for Delivery to Saudi Arabia</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <p className="text-base md:text-lg text-stone-700 mb-6 leading-relaxed">
              Ghosh Group manufactures sandwich panels in the UAE and can assess supply enquiries for new-build, extension and retrofit projects in Saudi Arabia.
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "Delivery requests can be assessed for Riyadh, Jeddah, Dammam, Al Khobar and other Saudi destinations.",
                "Tell us the intended application, such as a warehouse, factory, cold room or commercial building.",
                "Packing, documents, transport scope and estimated timing are stated in the written quotation."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-base text-stone-700 leading-relaxed">
                  <Truck className="text-emerald-700 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-emerald-900 text-base md:text-lg leading-relaxed">
              Supply availability, delivery feasibility and project documentation are confirmed before an order is accepted.
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <img 
              src="https://ghoshgroups.com/lp/leading-sandwich-panel-deliveries-across-saudi-arabia.jpg" 
              alt="Sandwich panel packing and delivery logistics"
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
