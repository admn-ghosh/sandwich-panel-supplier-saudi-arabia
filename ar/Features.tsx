import React from 'react';
import { Factory, ShieldCheck, Sun, HardHat, FileText } from 'lucide-react';

const FeaturesAr: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-12 bg-stone-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-950 mb-6">لماذا تطلب عرض سعر من مجموعة غوش</h2>
        <p className="text-center text-lg text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          يراجع مكتب المشاريع في الإمارات نوع الألواح والكمية ووجهة التسليم ومتطلبات المستندات قبل تأكيد الشروط التجارية وشروط التسليم.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Factory, title: "مصنع في الإمارات", text: "يتم تصنيع الألواح في منشأتنا في الإمارات، وتُؤكد إمكانية التصدير وشروط التسليم إلى السعودية لكل استفسار." },
            { icon: ShieldCheck, title: "خيارات موثقة", text: "يمكن تقديم البيانات الفنية ووثائق الاختبار المتاحة للمراجعة. ويعتمد الامتثال على النظام المختار ومتطلبات جهة المشروع." },
            { icon: Sun, title: "خيارات للمناخ الحار", text: "يمكن مراجعة مواصفات الألواح وفق متطلبات المشروع للحرارة والرطوبة وظروف التعرض." },
            { icon: HardHat, title: "اختيار حسب المشروع", text: "أرسل نوع الاستخدام والسماكة ونوع القلب والكمية المطلوبة ليعكس عرض السعر موجز المشروع." },
            { icon: FileText, title: "دعم فني ووثائقي", text: "يمكن لفريقنا تقديم البيانات الفنية المتاحة وتفاصيل عرض السعر ووثائق الطلب للمراجعة." }
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
