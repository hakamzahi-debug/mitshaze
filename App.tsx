
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { 
  Users, Atom, Youtube, 
  Film, Zap, Heart, History, 
  Home, Settings, Play, MessageCircle, 
  Info, Save, Trash2, Download, Upload,
  RefreshCw
} from 'lucide-react';
import CrewList from './components/CrewList';

interface PortalData {
  ownerName: string;
  youtubeId: string; 
  videoList: string[]; 
  role: string;
}

const DEFAULT_DATA: PortalData = {
  ownerName: 'Mist Haze',
  youtubeId: 'Q_j1aCXi12Q',
  videoList: ['Q_j1aCXi12Q', 'dQw4w9WgXcQ', '7p9r7K2z6-M', 'y6120QOlsfU', 'L_jWHffIx5E'],
  role: 'Pemilik Youtube Kabut Craft Studio'
};

const UPDATE_HISTORY = [
  { ver: 'v1.7.0', date: 'Februari 2026', desc: 'Sistem Local-First: Bebas biaya server & Tanpa ribet setup.', type: 'Feature' },
  { ver: 'v1.6.4', date: 'Februari 2026', desc: 'Pembersihan sistem Cloud yang memberatkan user.', type: 'Fix' },
  { ver: 'v1.0.0', date: 'Oktober 2023', desc: 'Peluncuran perdana Portal KabutCraft.', type: 'Launch' },
];

