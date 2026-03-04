// src/app/kontak/page.tsx
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Hubungi <span className="text-orange-600">Kami</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Punya pertanyaan seputar resep atau ingin bekerja sama? Kami siap mendengarkan cerita manis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Info Kartu */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Email Kami</h3>
              <p className="text-sm text-gray-500">mfajarsidik64@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-500">+62 857 4112 9749</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Lokasi</h3>
              <p className="text-sm text-gray-500">Jakarta Selatan, Indonesia</p>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama Anda"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="email@contoh.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Pesan</label>
                <textarea 
                  rows={5}
                  placeholder="Apa yang bisa kami bantu?"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto bg-orange-600 hover:bg-slate-900 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-orange-200 hover:shadow-slate-300"
              >
                Kirim Pesan
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}