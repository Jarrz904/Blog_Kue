// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600 hover:scale-105 transition-transform">
          Dapur<span className="text-slate-800">Kueh</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-600">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-orange-500 transition-colors">Semua Resep</Link>
          <Link href="/tentang" className="hover:text-orange-500 transition-colors">Tentang Kami</Link>
          <Link href="/kontak" className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition-all shadow-md shadow-orange-200">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}