type PageType = 'home' | 'video' | 'history' | 'crew' | 'admin';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [portalData, setPortalData] = useState<PortalData>(DEFAULT_DATA);
  const [isSaving, setIsSaving] = useState(false);

  // Load data dari LocalStorage saat startup
  useEffect(() => {
    const saved = localStorage.getItem('kabutcraft_local_data');
    if (saved) {
      try {
        setPortalData(JSON.parse(saved));
      } catch (e) {
        console.error("Gagal memuat data lokal");
      }
    }
  }, []);

  const handleSaveLocal = () => {
    setIsSaving(true);
    localStorage.setItem('kabutcraft_local_data', JSON.stringify(portalData));
    setTimeout(() => {
      setIsSaving(false);
      alert("✓ Data tersimpan aman di browser kamu!");
    }, 500);
  };

  const handleReset = () => {
    if (confirm("Apakah kamu yakin ingin mereset data ke awal?")) {
      setPortalData(DEFAULT_DATA);
      localStorage.removeItem('kabutcraft_local_data');
      alert("Data telah di-reset.");
    }
  };

  const exportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(portalData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "kabutcraft_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="flex flex-col items-start justify-center min-h-[75vh] px-8 md:px-24 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-[0.3em] mb-8 border bg-blue-500/10 border-blue-500/20 text-blue-400">
              <Zap className="w-4 h-4" /> Versi Offline 1.7.0
            </div>
            <h1 className="text-5xl md:text-[8rem] font-display font-bold leading-[0.9] mb-10 tracking-tighter">
              <span className="text-white">Dunia Digital</span><br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Kabut Craft.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-4xl leading-relaxed font-light mb-12">
              Selamat datang di Portofolio <span className="text-blue-400 font-bold">{portalData.ownerName}</span>. 
              Segala perubahan yang kamu buat akan tersimpan otomatis di perangkat ini tanpa biaya server.
            </p>
            <div className="flex flex-wrap gap-6">
               <button onClick={() => setCurrentPage('video')} className="px-10 py-5 bg-white text-black rounded-3xl font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10">
                 Karya Kami <Play className="w-5 h-5 fill-current" />
               </button>
               <button onClick={() => setCurrentPage('admin')} className="px-10 py-5 bg-white/5 border border-white/10 rounded-3xl font-bold flex items-center gap-3 hover:bg-white/10 transition-all backdrop-blur-md">
                 Kelola Data <Settings className="w-5 h-5" />
               </button>
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="p-8 md:p-24 animate-in zoom-in-95 duration-700">
            <div className="max-w-7xl mx-auto space-y-16">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
                <div>
                  <h2 className="text-5xl font-bold flex items-center gap-4 mb-4">
                    <Youtube className="text-red-500 w-12 h-12" /> Galeri Video
                  </h2>
                  <p className="text-slate-500 text-lg uppercase tracking-widest font-bold">Produksi {portalData.ownerName}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-40">
                {portalData.videoList.filter(id => id).map((vidId, index) => (
                  <div key={index} className="group relative space-y-4">
                    <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-black shadow-3xl relative">
                      <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${vidId}?rel=0`} title={`Video ${index}`} frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div className="flex justify-between items-center px-4">
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">Project #{index + 1}</h3>
                      <div className="p-2 bg-white/5 rounded-xl"><Heart className="w-4 h-4 text-red-500 fill-current" /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="p-8 md:p-24 max-w-4xl mx-auto animate-in fade-in duration-700">
            <h2 className="text-5xl font-bold mb-12 flex items-center gap-4">
              <History className="w-12 h-12 text-blue-500" /> Riwayat Log
            </h2>
            <div className="space-y-6 pb-40">
              {UPDATE_HISTORY.map((upd, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex gap-6 items-start hover:bg-white/10 transition-all group">
                  <div className={`px-4 py-2 rounded-2xl font-black text-sm group-hover:scale-110 transition-transform ${upd.type === 'Feature' ? 'bg-blue-600' : 'bg-amber-600'}`}>{upd.ver}</div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">{upd.date}</span>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md uppercase ${upd.type === 'Feature' ? 'bg-blue-500/20 text-blue-500' : 'bg-amber-500/20 text-amber-500'}`}>{upd.type}</span>
                    </div>
                    <p className="text-xl text-slate-300 font-light leading-relaxed">{upd.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'crew':
        return <div className="p-4 md:p-24"><CrewList onClose={() => setCurrentPage('home')} /></div>;
      case 'admin':
        return (
          <div className="p-8 md:p-24 max-w-4xl mx-auto animate-in slide-in-from-top duration-700 pb-40">
            <div className="bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-12 shadow-3xl">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-600/20 rounded-2xl border border-blue-500/20"><Settings className="w-10 h-10 text-blue-400" /></div>
                  <h2 className="text-4xl font-bold tracking-tight">Studio Editor</h2>
                </div>
                <button 
                  onClick={handleSaveLocal} 
                  className="px-8 py-4 bg-blue-600 rounded-2xl flex items-center gap-3 font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
                >
                  {/* Added RefreshCw to imports above */}
                  {isSaving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />} 
                  Simpan Perubahan
                </button>
              </div>

              <div className="space-y-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1">Nama Studio / Owner</label>
                  <input 
                    value={portalData.ownerName} 
                    onChange={e => setPortalData({...portalData, ownerName: e.target.value})} 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xl font-bold" 
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1">Role / Peran Utama</label>
                  <input 
                    value={portalData.role} 
                    onChange={e => setPortalData({...portalData, role: e.target.value})} 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1">Daftar ID Video YouTube</label>
                  <textarea 
                    rows={5} 
                    value={portalData.videoList.join(', ')} 
                    onChange={e => setPortalData({...portalData, videoList: e.target.value.split(',').map(s => s.trim())})} 
                    className="w-full bg-black/50 border border-white/10 rounded-[2rem] p-8 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono text-sm" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button onClick={exportData} className="flex items-center justify-center gap-2 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-bold text-xs uppercase tracking-widest">
                    <Download className="w-4 h-4" /> Backup File
                  </button>
                  <button onClick={handleReset} className="flex items-center justify-center gap-2 p-5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl hover:bg-red-500/20 transition-all font-bold text-xs uppercase tracking-widest">
                    <Trash2 className="w-4 h-4" /> Reset Data
                  </button>
                </div>

                <div className="p-8 bg-blue-500/5 rounded-[2.5rem] border border-blue-500/10 flex items-start gap-6">
                   <div className="p-4 rounded-2xl bg-blue-500/20 text-blue-400">
                      <Info className="w-8 h-8" />
                   </div>
                   <div>
                     <p className="text-white font-black text-lg">Keamanan Data</p>
                     <p className="text-slate-400 text-xs leading-relaxed">
                       Data kamu disimpan secara lokal di browser ini (LocalStorage). 
                       Gunakan tombol <b>Backup File</b> untuk mengunduh salinan data jika kamu ingin pindah perangkat.
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-display selection:bg-blue-500/30 overflow-x-hidden pb-40">
      <div className="fixed inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-8 md:px-24 flex justify-between items-center max-w-8xl mx-auto backdrop-blur-md">
        <div className="flex items-center gap-6 group cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
             <Atom className="w-8 h-8 text-blue-400 animate-spin-slow" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter leading-tight italic">KABUT<span className="text-blue-500">CRAFT</span></span>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em]">Local Studio Mode</span>
          </div>
        </div>
        <button onClick={() => setCurrentPage('admin')} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
           <Settings className="w-6 h-6 text-slate-400" />
        </button>
      </header>

      {/* Main Container */}
      <main className="pt-32 min-h-screen relative z-10">{renderContent()}</main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 p-10 flex justify-center pointer-events-none pb-12">
        <div className="bg-[#0f1218]/90 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-5 flex items-center gap-2 shadow-[0_32px_120px_-20px_rgba(0,0,0,1)] pointer-events-auto">
          <NavItem active={currentPage === 'home'} onClick={() => setCurrentPage('home')} icon={Home} label="HOME" />
          <NavItem active={currentPage === 'video'} onClick={() => setCurrentPage('video')} icon={Film} label="VIDEO" />
          
          <div className="relative -top-14 px-6 group">
            <button className="w-28 h-28 bg-gradient-to-tr from-blue-700 to-blue-400 rounded-[3rem] flex items-center justify-center shadow-[0_20px_60px_-10px_rgba(37,99,235,0.6)] hover:scale-110 active:scale-90 transition-all duration-500 relative z-10">
              <MessageCircle className="w-14 h-14 text-white fill-white/10" />
            </button>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-white text-[9px] font-black px-4 py-1.5 rounded-full text-blue-700 uppercase tracking-widest">CHAT</div>
          </div>

          <NavItem active={currentPage === 'history'} onClick={() => setCurrentPage('history')} icon={History} label="LOGS" />
          <NavItem active={currentPage === 'crew'} onClick={() => setCurrentPage('crew'} icon={Users} label="CREW" />
        </div>
      </nav>

      <div className="text-center p-20 opacity-10 pointer-events-none pb-48">
        <p className="text-[9px] font-black uppercase tracking-[1em] leading-loose max-w-sm mx-auto">MANAGED LOCALLY • NO BILLING REQUIRED</p>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ active: boolean; icon: any; label: string; onClick: () => void }> = ({ active, icon: Icon, label, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center w-24 md:w-32 py-5 rounded-[2.5rem] transition-all duration-500 ${active ? 'text-blue-400 bg-blue-500/5' : 'text-slate-500 hover:text-slate-200'}`}>
    <Icon className="w-7 h-7 mb-2" />
    <span className="text-[10px] font-black tracking-[0.2em]">{label}</span>
  </button>
);

export default App;
