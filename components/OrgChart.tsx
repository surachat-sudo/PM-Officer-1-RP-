
import React from 'react';

const OrgChart: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 md:p-8 border border-slate-100 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-5xl">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/OPM2565.jpg/1280px-OPM2565.jpg" 
          alt="โครงสร้างสำนักนายกรัฐมนตรี" 
          className="w-full h-auto rounded-xl shadow-sm border border-slate-100"
        />
        <p className="text-center text-slate-400 text-xs mt-4 font-medium italic">
          * แผนผังโครงสร้างสำนักนายกรัฐมนตรี (ภาพประกอบเพื่อการอ้างอิง)
        </p>
      </div>
    </div>
  );
};

export default OrgChart;
