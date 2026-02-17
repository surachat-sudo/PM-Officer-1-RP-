
import React, { useState } from 'react';
import Header from './components/Header';
import PersonnelCard from './components/PersonnelCard';
import PersonnelDetail from './components/PersonnelDetail';
import OrgChart from './components/OrgChart';
import PrivacyModal from './components/PrivacyModal';
import ContactModal from './components/ContactModal';
import { Section, Personnel } from './types';
import { EXECUTIVE_DATA, DEPUTY_PM_DATA, SECRETARY_DATA } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.EXECUTIVE);
  const [selectedPersonnel, setSelectedPersonnel] = useState<Personnel | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handlePersonnelClick = (p: Personnel) => {
    setSelectedPersonnel(p);
  };

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setSelectedPersonnel(null); // Reset detail view when changing tabs
  };

  const NavButton: React.FC<{ section: Section; label: string }> = ({ section, label }) => (
    <button
      onClick={() => handleNavClick(section)}
      className={`px-8 py-5 font-bold transition-all border-b-4 whitespace-nowrap ${
        activeSection === section && !selectedPersonnel
          ? 'text-[#1e3a5f] border-[#1e3a5f] bg-slate-50' 
          : 'text-slate-500 border-transparent hover:text-blue-800'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Modals */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Sticky Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 flex overflow-x-auto custom-scrollbar">
          <NavButton section={Section.EXECUTIVE} label="คณะผู้บริหาร" />
          <NavButton section={Section.SECRETARY} label="สำนักเลขาธิการ" />
          <NavButton section={Section.STRUCTURE} label="โครงสร้าง" />
        </div>
      </nav>

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
        {/* Profile Detail View Overlay Logic */}
        {selectedPersonnel ? (
          <PersonnelDetail data={selectedPersonnel} onBack={() => setSelectedPersonnel(null)} />
        ) : (
          <>
            {/* Executive Section */}
            {activeSection === Section.EXECUTIVE && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-[#1e3a5f] rounded-full"></span>
                    ผู้นำรัฐบาล
                  </h2>
                  {EXECUTIVE_DATA.map(p => (
                    <PersonnelCard 
                      key={p.id} 
                      data={p} 
                      variant="featured" 
                      onClick={handlePersonnelClick} 
                    />
                  ))}
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                    คณะรองนายกรัฐมนตรี
                  </h2>
                  {DEPUTY_PM_DATA.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {DEPUTY_PM_DATA.map(p => (
                        <PersonnelCard 
                          key={p.id} 
                          data={p} 
                          onClick={handlePersonnelClick} 
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white/60 border-2 border-dashed border-slate-200 rounded-3xl p-16 text-center shadow-inner">
                       <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4 text-slate-400 text-3xl">
                         🚫
                       </div>
                       <p className="text-slate-500 font-bold text-xl italic">ยังไม่มีการแต่งตั้งอย่างเป็นทางการ</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Secretary Section */}
            {activeSection === Section.SECRETARY && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
                  สำนักเลขาธิการนายกรัฐมนตรี
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SECRETARY_DATA.map(p => (
                    <PersonnelCard 
                      key={p.id} 
                      data={p} 
                      onClick={handlePersonnelClick} 
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Structure Section */}
            {activeSection === Section.STRUCTURE && (
              <div className="animate-in fade-in duration-500">
                 <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-purple-600 rounded-full"></span>
                  โครงสร้างองค์กร
                </h2>
                <OrgChart />
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bg-[#0f172a] text-white py-12 px-6 border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/5 rounded-full p-2 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/15/Seal_of_the_Office_of_the_Prime_Minister_of_Thailand.svg" 
                className="w-full h-full object-contain drop-shadow-lg" 
                alt="ตราสำนักนายกรัฐมนตรี" 
              />
            </div>
            <div>
              <p className="text-slate-100 text-lg font-bold tracking-tight">สำนักนายกรัฐมนตรี</p>
              <p className="text-slate-400 text-sm">Government House, Phitsanulok Rd, Dusit, Bangkok 10300</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-6 mb-2">
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-slate-400 hover:text-white transition-all text-sm font-medium border-b border-transparent hover:border-white"
              >
                นโยบายความเป็นส่วนตัว
              </button>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="text-slate-400 hover:text-white transition-all text-sm font-medium border-b border-transparent hover:border-white"
              >
                ติดต่อสอบถาม
              </button>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2026 OFFICE OF THE PRIME MINISTER [T] ALL RIGHTS RESERVED 
              <span className="text-red-500 ml-1 font-black">* FOR ROLEPLAYING PURPOSE</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
