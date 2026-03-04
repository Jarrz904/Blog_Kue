"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900"
        >
          {/* Elemen 3D Spinner */}
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 border-t-4 border-orange-500 border-r-4 border-r-transparent rounded-full"
            />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, yoyo: Infinity }}
              className="absolute inset-0 flex items-center justify-center text-4xl"
            >
              🍰
            </motion.div>
          </div>

          {/* Teks Animasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h2 className="text-white font-black tracking-[0.3em] uppercase text-sm">
              Dapur<span className="text-orange-500">Kueh</span>
            </h2>
            <div className="mt-2 h-[2px] w-48 bg-slate-800 overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-orange-500"
              />
            </div>
            <p className="mt-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest italic">
              Menyiapkan oven digital...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}