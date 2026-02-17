
import React from 'react';
import { Personnel } from '../types';

interface Props {
  data: Personnel;
  onBack: () => void;
}

const PersonnelDetail: React.FC<Props> = ({ data, onBack }) => {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-500">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-slate-500 hover:text-[#1e3a5f] font-bold transition-all group"
      >
        <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#1e3a5f] group-hover:text-white transition-all">
          ←
        </span>
        กลับสู่หน้าหลัก
      </button>

      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar with Image */}
          <div className="lg:w-2/5 relative bg-[#0f172a] min-h-[400px]">
            <img 
              src={data.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/e/ed/JustRoblox.png?20260217064944"} 
              alt={data.name}
              className="w-full h-full object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
               <span className="inline-block px-4 py-1.5 bg-yellow-500 text-[#1e3a5f] rounded-full text-xs font-black mb-4 uppercase tracking-tighter">
                {data.position}
              </span>
              <h2 className="text-4xl font-black text-white leading-tight drop-shadow-2xl">{data.name}</h2>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 lg:p-16">
            <div className="space-y-12">
              {/* Period Section */}
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-yellow-500 rounded-full"></span>
                  วาระดำรงตำแหน่ง
                </h3>
                <p className="text-2xl font-black text-slate-800">{data.period || 'ดำรงตำแหน่ง ณ ปัจจุบัน'}</p>
              </section>

              {/* Bio Section */}
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-blue-600 rounded-full"></span>
                  ประวัติโดยย่อ
                </h3>
                <div className="text-slate-600 text-lg leading-relaxed font-medium">
                  {data.bio || 'อยู่ระหว่างการปรับปรุงข้อมูลประวัติ...'}
                </div>
              </section>

              {/* Decorations Section */}
              {data.decorations && data.decorations.length > 0 && (
                <section>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
                    เครื่องราชอิสริยาภรณ์
                  </h3>
                  <div className="space-y-3">
                    {data.decorations.map((deco, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-emerald-200 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-600 font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-slate-700 font-bold">{deco}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tags/Role Section */}
              <section className="pt-8 border-t border-slate-50 flex flex-wrap gap-3">
                {data.tags.map(tag => (
                   <span key={tag} className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                    #{tag}
                   </span>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonnelDetail;
