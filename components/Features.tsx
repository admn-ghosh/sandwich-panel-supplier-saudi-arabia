import React from 'react';
import { Factory, ShieldCheck, Sun, HardHat, FileText } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-12 bg-stone-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-950 mb-6">Why Request a Ghosh Group Panel Quotation</h2>
        <p className="text-center text-base md:text-lg text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Our UAE projects desk can review your panel type, quantity, destination and documentation requirements before confirming commercial and delivery terms.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
               <Factory size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">UAE manufacturer</h3>
            <p className="text-base text-stone-600 leading-relaxed">Panels are manufactured at our UAE facility. Export availability and delivery terms for Saudi Arabia are confirmed for each enquiry.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">Documented panel options</h3>
            <p className="text-base text-stone-600 leading-relaxed">Available product data and test documents can be supplied for review. Compliance depends on the selected system and the project authority’s requirements.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
               <Sun size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">Options for hot climates</h3>
            <p className="text-base text-stone-600 leading-relaxed">Panel specifications can be reviewed against the project’s thermal, humidity and exposure requirements.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
               <HardHat size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">Project-specific selection</h3>
            <p className="text-base text-stone-600 leading-relaxed">Tell us the application, required thickness, core type and quantity so the quotation can reflect the project brief.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
             <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
               <FileText size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">End‑to‑end technical support</h3>
            <p className="text-base text-stone-600 leading-relaxed">Our team can provide available product data, quotation details and order documentation for review.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
