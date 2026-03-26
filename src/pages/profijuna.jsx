import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// --- IMPORT ASSETS ---
import fotoProfilJuna from './images/foto-juna.jpg';
import imgGoogleAds from './images/google-ads.jpg'; 
import imgDataAnalisys from './images/data-analisys.jpg';
import imgMikrotik from './images/sertif-mikrotik.jpg';

const DATA = {
  profile: {
    fullName: "DEDE JUNAWAN RIZKI",
    firstName: "DEDE",
    lastName: "JUNAWAN RIZKI",
    role: "UB STUDENT • DATA ENTHUSIAST",
    tagline: "TRANSFORMING RAW DATA INTO FUTURE INNOVATIONS.",
    email: "jrd353889@gmail.com",
    location: "DKI JAKARTA, ID",
    class: "T2D",
    semester: "SEMESTER 2",
    social: {
      linkedin: "https://www.linkedin.com/in/dede-junawan-rizki-412643377/",
      instagram: "https://www.instagram.com/junnnna111"
    },
    about: "Saya adalah mahasiswa Teknologi Informasi di Universitas Brawijaya yang saat ini duduk di semester 2 kelas T2D. Berdomisili di DKI Jakarta, saya memiliki antusiasme yang sangat tinggi di bidang Data Analyst, di mana saya senang menggali pola tersembunyi dari sekumpulan data mentah untuk dijadikan keputusan strategis yang berdampak nyata. Selain kemampuan analitik, saya memiliki sisi kreatif yang kuat dalam merancang UI (User Interface) web agar terlihat modern, interaktif, dan intuitif. Tidak hanya aspek teknis, saya juga aktif menulis berbagai essay untuk kompetisi lomba. Saya adalah pribadi yang disiplin, kompetitif, dan selalu haus akan tantangan baru."
  },
  work: [
    {
      company: "PT PUTRA TANJUNG JAYA",
      role: "IT SUPPORT (INTERNSHIP)",
      period: "3 BULAN",
      desc: "Maintenance infrastruktur IT, troubleshooting hardware/software, dan optimasi jaringan perusahaan.",
      tags: ["Networking", "Support"]
    }
  ],
  experience: [
    { title: "KETUA PELAKSANA @ SDGs 2024", year: "2024", desc: "Memimpin inisiatif pembangunan berkelanjutan tingkat regional.", tags: ["Leadership", "SDGs"] },
    { title: "PARTICIPANT @ EXPO INOVASI", year: "2024", desc: "Prototype Drone, Keyless System, dan IoT Cup Printer.", tags: ["Drone", "IoT"] }
  ],
  education: [
    { inst: "UNIVERSITAS BRAWIJAYA", period: "2025 - PRESENT", degree: "TEKNOLOGI INFORMASI", detail: "Kelas T2D // Semester 2" },
    { inst: "SMK YADIKA 3", period: "2021 - 2024", degree: "TEKNIK KOMPUTER & JARINGAN", detail: "Vocational" }
  ],
  certifications: [
    { id: 1, name: "GOOGLE ADS MEASUREMENT", provider: "GOOGLE", image: imgGoogleAds, cat: "Professional", icon: "📈", desc: "Optimasi kampanye digital berbasis performa data." },
    { id: 2, name: "DATA ANALYSIS FUNDAMENTAL", provider: "MYSKILL", image: imgDataAnalisys, cat: "Bootcamp", icon: "📊", desc: "Fundamental pengolahan dan visualisasi data strategis." },
    { id: 3, name: "MTCNA MIKROTIK", provider: "BNSP / MIKROTIK", image: imgMikrotik, cat: "Professional", icon: "🌐", desc: "Sertifikasi routing dan switching internasional." }
  ]
};

