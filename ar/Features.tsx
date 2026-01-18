import React from 'react';
import { Factory, ShieldCheck, Sun, HardHat, FileText } from 'lucide-react';

const FeaturesAr: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-12 bg-stone-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-950 mb-6">لماذا تختار المورد الرائد للألواح العازلة في السعودية</h2>
        <p className="text-center text-lg text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          نحن نخدم مشاريع رؤية المملكة 2030 من قاعدتنا في الإمارات، ونجمع بين الجودة المعتمدة والخدمات اللوجستية الموثوقة لضمان بقاء مشاريعكم في موعدها.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Factory, title: "مُصنع مباشر للسعودية", text: "يتم إنتاج الألواح في منشأتنا المعتمدة من الأيزو وتوريدها مباشرة إلى المشاريع في السعودية." },
            { icon: ShieldCheck, title: "حلول معتمدة من الدفاع المدني", text: "تم اختبار ألواح PUR و PIR والصوف الصخري واعتمادها لتلبية متطلبات الحرائق والسلامة." },
            { icon: Sun, title: "مصمم للمناخ السعودي", text: "أنظمتنا مصممة لتحمل درجات الحرارة العالية والرطوبة في الرياض وجدة والدمام والخبر." },
            { icon: HardHat, title: "خبرة في المشاريع الكبرى", text: "مجموعة غوش هي الخيار الرائد للمنشآت الصناعية الكبرى ومشاريع رؤية 2030." },
            { icon: FileText, title: "دعم فني متكامل", text: "يوفر فريقنا الفني مستوى الدعم المتوقع من مورد رائد للألواح العازلة في المملكة." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow-sm border border-stone-200 text-right">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4 mx-0 mr-auto lg:mr-0 lg:ml-auto rtl:ml-0 rtl:mr-auto">
                 <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{item.title}</h3>
              <p className="text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAr;