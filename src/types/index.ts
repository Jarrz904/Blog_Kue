export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  prepTime: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  image: string;
  ingredients: string[]; // Pastikan ini array string
  instructions: string[]; // Pastikan ini array string
  isFeatured: boolean;
}