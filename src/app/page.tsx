import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import RecipeCard from '@/components/RecipeCard';
import Newsletter from '@/components/Newsletter';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types';

export default function Home() {
  const featuredRecipes = recipes.filter((r: Recipe) => r.isFeatured);

  return (
    <main className="bg-white">
      <Hero />
      <Stats />
      
      {/* Featured Recipes Section */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Resep Terpopuler</h2>
            <p className="text-gray-500 mt-2">Pilihan terbaik untuk camilan keluarga Anda.</p>
          </div>
          <button className="text-orange-600 font-bold hover:underline">Lihat Semua →</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredRecipes.map((recipe: Recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}