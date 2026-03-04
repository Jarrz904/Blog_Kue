"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FFFBFA] px-6 py-20">
      {/* --- BACKGROUND ELEMENTS (EFEK 3D & DEPTH) --- */}
      <div className="absolute inset-0 z-0">
        {/* Lingkaran Gradient Lembut */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-100/40 rounded-full blur-[120px]" />
        
        {/* Elemen Dekoratif Mengapung (3D Effect) */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] hidden md:block"
        >
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl shadow-orange-200/50 border border-white flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-lg text-white">🍰</div>
            <div className="text-left font-bold text-xs text-slate-800">Resep Baru<br/><span className="text-[10px] text-gray-400 font-medium italic">Lapis Legit Premium</span></div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] left-[10%] hidden md:block"
        >
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl shadow-orange-200/50 border border-white flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-lg text-white">⭐</div>
            <div className="text-left font-bold text-xs text-slate-800">Rating 4.9<br/><span className="text-[10px] text-gray-400 font-medium italic">10rb+ Pembaca</span></div>
          </div>
        </motion.div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-sm border border-orange-200">
            <Sparkles className="w-3 h-3" /> Oven Fresh Recipes
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Rahasia <span className="relative">
              <span className="relative z-10 text-orange-600 italic">Kue Lezat</span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-orange-200 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 10 Q 50 0 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span> <br /> 
            Dari Dapur Rumah
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Temukan kurasi resep kue pilihan dengan panduan langkah-demi-langkah yang presisi untuk hasil sempurna setiap saat.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/blog" 
              className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden shadow-2xl transition-all hover:bg-orange-600"
            >
              <span className="relative z-10 flex items-center gap-2">
                Mulai Baking <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/tentang" 
              className="flex items-center gap-3 text-slate-900 font-black text-sm uppercase tracking-widest hover:text-orange-600 transition-colors"
            >
              <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 group-hover:rotate-12 transition-transform">
                <UtensilsCrossed className="w-5 h-5 text-orange-500" />
              </div>
              Tentang Kami
            </Link>
          </div>
        </motion.div>
      </div>

      {/* --- BOTTOM DECORATION --- */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}