import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CertificationsAr: React.FC = () => {
  return (
    <section id="certifications" className="py-12 bg-emerald-900 text-white scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">اعتمادات الشركة والمستندات المتاحة</h2>
        <p className="mb-8 max-w-2xl mx-auto text-emerald-100 text-lg leading-relaxed">
          تتعلق هذه الاعتمادات بمجموعة غوش وعملياتها في الإمارات، وتُقدم المستندات الخاصة بالمنتج وفق نظام الألواح الوارد في عرض السعر.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {["رخصة صناعية – أم القيوين", "وثائق مطابقة بلدية دبي عند انطباقها", "شهادة QRS", "نظام إدارة الجودة ISO 9001:2015"].map((cert, index) => (
            <li key={index} className="flex items-center bg-emerald-800 px-4 py-2 rounded-full">
              <CheckCircle2 size={20} className="text-amber-400 ml-2" />
              <span className="font-medium">{cert}</span>
            </li>
          ))}
        </ul>
        <p className="text-base text-emerald-200">
          لا تمثل هذه الوثائق اعتماداً لمشروع سعودي. يجب على المشتري واستشاري المشروع تأكيد المستندات والمعايير المطلوبة لدى الجهة السعودية المختصة.
        </p>
      </div>
    </section>
  );
};

export default CertificationsAr;
