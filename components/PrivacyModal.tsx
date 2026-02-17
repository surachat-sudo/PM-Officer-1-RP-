
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="text-xl font-black text-[#1e3a5f] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
            นโยบายความเป็นส่วนตัว
          </h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center transition-colors text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <section>
              <h4 className="text-lg font-bold text-slate-800 mb-2">1. การเก็บรวบรวมข้อมูล</h4>
              <p>เรารวบรวมข้อมูลส่วนบุคคลที่ท่านสมัครใจให้ไว้ผ่านการใช้งานเว็บไซต์ เพื่อปรับปรุงการให้บริการและสื่อสารข้อมูลข่าวสารของทางสำนักนายกรัฐมนตรีให้มีประสิทธิภาพสูงสุด</p>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-slate-800 mb-2">2. วัตถุประสงค์การใช้ข้อมูล</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>เพื่อแสดงข้อมูลบุคลากรและโครงสร้างองค์กรอย่างถูกต้อง</li>
                <li>เพื่อใช้ในการวิเคราะห์ข้อมูลทางสถิติเพื่อพัฒนาเว็บไซต์</li>
                <li>เพื่อความปลอดภัยและป้องกันการใช้งานที่ผิดวัตถุประสงค์</li>
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-bold text-slate-800 mb-2">3. การคุ้มครองข้อมูลส่วนบุคคล (PDPA)</h4>
              <p>เว็บไซต์นี้ปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 โดยมีการรักษาความปลอดภัยของข้อมูลในระดับสากล และจะไม่นำข้อมูลของท่านไปเผยแพร่ต่อบุคคลภายนอกโดยไม่ได้รับอนุญาต</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-slate-800 mb-2">4. สิทธิของเจ้าของข้อมูล</h4>
              <p>ท่านมีสิทธิในการขอเข้าถึง ขอแก้ไข หรือขอลบข้อมูลส่วนบุคคลของท่านออกจากระบบของเรา โดยสามารถติดต่อเจ้าหน้าที่ผ่านช่องทางที่ระบุไว้ในหน้า "ติดต่อสอบถาม"</p>
            </section>

            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-yellow-800 text-sm italic font-medium">
              * ข้อมูลที่ปรากฏบนเว็บไซต์นี้ จัดทำขึ้นเพื่อวัตถุประสงค์ในการสาธิต (Roleplay/Education) และการเข้าถึงข้อมูลสาธารณะของส่วนราชการเท่านั้น
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-blue-800 transition-colors shadow-lg active:scale-95"
          >
            รับทราบและปิด
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
