
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="text-xl font-black text-[#1e3a5f] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            ติดต่อสอบถาม
          </h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center transition-colors text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-4xl shadow-inner">
              💬
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-800">ช่องทางการติดต่อ</h4>
              <p className="text-slate-500 text-sm">กรุณาติดต่อผ่านช่องทาง Discord ด้านล่างนี้</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 group hover:border-indigo-200 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                👤
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Discord User</p>
                <p className="text-slate-800 font-black">weza331</p>
              </div>
            </div>

            <a 
              href="https://discord.gg/c2qQ5Gu8tU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-[#5865F2]/5 rounded-2xl border border-[#5865F2]/10 flex items-center gap-4 group hover:bg-[#5865F2]/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#5865F2] shadow-sm flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-[#5865F2] font-bold uppercase tracking-wider">Discord Community</p>
                <p className="text-slate-800 font-black">สำนักนายกรัฐมนตรี</p>
                <p className="text-[10px] text-slate-400 mt-0.5">คลิกเพื่อเข้าร่วมเซิร์ฟเวอร์</p>
              </div>
              <span className="text-slate-300 group-hover:text-[#5865F2] transition-colors">↗</span>
            </a>
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-2xl text-center">
            <p className="text-yellow-800 text-sm font-bold">
              💡 กรุณาเปิด Ticket ในช่อง "ติดต่อ" 
            </p>
            <p className="text-yellow-700 text-xs mt-1 italic">
              เพื่อให้เจ้าหน้าที่ดำเนินการช่วยเหลือได้อย่างเป็นระบบ
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-center">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-[#1e3a5f] text-white font-bold rounded-2xl hover:bg-blue-800 transition-all shadow-lg active:scale-[0.98]"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
