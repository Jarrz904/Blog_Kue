export default function Newsletter() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold">Dapatkan Resep Baru Setiap Minggu</h2>
          <p className="mt-4 text-slate-400">Bergabunglah dengan 5.000+ pecinta kue lainnya secara gratis.</p>
          <form className="mt-8 flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Masukkan email Anda" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition">
              Langganan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}