
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#1e3a5f] text-white py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="%23ffffff" stroke-width="0.5"/></svg>')`, 
            backgroundSize: '60px' 
          }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <div className="mb-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Seal_of_the_Office_of_the_Prime_Minister_of_Thailand.svg" 
            alt="Seal" 
            className="w-24 h-24 drop-shadow-2xl"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-center tracking-tight mb-3">
          สำนักนายกรัฐมนตรี
        </h1>
        <p className="text-xl text-[#d4af37] text-center font-medium tracking-wide">
          ทำเนียบบุคลากร
        </p>
        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-6"></div>
      </div>
    </header>
  );
};

export default Header;
