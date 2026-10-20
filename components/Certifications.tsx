import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-12 bg-emerald-900 text-white scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Company Credentials and Available Documentation</h2>
        <p className="mb-8 max-w-2xl mx-auto text-emerald-100 text-base md:text-lg leading-relaxed">
          These credentials relate to Ghosh Group and its UAE operations. Product-specific documents are provided according to the quoted panel system.
        </p>
        
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {[
            "Umm Al Quwain industrial licence",
            "Dubai Municipality conformity documents, where applicable",
            "QRS certification",
            "ISO 9001:2015 quality management"
          ].map((cert, index) => (
            <li key={index} className="flex items-center bg-emerald-800 px-4 py-2 rounded-full">
              <CheckCircle2 size={20} className="text-amber-400 mr-2" />
              <span className="font-medium text-base">{cert}</span>
            </li>
          ))}
        </ul>

        <p className="text-base text-emerald-200">
          They do not represent Saudi project approval. The buyer and project consultant must confirm the documents and standards required by the relevant Saudi authority.
        </p>
      </div>
    </section>
  );
};

export default Certifications;
