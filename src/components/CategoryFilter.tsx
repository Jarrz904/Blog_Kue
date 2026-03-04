"use client"

const categories = ['Semua', 'Tradisional', 'Modern', 'Roti', 'Kue Kering', 'Dessert', 'Cake'];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-6 py-3 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${
            activeCategory === cat
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-200 scale-105'
              : 'bg-transparent text-gray-400 hover:text-orange-500'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}