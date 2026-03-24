import { useState, useEffect } from "react";
// Perhatikan titiknya ada dua (..), artinya keluar dari folder pages, lalu masuk ke assets
import fotoJoshua from '../assets/foto.PNG';

const skills = [
  "Web Development", "UI/UX Design", 
  "Networking", "Communication", 
];

const stats = [
  { label: "Semester", value: "2" },
  { label: "SKS", value: "20" },
  { label: "IPK", value: "3.88" },
];

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header / Hero */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[3px]">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src={fotoJoshua} 
                    alt="Foto Joshua Winner Naya" 
                    className="w-full h-full object-cover" 
                    />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-400 rounded-full border-4 border-slate-950" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 mb-3">
                Mahasiswa Aktif
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1 text-white">
                Joshua Winner Naya
              </h1>
              <p className="text-slate-400 text-sm mb-4 tracking-wide">
                @josswinaya
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[
                  {  text: "Teknologi Informasi" },
                  {  text: "Kelas T2D" },
                  {  text: "Malang, Jawa Timur" },
                ].map((tag) => (
                  <span
                    key={tag.text}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <span>{tag.icon}</span>
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex md:flex-col gap-4 md:gap-3">
              {stats.map((s) => (
                <div key={s.label} className="text-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 min-w-[70px]">
                  <div className="text-xl font-bold text-cyan-400">{s.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/10 mb-8 w-fit">
            {["about", "skills"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab === "about" ? "Tentang Diri" : "Keahlian"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {activeTab === "about" && (
            <div className="grid md:grid-cols-3 gap-6">
              {/* About Text */}
              <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full inline-block" />
                  Tentang Saya
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Halo! Perkenalkan, nama saya <span className="text-cyan-400 font-semibold">Joshua Winner Naya</span>,
                  seorang mahasiswa semester dua program studi Teknologi Informasi yang penuh semangat dan antusias
                  dalam dunia teknologi. Saya berdomisili di <span className="text-cyan-400 font-semibold">Malang, Jawa Timur</span>, kota yang dikenal dengan iklimnya yang
                  sejuk dan budaya pendidikannya yang kuat.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm mt-4">
                  Sejak SMA, saya sudah tertarik dengan dunia komputer dan teknologi informasi. Rasa ingin tahu
                  yang besar mendorong saya untuk terus belajar dan mengeksplorasi berbagai bidang dalam ilmu
                  komputer, mulai dari pemrograman web, desain antarmuka pengguna, hingga jaringan komputer.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm mt-4">
                 Dalam perjalanan akademis saya, saya menemukan ketertarikan pada dunia <span className="text-cyan-400 font-semibold">data dan AI</span>. Bagi saya, belajar AI bukan sekadar tentang algoritme, 
                 tapi tentang bagaimana teknologi ini bisa membantu masyarakat. Selain fokus di dunia teknologi, saya juga aktif di gym dan sedang
                 mendalami hobi baru di bidang editing. Saya percaya bahwa menjadi seorang teknokrat bukan berarti hanya berdiam di depan komputer, tapi juga tentang 
                 terus belajar dan mengembangkan diri di berbagai bidang. Semangat eksplorasi inilah yang mendorong saya untuk selalu ingin memberikan dampak positif, sekecil apapun itu.
                </p>
              </div>

              {/* Info Cards */}
              <div className="flex flex-col gap-4">
                {[
                  { label: "Nama Lengkap", value: "Joshua Winner Naya", icon: "👤" },
                  { label: "Kelas", value: "T2D", icon: "🏛️" },
                  { label: "Jurusan / Prodi", value: "Teknologi Informasi", icon: "💻" },
                  { label: "Domisili", value: "Malang, Jawa Timur", icon: "📍" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/8 transition-colors group"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
                      <div className="text-sm text-white font-medium mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full inline-block" />
                Keahlian & Kompetensi
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="px-4 py-3 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-sm text-slate-300 flex items-center gap-2 hover:border-cyan-500/40 hover:text-white transition-all group cursor-default"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={`mt-12 text-center text-slate-600 text-xs transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <p>© 2026 Joshua Winner Naya</p>
        </div>
      </div>
    </div>
  );
}