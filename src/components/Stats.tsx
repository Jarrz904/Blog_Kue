import { Utensils, Users, Award, Globe } from 'lucide-react'; // Pastikan sudah instal lucide-react

export default function Stats() {
  const stats = [
    { 
      label: 'Resep Gratis', 
      value: '500+', 
      description: 'Resep teruji dari koki profesional',
      icon: <Utensils className="w-6 h-6 text-orange-500" />
    },
    { 
      label: 'Pembaca Setia', 
      value: '10k+', 
      description: 'Komunitas pecinta kue aktif',
      icon: <Users className="w-6 h-6 text-orange-500" />
    },
    { 
      label: 'Koki Ahli', 
      value: '15', 
      description: 'Kontributor berpengalaman',
      icon: <Award className="w-6 h-6 text-orange-500" />
    },
    { 
      label: 'Rating Kepuasan', 
      value: '4.9/5', 
      description: 'Ulasan positif dari pembaca',
      icon: <Globe className="w-6 h-6 text-orange-500" />
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/30 border-y border-orange-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Komunitas DapurKueh dalam Angka</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-orange-50 hover:shadow-md hover:-translate-y-1 transition duration-300 group"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {/* Render icon manual jika tidak pakai Lucide React */}
                <div className="group-hover:filter group-hover:brightness-0 group-hover:invert">
                   {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-lg font-bold text-orange-600 mb-1">{stat.label}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}