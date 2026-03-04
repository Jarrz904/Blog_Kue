"use client";
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { Heart, Coffee, Users, Star } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Resep Gratis', value: '500+', icon: <Star className="w-5 h-5" /> },
    { label: 'Pembaca Setia', value: '10k+', icon: <Users className="w-5 h-5" /> },
    { label: 'Dibuat dengan', value: 'Cinta', icon: <Heart className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION TENTANG --- */}
      <section className="relative pt-32 pb-20 px-6 bg-[#FFFBFA]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="text-orange-600 font-black uppercase text-xs tracking-[0.4em] mb-6 block">
              Di Balik Dapur
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight mb-8">
              Seni Dalam <br />
              <span className="text-orange-500 italic">Setiap Lapis.</span>
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed max-w-xl">
              DapurKueh bermula dari sebuah hobi di dapur kecil yang percaya bahwa kebahagiaan sejati dimulai dari aroma kue yang baru matang.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <Image 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" 
                  alt="Dapur Kami"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
                <Coffee className="text-orange-500 w-10 h-10 mb-4" />
                <p className="text-sm font-medium italic text-slate-400">
                  "Baking bukan hanya soal resep, <br /> tapi soal presisi dan hati."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- VISI & MISI --- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-black text-slate-900 mb-12">Misi Kami Sederhana.</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {stats.map((item, i) => (
                <div key={i} className="group">
                  <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">{item.value}</h3>
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-6 mb-20 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-10 text-center">Kenapa Memilih Kami?</h2>
            <div className="space-y-8 text-slate-400 text-lg leading-relaxed">
              <p>
                Kami menyadari banyaknya resep di internet yang seringkali membingungkan atau gagal saat dipraktikkan. Itulah mengapa di <span className="text-white font-bold">DapurKueh</span>, setiap resep telah melalui uji coba berkali-kali di dapur kami sendiri.
              </p>
              <p>
                Kami memberikan detail hingga ke suhu oven dan merk bahan, karena kami ingin Anda merasakan kesuksesan yang sama saat mengeluarkan loyang dari oven.
              </p>
            </div>
          </FadeIn>
        </div>
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-[100px]" />
      </section>
    </main>
  );
}