// src/app/layout.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DapurKueh - Inspirasi Resep Kue Terbaik',
  description: 'Temukan resep kue tradisional dan modern terbaik di DapurKueh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#FFFBFA] text-slate-900 antialiased`}>
        {/* 1. Loading Screen (Pastikan komponen ini memiliki z-index tertinggi) */}
        <LoadingScreen /> 

        {/* 2. Wrapper Utama untuk Flexbox Layout */}
        <div className="flex flex-col min-h-screen">
          
          {/* Navbar di dalam wrapper agar konsisten dalam aliran dokumen */}
          <Navbar />
          
          {/* Main grow agar mendorong footer ke paling bawah */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer otomatis berada di bawah karena flex-grow pada main */}
          <Footer />
          
        </div>
      </body>
    </html>
  );
}