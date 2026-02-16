
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { Users, Atom, Sun, Moon, Github, Twitter, Mail, MessageSquare, Film, Info, Youtube, ExternalLink, Shield, Zap, Code, Heart, Briefcase, BellRing } from 'lucide-react';
import CrewList from './components/CrewList';

type ModalType = 'about' | 'chat' | 'video' | 'collab';

interface ModalProps {
  type: ModalType;
  onClose: () => void;
  onOpenChat: () => void;
}

const Modal: React.FC<ModalProps> = ({ type, onClose, onOpenChat }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[92vh] md:h-[85vh] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative flex flex-col">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 text-slate-500 hover:text-red-500 transition-colors z-50 shadow-lg backdrop-blur-md">
          <Atom className="w-5 h-5 rotate-45" />
        </button>

        {type === 'collab' && (
          <div className="p-8 md:p-12 overflow-y-auto flex flex-col items-center text-center justify-center h-full">
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 mb-8 animate-bounce">
              <Zap className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Ayo Berkolaborasi!</h2>
            <div className="max-w-2xl space-y-8 text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Mau punya Portofolio sendiri seperti Web ini, dengan nama mu sendiri, Channel mu sendiri, Chat mu sendiri?
              </p>
              <p>
                Hubungi Kabut Craft dengan tekan tombol <strong className="text-indigo-600 dark:text-indigo-400">"Chat Admin KabutCraft"</strong>, atau hubungi lewat Gmail admin. Tombol gmail tersedia di beranda layar utama.
              </p>
              
              <div className="pt-10 flex flex-col sm:flex-row gap-5 justify-center">
                <button 
                  onClick={onOpenChat}
                  className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/30 active:scale-95 text-base md:text-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  Chat Admin KabutCraft
                </button>
                <a 
                  href="mailto:hakamzahi@gmail.com"
                  className="px-10 py-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-3 border border-slate-200 dark:border-white/5 text-base md:text-lg shadow-sm"
                >
                  <Mail className="w-6 h-6" />
                  Hubungi lewat Gmail
                </a>
              </div>
            </div>
          </div>
        )}

        {type === 'about' && (
          <div className="p-8 md:p-12 overflow-y-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-500/40 relative z-10">
                  <Users className="w-16 h-16" />
                </div>
                <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Perkenalkan, Haze.</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                  <p>
                    Aku bergabung di Youtube pada tahun 2020 setidaknya sebelum pandemi di indonesia. Youtube sudah berjalan sekitar 5 tahun, banyak yang aku rubah di Youtube dan akhirnya secara resmi aku menamakan Youtube ku <strong>KabutCraft</strong>.
                  </p>
                  <p>
                    Soo Aku sudah menyampaikan nama ku di Beranda utama Namun sepertinya aku harus kenalan lagi. Perkenalkan Im <strong>MistHaze</strong> memanggil aku <strong>Haze</strong>, Aku adalah seorang animator dan menjadi pengembang suatu aplikasi dan web.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-3">
                      <Shield className="w-5 h-5 text-indigo-500" />
                      <span className="text-sm font-bold">Cita-cita Polisi</span>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-bold">Pebisnis Besar</span>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-3">
                      <Code className="w-5 h-5 text-cyan-500" />
                      <span className="text-sm font-bold">Developer</span>
                    </div>
                  </div>
                  <p>
                    Jika kalian ingin mengenal tipe ku, jujur saja aku adalah tipe orang yang tidak terlalu aktif bicara di media sosial, namun kuharap aku bisa menghibur kalian semua. 
                  </p>
                  <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl border border-indigo-100 dark:border-indigo-500/10">
                    <p className="text-indigo-900 dark:text-indigo-300 font-medium">
                      Oh iya Channel ini tidak sendirian, ada teman studio ku juga ikut di kabutcraft:
                      <span className="block mt-2 font-bold text-indigo-600 dark:text-indigo-400">
                        (MistHaze, Lopli, Hanzen, Keshi, Rain, Nia, Renmaru, Hanzen, Asep)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === 'chat' && (
          <div className="flex-1 w-full h-full bg-white relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <Atom className="w-12 h-12 text-slate-200 animate-spin-slow" />
            </div>
            <iframe 
              src="https://go.crisp.chat/chat/embed/?website_id=9bab5eee-525e-4069-aeaf-abc734a170eb" 
              className="w-full h-full border-none"
              title="Crisp Chat"
            />
          </div>
        )}

        {type === 'video' && (
          <div className="flex-1 w-full h-full flex flex-col bg-slate-50 dark:bg-slate-950 overflow-y-auto scroll-smooth">
            {/* YouTube Banner Header */}
            <div className="relative shrink-0">
               {/* Banner Image Area */}
               <div className="h-44 md:h-64 bg-[#0a192f] relative overflow-hidden">
                  <img 
                    src="https://yt3.googleusercontent.com/LIn8r9S0u8-N-vX0W6XF6_QW0l6C-G-R-z-Q_v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" 
                    className="w-full h-full object-cover"
                    alt="Channel Banner"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-display font-black text-5xl md:text-8xl tracking-tighter uppercase opacity-30 select-none">KABUT CRAFT</span>
                  </div>
               </div>
               
               {/* Channel Profile Section (Sesuai Screenshot MistHaze) */}
               <div className="px-6 md:px-12 py-6 flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10 -mt-20 md:-mt-24">
                 <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-[8px] border-white dark:border-slate-900 bg-amber-400 overflow-hidden shadow-2xl shrink-0">
                    <img 
                      src="https://yt3.googleusercontent.com/ytc/AIdro_m9T6-tFvjS9I1Z-N_XQxXj-iE-uJ_f6U7mXg=s176-c-k-c0x00ffffff-no-rj" 
                      alt="MistHaze Profile" 
                      className="w-full h-full object-cover" 
                    />
                 </div>
                 <div className="flex-1 text-center md:text-left pt-4 md:pt-24">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight drop-shadow-sm">Kabut Craft</h2>
                    <p className="text-indigo-600 dark:text-indigo-400 text-lg md:text-2xl font-bold mt-1">@Kabutcraft</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg mt-4 max-w-2xl leading-relaxed font-medium">
                      Hello Im MistHaze . I want to be successful on YouTube and work outside of it later. I hope my dreams of...
                    </p>
                 </div>
               </div>
            </div>

            <div className="px-6 md:px-12 pb-24 space-y-20">
              {/* Massive Subscribe Button */}
              <div className="flex justify-center md:justify-start pt-4">
                <a 
                  href="https://www.youtube.com/@Kabutcraft?sub_confirmation=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-14 py-6 bg-[#FF0000] hover:bg-red-700 text-white rounded-full font-black text-2xl md:text-3xl flex items-center gap-4 transition-all shadow-[0_15px_50px_rgba(255,0,0,0.4)] active:scale-95 hover:scale-105"
                >
                  <Youtube className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform" />
                  Langganan / Subscribe
                </a>
              </div>

              {/* Latest News Video Section */}
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-700">
                <div className="flex items-center gap-6">
                  <div className="h-14 md:h-20 w-4 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/20"></div>
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tighter">
                    Ini adalah berita Terbaru Dari Kabut Craft
                  </h3>
                </div>
                <div className="flex justify-center py-6">
                  <div className="w-full max-w-[360px] md:max-w-md aspect-[9/16] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] border-[6px] border-indigo-600/40 bg-black relative group transition-transform hover:scale-[1.02]">
                    <iframe 
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/Q_j1aCXi12Q?modestbranding=1&rel=0&iv_load_policy=3" 
                      title="Berita Terbaru KabutCraft"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Most Viewed Video Section */}
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                <div className="flex items-center gap-6">
                  <div className="h-14 md:h-20 w-4 bg-purple-600 rounded-full shadow-lg shadow-purple-500/20"></div>
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tighter">
                    Ini adalah Berita vidio dengan Views terbanyak saat ini
                  </h3>
                </div>
                <div className="flex justify-center py-6">
                  <div className="w-full max-w-[360px] md:max-w-md aspect-[9/16] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] border-[6px] border-purple-600/40 bg-black relative group transition-transform hover:scale-[1.02]">
                    <iframe 
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/n0rVATa_acw?modestbranding=1&rel=0&iv_load_policy=3" 
                      title="Video Terpopuler KabutCraft"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCrew, setShowCrew] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-500 relative overflow-hidden pb-12">
      
      {/* Modals */}
      {showCrew && <CrewList onClose={() => setShowCrew(false)} />}
      {activeModal && (
        <Modal 
          type={activeModal} 
          onClose={() => setActiveModal(null)} 
          onOpenChat={() => setActiveModal('chat')}
        />
      )}

      {/* Background Decor */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-white dark:from-indigo-950/40 dark:via-slate-950 dark:to-black z-0"></div>
      <div className="fixed inset-0 opacity-5 dark:opacity-10 z-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <header className="border-b border-slate-200 dark:border-white/10 sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-white/10 relative z-10 shadow-sm transition-transform group-hover:scale-105">
               <Atom className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white leading-none">
                  KabutCraft <span className="text-indigo-600 dark:text-indigo-400">Project</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-medium mt-1">Digital Innovation Hub</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowCrew(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">List My Crew</span>
              </button>

              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors border border-slate-200 dark:border-white/10"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-32">
        <div className="max-w-4xl animate-in slide-in-from-left duration-700">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-[0.95] mb-8">
            Building the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400">Future of Web.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-3xl">
            Web ini dikembangkan Oleh Kualitas gemini, Otak Utama dari web ini berasal dari Mist Haze selaku pemilik Youtube Kabut Craft Studio dan asal ide Web dibuat.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => setActiveModal('collab')}
              className="px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl active:scale-95 border border-transparent dark:border-white/10 text-lg md:text-xl"
            >
              Mau jadi bagian pemilik web ini, Ayo Kolaborasi!
            </button>
            <div className="flex items-center gap-6 px-6">
              <a href="https://github.com/kabutcraft" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-500 transition-colors transform hover:scale-110"><Github className="w-7 h-7" /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors transform hover:scale-110"><Twitter className="w-7 h-7" /></a>
              <a href="mailto:hakamzahi@gmail.com" className="text-slate-400 hover:text-indigo-500 transition-colors transform hover:scale-110"><Mail className="w-7 h-7" /></a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 md:mt-32 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <button 
            onClick={() => setActiveModal('about')}
            className="group p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-indigo-500/50 transition-all text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">About me</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Kisah perjalanan Haze dari 2020 hingga mendirikan KabutCraft Studio.</p>
          </button>

          <button 
            onClick={() => setActiveModal('chat')}
            className="group p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-cyan-500/50 transition-all text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Chat dengan Kabut Craft</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Layanan bantuan langsung terintegrasi dengan Crisp Chat System.</p>
          </button>

          <button 
            onClick={() => setActiveModal('video')}
            className="group p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-red-500/50 transition-all text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">My vidio</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Eksplorasi channel YouTube KabutCraft langsung dari portal kami.</p>
          </button>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full py-4 border-t border-slate-200 dark:border-white/5 text-center bg-white/50 dark:bg-slate-950/50 backdrop-blur-md z-40 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4">
          <span className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300 tracking-widest uppercase">@2026</span>
          <span className="text-[9px] md:text-[11px] font-medium text-slate-400 uppercase tracking-[0.2em]">
            Dibuat oleh Kabut Craft dan dikembangkan oleh gemini
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
