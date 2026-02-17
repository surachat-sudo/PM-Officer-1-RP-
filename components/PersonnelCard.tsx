
import React, { useState } from 'react';
import { Personnel } from '../types';

interface Props {
  data: Personnel;
  variant?: 'featured' | 'standard';
  onClick?: (data: Personnel) => void;
}

const PersonnelCard: React.FC<Props> = ({ data, variant = 'standard', onClick }) => {
  const [imageError, setImageError] = useState(false);

  const renderAvatar = (sizeClass: string) => {
    const avatarUrl = data.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/e/ed/JustRoblox.png?20260217064944";
    
    if (imageError) {
      return (
        <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white text-4xl font-bold">
          👤
        </div>
      );
    }

    return (
      <img 
        src={avatarUrl} 
        alt="" 
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${variant === 'featured' ? '' : ''}`}
        onError={() => setImageError(true)}
      />
    );
  };

  const handleClick = () => {
    if (onClick) onClick(data);
  };

  if (variant === 'featured') {
    return (
      <div 
        onClick={handleClick}
        className="group cursor-pointer bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-3xl p-8 text-white shadow-2xl transition-all hover:shadow-[0_20px_50px_rgba(30,58,95,0.4)] hover:scale-[1.02] overflow-hidden relative border border-white/10"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none transition-all group-hover:bg-white/10"></div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-slate-900 shadow-2xl border-4 border-yellow-400/30 flex-shrink-0 relative">
            {renderAvatar("featured")}
          </div>
          <div className="text-center md:text-left flex-1">
            <span className="inline-block px-4 py-1.5 bg-yellow-500 text-[#1e3a5f] rounded-full text-xs font-black mb-4 uppercase tracking-tighter shadow-lg">
              {data.position}
            </span>
            <h3 className="text-3xl md:text-5xl font-black mb-3 drop-shadow-md group-hover:text-yellow-200 transition-colors">{data.name}</h3>
            <p className="text-blue-100/80 text-lg font-medium">{data.roleDescription}</p>
          </div>
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/10 text-center md:text-left group-hover:bg-black/40 transition-colors">
            <p className="text-[10px] text-blue-300 uppercase tracking-[0.2em] mb-1 font-bold">วาระดำรงตำแหน่ง</p>
            <p className="font-black text-xl text-yellow-400">{data.period || 'ปัจจุบัน'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#1e3a5f] hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="flex items-center gap-5 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 group-hover:bg-slate-800 flex items-center justify-center transition-all overflow-hidden flex-shrink-0 border border-slate-200 group-hover:rounded-full">
          {renderAvatar("standard")}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-[#1e3a5f] font-black uppercase tracking-widest mb-1 truncate opacity-70 group-hover:opacity-100">{data.position}</p>
          <h4 className="text-xl font-black text-slate-800 truncate group-hover:text-[#1e3a5f] transition-colors">{data.name}</h4>
          <p className="text-sm text-slate-500 mt-1 line-clamp-1 font-medium italic">{data.roleDescription || 'บริหารงานราชการ'}</p>
        </div>
        <div className="hidden sm:flex flex-col items-end gap-2 flex-shrink-0">
           {data.tags.map(tag => (
             <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-100 text-[#1e3a5f] rounded-md font-black uppercase group-hover:bg-blue-600 group-hover:text-white transition-colors">#{tag}</span>
           ))}
        </div>
      </div>
    </div>
  );
};

export default PersonnelCard;
