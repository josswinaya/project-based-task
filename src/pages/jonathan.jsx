import { useState } from "react";
import fotoSaya from "../assets/foto.jpeg";

const profile = {
  namaLengkap: "Jonathan Winner Naya",
  domisili: "Malang, Jawa Timur, Indonesia",
  fotoProfil: fotoSaya,
  tagline: "Halaman Profil",
  subTagline: "Tugas sub-task",
  t2d: "T2D",
  prodi: "Teknologi Informasi",
  tentangDiri: `Saya adalah mahasiswa aktif jurusan Teknologi Informasi yang memiliki passion mendalam di bidang Web Development. Sejak awal perkuliahan, saya banyak belajar mengenai java, PHP, JavaScript, dan beberapa framework lainnya. Saya juga konsisten mengembangkan kemampuan dalam pembuatan aplikasi berbasis web dengan memanfaatkan teknologi modern seperti React, Node.js, dan berbagai framework terkini. Saya percaya bahwa teknologi adalah alat paling powerful untuk menciptakan dampak nyata di masyarakat. Dengan latar belakang akademis yang kuat dan pengalaman kolaborasi dalam tim lintas disiplin, saya terus berupaya menjadi software engineer yang tidak hanya andal secara teknis, tetapi juga mampu memahami kebutuhan bisnis dan pengguna secara menyeluruh. Inovasi dan semangat belajar tanpa henti adalah dua hal yang selalu saya pegang teguh dalam perjalanan karier saya.`,
};
 
function InfoBadge({ label, value, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-300 flex-1 min-w-[120px] min-h-[100px]">
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest">{label}</span>
      <span className="text-sm font-bold text-amber-700 text-center leading-snug">{value}</span>
    </div>
  );
}
 
export default function ProfilePage() {
  // (lihat selengkapnya / sembunyikan)
  const [showFull, setShowFull] = useState(false);
 
  // Memotong teks jika belum di-expand
  const shortBio = profile.tentangDiri.slice(0, 220) + "...";
 
  return (
    // warna backgroud
    <div className="min-h-screen bg-white-900 flex items-center justify-center p-4 sm:p-8 font-sans">
 
      {/* === Card utama profil === */}
      <div className="w-full bg-white shadow-2xl overflow-hidden">

        <div
          className="relative h-36 sm:h-44 flex flex-col items-end justify-center px-8"
          style={{ backgroundColor: "#7c5c2e" }} 
        >

          <p className="text-white/90 font-bold text-xl sm:text-2xl tracking-wide drop-shadow">
            {profile.tagline}
          </p>
          <p className="text-amber-200 text-sm sm:text-base italic">{profile.subTagline}</p>

          <div className="absolute left-0 top-0 w-40 h-40 rounded-full bg-white/5 -translate-x-10 -translate-y-10 pointer-events-none" />
          <div className="absolute left-24 bottom-0 w-24 h-24 rounded-full bg-amber-300/10 translate-y-8 pointer-events-none" />
        </div>
 
        {/* --- Foto profil yang sedikit overlap ke banner --- */}
        <div className="relative px-6 sm:px-8">
          <div className="absolute -top-20 left-6 sm:left-8">
            {/* Foto profil bulat dengan border putih dan shadow */}
            <img
              src={profile.fotoProfil}
              alt={`Foto profil ${profile.namaLengkap}`}
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          <div className="pt-20 pb-2">
            {/* Nama lengkap */}
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                {profile.namaLengkap}
              </h1>
            </div>

            {/* Domisili dengan ikon lokasi */}
            <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
              <span>📍</span>
              {profile.domisili}
            </p>
          </div>
        </div>
 
        {/* Garis pemisah */}
        <hr className="border-gray-100 mx-6 sm:mx-8" />
 
        {/* Tiga badge info: */}
        <div className="flex flex-wrap gap-3 px-6 sm:px-8 py-5">
          <InfoBadge label="T2D"  />
          <InfoBadge label="Teknologi Informasi"   />
          <InfoBadge label="Kota Malang"  />
        </div>
 
        {/* Garis pemisah*/}
        <hr className="border-gray-100 mx-6 sm:mx-8" />
 
        {/*  Tentang Diri  */}
        <div className="px-6 sm:px-8 py-6">
          {/* Judul Tentang Diri */}
          <h2 className="text-lg font-bold text-gray-900 mb-3">Tentang Diri</h2>
 
          {/* Teks bio — toggle antara ringkas dan lengkap */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {showFull ? profile.tentangDiri : shortBio}
          </p>
 
          {/* Tombol toggle lihat selengkapnya */}
          <button
            onClick={() => setShowFull(!showFull)}
            className="mt-3 text-amber-700 hover:text-amber-900 font-semibold text-sm transition-colors duration-200"
            aria-label="Toggle deskripsi diri"
          >
            {showFull ? "...sembunyikan" : "...lihat selengkapnya"}
          </button>
        </div>
 
        {/* Footer card */}
        <div className="bg-amber-50 border-t border-amber-100 px-6 sm:px-8 py-3 text-center">
          <p className="text-xs text-amber-400 tracking-widest uppercase">
            Page Profile · Dibuat Dengan React & Tailwind CSS
          </p>
        </div>
 
      </div>
    </div>
  );
}