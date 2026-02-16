import React from 'react';
import { Users, X, Github, Twitter, Shield, Code, Zap, Heart, Camera, Palette, Music, Cpu } from 'lucide-react';

interface CrewListProps {
  onClose: () => void;
}

const CREW_MEMBERS = [
  { name: 'MistHaze (Haze)', role: 'Pemilik Utama & Pembuat', bio: '', icon: Shield, color: 'text-amber-500' },
  { name: 'Lopli', role: 'Voice Actor', bio: '', icon: Zap, color: 'text-purple-500' },
  { name: 'Hanzen', role: 'Voice Actor', bio: '', icon: Code, color: 'text-cyan-500' },
  { name: 'Keshi', role: 'Voice Actor', bio: '', icon: Palette, color: 'text-pink-500' },
  { name: 'Rain', role: 'Voice Actor', bio: '', icon: Heart, color: 'text-blue-500' },
  { name: 'Nia', role: 'Voice Actor', bio: '', icon: Camera, color: 'text-green-500' },
  { name: 'Renmaru', role: 'Voice Actor', bio: '', icon: Music, color: 'text-indigo-500' },
  { name: 'Asep', role: 'Voice Actor', bio: '', icon: Cpu, color: 'text-slate-500' },
];

const CrewList: React.FC<CrewListProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative flex flex-col max-h-[90vh]">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors z-10">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 border-b border-slate-200 dark:border-white/5 bg-gradient-to-br from-indigo-50 to-transparent dark:from-slate-800/50 shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-indigo-500" />
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">KabutCraft Studio Crew</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">The collective specialized team behind the project.</p>
        </div>

        <div className="p-4 md:p-8 space-y-4 overflow-y-auto">
          {CREW_MEMBERS.map((member, i) => (
            <div key={i} className="group relative p-4 md:p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all flex items-center gap-4 md:gap-6 animate-in slide-in-from-bottom duration-500" style={{ animationDelay: `${i * 50}ms` }}>
              <div className={`p-3 md:p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md ${member.color} shrink-0`}>
                <member.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-base md:text-lg truncate">{member.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-slate-50 dark:bg-slate-950/50 flex justify-center gap-4 shrink-0 border-t border-slate-200 dark:border-white/5">
          <a href="https://github.com/kabutcraft" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-indigo-500 transition-colors uppercase tracking-widest">
            <Github className="w-4 h-4" /> Github
          </a>
          <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-800"></div>
          <button className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-indigo-500 transition-colors uppercase tracking-widest">
            <Twitter className="w-4 h-4" /> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrewList;