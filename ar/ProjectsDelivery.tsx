import React from 'react';
import { Truck } from 'lucide-react';

const ProjectsDeliveryAr: React.FC = () => {
  return (
    <section id="about-us" className="py-12 bg-stone-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">توريدات الألواح العازلة الرائدة في جميع أنحاء السعودية</h2>
        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-2/3">
            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
              مجموعة غوش هي المورد الرائد للألواح العازلة في جميع أنحاء المملكة، حيث ندعم المباني الجديدة والتوسعات وأعمال الترميم.
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "شحنات منتظمة إلى نيوم والرياض وجدة والدمام والخبر.",
                "خبرة في المستودعات والمراكز اللوجستية والمصانع وغرف التبريد.",
                "يتم تغليف الألواح وتوثيقها وشحنها لتصل جاهزة للتركيب."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-stone-700">
                  <Truck className="text-emerald-700 ml-3 flex-shrink-0 mt-1" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 w-full">
            <img 
              src="https://ghoshgroups.com/lp/leading-sandwich-panel-deliveries-across-saudi-arabia.jpg" 
              alt="لوجستيات التوريد في السعودية" 
              className="rounded-lg shadow w-full aspect-[4/3] object-cover" 
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

export default ProjectsDeliveryAr;