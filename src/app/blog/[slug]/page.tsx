import { recipes } from '@/data/recipes';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Recipe } from '@/types';
import { Clock, ChefHat, Utensils, ArrowLeft, Printer, Share2 } from 'lucide-react';
import Link from 'next/link';
import RecipeCard from '@/components/RecipeCard'; // Import komponen card kita

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Tunggu params (Standar Next.js terbaru)
  const { slug } = await params;
  const recipe = recipes.find((r: Recipe) => r.slug === slug);

  if (!recipe) notFound();

  // Ambil 3 resep lain sebagai rekomendasi
  const relatedRecipes = recipes
    .filter((r) => r.slug !== slug && r.category === recipe.category)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Header / Hero Resep */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <Image 
          src={recipe.image} 
          alt={recipe.title} 
          fill 
          className="object-cover transition-transform duration-1000 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
          <div className="max-w-6xl mx-auto w-full p-6 md:p-12 text-white">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-orange-400 transition-colors uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
            </Link>
            <div className="flex flex-col gap-4">
               <span className="w-fit bg-orange-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                {recipe.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-black leading-tight drop-shadow-lg">
                {recipe.title}
              </h1>
              <p className="max-w-2xl text-gray-200 italic text-lg line-clamp-2">
                "{recipe.description}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-16 mt-16">
        {/* Kolom Kiri: Detail, Bahan & Instruksi */}
        <div className="lg:col-span-2">
          
          {/* Status Bar */}
          <div className="grid grid-cols-3 gap-4 p-8 bg-slate-50 rounded-[2.5rem] mb-12 border border-slate-100">
            <div className="text-center border-r border-slate-200">
               <Clock className="w-6 h-6 mx-auto text-orange-500 mb-2" />
               <p className="text-[10px] text-gray-400 uppercase font-black">Waktu</p>
               <p className="font-bold text-slate-800">{recipe.prepTime}</p>
            </div>
            <div className="text-center border-r border-slate-200">
               <ChefHat className="w-6 h-6 mx-auto text-orange-500 mb-2" />
               <p className="text-[10px] text-gray-400 uppercase font-black">Level</p>
               <p className="font-bold text-slate-800">{recipe.difficulty}</p>
            </div>
            <div className="text-center">
               <Utensils className="w-6 h-6 mx-auto text-orange-500 mb-2" />
               <p className="text-[10px] text-gray-400 uppercase font-black">Porsi</p>
               <p className="font-bold text-slate-800">8-10 Potong</p>
            </div>
          </div>

          {/* Bahan-bahan */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Bahan Utama</h2>
                <button className="flex items-center gap-2 text-xs font-bold text-orange-600 hover:underline">
                    <Printer className="w-4 h-4" /> Cetak Resep
                </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {recipe.ingredients.map((item: string, i: number) => (
                <label key={i} className="group flex items-center gap-4 p-5 border border-slate-100 rounded-3xl hover:border-orange-200 hover:bg-orange-50/30 cursor-pointer transition-all">
                  <input type="checkbox" className="w-6 h-6 accent-orange-500 rounded-lg border-slate-300 transition-all" />
                  <span className="text-slate-700 font-medium group-hover:text-slate-900">{item}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Instruksi */}
          <section className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Cara Membuat</h2>
            <div className="space-y-12">
              {recipe.instructions.map((step: string, i: number) => (
                <div key={i} className="relative flex gap-8">
                  <div className="flex-none">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-black text-xl shadow-xl shadow-orange-200 italic">
                      {i + 1}
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-slate-700 leading-relaxed text-lg font-medium">
                      {step}
                    </p>
                  </div>
                  {/* Garis penghubung antar langkah */}
                  {i !== recipe.instructions.length - 1 && (
                      <div className="absolute top-14 left-6 w-[2px] h-full bg-slate-100 -translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Kolom Kanan: Sidebar */}
        <div className="lg:col-span-1">
          <aside className="sticky top-28 space-y-8">
            {/* Kartu Tips */}
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2 italic">
                Tips Koki <span className="not-italic">👨‍🍳</span>
              </h3>
              <p className="text-slate-400 leading-relaxed italic text-lg">
                "Kunci utama keberhasilan kue ini adalah kesabaran. Pastikan semua bahan berada di suhu ruang sebelum mulai mencampur adonan."
              </p>
            </div>
            
            {/* Share Section */}
            <div className="p-10 border-2 border-slate-50 rounded-[3rem] bg-white shadow-sm text-center">
              <h3 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Bagikan Ke Teman</h3>
              <div className="grid grid-cols-2 gap-3">
                {['WhatsApp', 'Instagram', 'Facebook', 'Salin Link'].map((social) => (
                  <button key={social} className="py-4 px-2 border border-slate-100 rounded-2xl text-[10px] font-black uppercase hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 tracking-tighter">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Section: Resep Serupa */}
      {relatedRecipes.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-24 pt-24 border-t border-slate-100">
            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Mungkin Anda <span className="text-orange-600 text-italic">Suka Ini</span> Juga</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {relatedRecipes.map((r) => (
                    <RecipeCard key={r.id} recipe={r} />
                ))}
            </div>
        </section>
      )}
    </article>
  );
}