export default function Profijuna() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#000000] text-slate-300 min-h-screen font-black selection:bg-indigo-500 overflow-x-hidden relative">
      
      {/* 1. PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 z-[100]" style={{ scaleX }} />

      {/* 2. DYNAMIC HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 py-4 px-8 flex justify-between items-center text-[10px] tracking-[0.2em]">
        <div className="flex items-center gap-4 text-white/40 uppercase">
          <span className="text-emerald-500 animate-pulse">●</span> {DATA.profile.location}
        </div>
        <div className="text-indigo-400 font-mono">CLASS_{DATA.profile.class} // SEMESTER_02</div>
      </header>

      {/* 3. MARQUEE GACOR */}
      <div className="fixed top-[53px] w-full z-40 bg-indigo-600 py-1.5 overflow-hidden border-y border-white/10">
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap text-[9px] font-black uppercase tracking-[0.4em] text-black italic">
          {Array.from({ length: 8 }).map((_,i) => (
            <span key={i} className="mx-16">• {DATA.profile.fullName} • DATA ANALYST • UI DESIGNER •</span>
          ))}
        </motion.div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-64 pb-20 px-6 flex flex-col items-center text-center z-20">
        <motion.div 
          animate={{ rotate: [-4, 4, -4], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-20 origin-top"
        >
          <div className="absolute -top-[250px] left-1/2 w-[1px] h-[250px] bg-indigo-500/30 shadow-[0_0_15px_#4f46e5]" />
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-2 border-indigo-500 p-2 bg-black shadow-[0_0_80px_rgba(79,70,229,0.3)] group overflow-hidden">
            <img src={fotoProfilJuna} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700" alt="Juna" />
            <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-[1px] bg-indigo-400/50 shadow-[0_0_20px_#4f46e5]" />
          </div>
        </motion.div>

        <motion.div animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}>
          <h1 className="text-7xl md:text-[14vw] font-black text-white leading-[0.75] tracking-tighter uppercase mb-6">
            {DATA.profile.firstName} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 italic">
              {DATA.profile.lastName}
            </span>
          </h1>
        </motion.div>
      </section>

      {/* --- BENTO GRID CONTENT --- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 pb-48 z-20 relative">
        
        {/* Biography Box */}
        <motion.div 
          whileHover={{ rotateY: 5, rotateX: -5 }}
          className="md:col-span-7 bg-[#0a0a0c] border border-white/5 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group transition-all"
        >
          <h2 className="text-[10px] text-indigo-400 tracking-[0.5em] mb-10 uppercase italic">01 / Biography</h2>
          <p className="text-xl md:text-3xl font-black italic text-white leading-tight">"{DATA.profile.about}"</p>
        </motion.div>

        {/* Work Box */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="md:col-span-5 bg-emerald-500/5 border border-emerald-500/20 p-12 rounded-[3rem] relative group"
        >
          <h2 className="text-[10px] text-emerald-400 tracking-[0.5em] mb-10 uppercase italic font-black">02 / Experience</h2>
          {DATA.work.map((job, i) => (
            <div key={i}>
              <h3 className="text-3xl font-black text-white uppercase italic leading-none mb-2">{job.company}</h3>
              <p className="text-emerald-500 text-[10px] font-black tracking-widest mb-6 uppercase">{job.role} // {job.period}</p>
              <p className="text-slate-400 text-sm italic mb-6">"{job.desc}"</p>
            </div>
          ))}
        </motion.div>

        {/* Education & Projects */}
        <div className="md:col-span-5 bg-[#0a0a0c] border border-white/5 p-10 rounded-[3rem] space-y-10">
          <h2 className="text-[10px] text-slate-500 tracking-[0.5em] uppercase font-black">03 / Education</h2>
          {DATA.education.map((edu, i) => (
            <div key={i} className="border-l-2 border-white/10 pl-6 group hover:border-indigo-500 transition-colors">
              <h3 className="text-white font-black text-lg uppercase leading-tight">{edu.inst}</h3>
              <p className="text-indigo-400 text-[9px] font-black mt-1 uppercase tracking-widest">{edu.period} // {edu.detail}</p>
            </div>
          ))}
        </div>

        <div className="md:col-span-7 bg-[#0a0a0c] border border-white/5 p-10 rounded-[3rem] grid md:grid-cols-2 gap-8 shadow-2xl">
          <div className="md:col-span-2"><h2 className="text-[10px] text-indigo-400 tracking-[0.5em] uppercase font-black italic">04 / Projects</h2></div>
          {DATA.experience.map((exp, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:bg-indigo-500/20 transition-all">
              <h3 className="text-white font-black text-xl mb-2 uppercase italic">{exp.title}</h3>
              <p className="text-indigo-400 text-[9px] font-black uppercase tracking-widest">{exp.year}</p>
            </div>
          ))}
        </div>

        {/* Certifications (Magnetic Hover) */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {DATA.certifications.map((c) => (
            <motion.div 
              key={c.id} whileHover={{ y: -15, backgroundColor: "rgba(255,255,255,0.05)" }} onClick={() => setSelectedCert(c)}
              className="bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] cursor-pointer transition-all group"
            >
              <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500">{c.icon}</div>
              <h4 className="text-white font-black text-xl leading-none uppercase tracking-tighter mb-2">{c.name}</h4>
              <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest italic">{c.provider}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MODAL CERTIFICATE (ZOOM-SPRING EFFECT) --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.5, rotate: -5 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.5, rotate: 5 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-[#0a0a0c] border border-white/10 w-full max-w-5xl rounded-[4rem] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div className="bg-white/5 p-8 flex items-center justify-center shadow-inner">
                  <img src={selectedCert.image} className="w-full h-auto rounded-3xl shadow-2xl border border-white/10" alt="Cert" />
                </div>
                <div className="p-16 flex flex-col justify-center text-center md:text-left">
                  <span className="text-indigo-400 text-[10px] font-black tracking-[0.5em] mb-4 uppercase border-b border-indigo-500/30 pb-2">{selectedCert.cat}</span>
                  <h3 className="text-4xl md:text-5xl font-black text-white leading-[0.85] uppercase italic tracking-tighter mb-8">{selectedCert.name}</h3>
                  <button onClick={() => setSelectedCert(null)} className="py-6 bg-white text-black font-black rounded-3xl text-[10px] tracking-[0.5em] uppercase hover:bg-indigo-500 hover:text-white transition-all">CLOSE_WINDOW</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER (CONTACT HUB) --- */}
      <footer className="relative pt-64 pb-32 px-6 border-t border-white/5 bg-black z-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.button 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={() => { navigator.clipboard.writeText(DATA.profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            className="group relative px-16 py-10 bg-white text-black rounded-full font-black uppercase text-xs tracking-[0.6em] overflow-hidden transition-all duration-500 shadow-3xl shadow-white/5"
          >
            <span className="relative z-10">{copied ? 'COPIED_✅' : 'JRD353889@GMAIL.COM'}</span>
            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.button>
          
          <div className="flex gap-20 mt-24">
             <a href={DATA.profile.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#0077b5] transition-all text-[11px] font-black uppercase tracking-[0.6em] hover:tracking-[0.8em]">LinkedIn</a>
             <a href={DATA.profile.social.instagram} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#e4405f] transition-all text-[11px] font-black uppercase tracking-[0.6em] hover:tracking-[0.8em]">Instagram</a>
          </div>
        </div>
      </footer>

      {/* VISUALIZER BARS (BOTTOM) */}
      <div className="fixed bottom-0 w-full h-1 flex items-end gap-1 px-1 opacity-20 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div key={i} animate={{ height: [2, Math.random() * 50, 2] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.01 }} className="flex-1 bg-indigo-500" />
        ))}
      </div>
    </div>
  );
}