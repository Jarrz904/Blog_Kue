"use client"
import { useState } from 'react';
import { recipes } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';
import CategoryFilter from '@/components/CategoryFilter';
// Baris import FadeIn dihapus karena tidak digunakan sesuai error linting

export default function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredRecipes = selectedCategory === 'Semua' 
    ? recipes 
    : recipes.filter((r) => r.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#FFFBFA] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Koleksi <span className="text-orange-600">Resep</span>
          </h1>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Temukan inspirasi kue terbaik dari kategori tradisional hingga modern yang telah kami kurasi.
          </p>
          <CategoryFilter 
            activeCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
        </header>

        {/* Container Grid dengan animasi transisi sederhana */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-500">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <RecipeCard recipe={recipe} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-lg">Belum ada resep untuk kategori ini.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}