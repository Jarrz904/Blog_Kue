import Link from 'next/link';
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  // Samakan dengan kategori yang ada di data resep Anda
  const categories = [
    { name: 'Tradisional', slug: 'tradisional' },
    { name: 'Modern', slug: 'modern' },
    { name: 'Roti', slug: 'roti' },
    { name: 'Kue Kering', slug: 'kue-kering' },
    { name: 'Dessert', slug: 'dessert' },
  ];
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 px-6 text-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Kolom 1: Branding & Deskripsi */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-black text-white tracking-tighter">
            Dapur<span className="text-orange-500 italic">Kueh.</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Menyajikan kurasi resep kue terbaik dari seluruh penjuru dunia. Kami percaya setiap orang bisa menjadi baker handal di rumah sendiri.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Kolom 2: Kategori Terintegrasi ke /blog */}
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.3em]">Kategori Kue</h4>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href="/blog" className="text-slate-400 hover:text-orange-500 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Navigasi Cepat */}
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.3em]">Halaman Utama</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Beranda</Link></li>
            <li><Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors ">Semua Resep</Link></li>
            <li><Link href="/tentang" className="text-slate-400 hover:text-white text-sm transition-colors">Tentang Kami</Link></li>
            <li><Link href="/kontak" className="text-slate-400 hover:text-white text-sm transition-colors">Hubungi Koki</Link></li>
          </ul>
        </div>

        {/* Kolom 4: Newsletter Sederhana */}
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.3em]">Update Resep</h4>
          <p className="text-xs text-slate-500 mb-6 italic">Jangan lewatkan tips baking mingguan langsung ke email Anda.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email Anda" 
              className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm text-white w-full focus:ring-2 focus:ring-orange-500 outline-none" 
            />
          </div>
        </div>
      </div>

      {/* Baris Bawah */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-[10px] font-medium tracking-wider uppercase">
          &copy; {new Date().getFullYear()} DAPURKUEH STUDIO. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}