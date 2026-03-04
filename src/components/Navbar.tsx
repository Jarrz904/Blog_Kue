"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Fungsi pembantu untuk mengecek apakah link sedang aktif
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600 hover:scale-105 transition-transform">
          Dapur<span className="text-slate-800">Kueh</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-bold items-center">
          <Link 
            href="/" 
            className={`${
              isActive('/') ? 'text-orange-500' : 'text-slate-600'
            } hover:text-orange-500 transition-colors`}
          >
            Home
          </Link>

          <Link 
            href="/blog" 
            className={`${
              isActive('/blog') ? 'text-orange-500' : 'text-slate-600'
            } hover:text-orange-500 transition-colors`}
          >
            Semua Resep
          </Link>

          <Link 
            href="/tentang" 
            className={`${
              isActive('/tentang') ? 'text-orange-500' : 'text-slate-600'
            } hover:text-orange-500 transition-colors`}
          >
            Tentang Kami
          </Link>

          <Link 
            href="/kontak" 
            className={`px-5 py-2 rounded-full transition-all shadow-md ${
              isActive('/kontak') 
                ? 'bg-orange-700 text-white shadow-orange-300' 
                : 'bg-orange-600 text-white hover:bg-orange-700 shadow-orange-200'
            }`}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}