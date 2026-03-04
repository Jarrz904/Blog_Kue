import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types';
import { Clock, ChefHat, ArrowRight, Heart } from 'lucide-react';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  // Mapping warna berdasarkan kategori
  const categoryColors: Record<string, string> = {
    Tradisional: 'bg-amber-100 text-amber-700 border-amber-200',
    Modern: 'bg-blue-100 text-blue-700 border-blue-200',
    Roti: 'bg-orange-100 text-orange-700 border-orange-200',
    'Kue Kering': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Cake: 'bg-pink-100 text-pink-700 border-pink-200',
    Dessert: 'bg-purple-100 text-purple-700 border-purple-200',
  };

  // Fallback ke gray jika kategori tidak terdaftar
  const badgeStyle = categoryColors[recipe.category] || 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-100/60 transition-all duration-500 border border-gray-100 flex flex-col h-[550px]">
      
      {/* Container Gambar */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={recipe.image} 
          alt={`Foto masakan ${recipe.title}`} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          // Priority hanya jika resep merupakan featured untuk meningkatkan LCP
          priority={recipe.isFeatured}
        />
        
        {/* Overlay Badge & Save Button */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
          <span className={`${badgeStyle} backdrop-blur-md border px-4 py-1.5 rounded-2xl text-[10px] font-black tracking-widest uppercase shadow-sm`}>
            {recipe.category}
          </span>
          <button 
            aria-label="Simpan Resep"
            className="bg-white/90 backdrop-blur-md p-2.5 rounded-full text-gray-400 hover:text-red-500 transition-all hover:scale-110 shadow-md active:scale-95"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Soft Gradient Overlay agar teks di atas gambar (jika ada) terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Konten Bagian Bawah */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Info Meta */}
        <div className="flex items-center gap-5 text-gray-400 text-[11px] mb-4 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-500" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 text-orange-500" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        {/* Judul dengan Line Clamp agar rapi jika judul kepanjangan */}
        <h3 className="text-2xl font-black text-slate-800 leading-tight group-hover:text-orange-600 transition-colors duration-300 mb-3 line-clamp-2">
          {recipe.title}
        </h3>
        
        {/* Deskripsi */}
        <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6 italic">
        &quot;{recipe.description}&quot;</p>

        {/* Spacer untuk mendorong tombol ke bawah */}
        <div className="mt-auto">
          <Link 
            href={`/blog/${recipe.slug}`} 
            className="group/btn flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-orange-500 transition-all duration-300 border border-slate-100 hover:border-orange-400"
          >
            <span className="text-sm font-bold text-slate-700 group-hover:text-white transition-colors ml-2">
              Lihat Resep Lengkap
            </span>
            <div className="bg-white p-2 rounded-xl shadow-sm group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-orange-600" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}