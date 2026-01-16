"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  const { t } = useLanguage();

  const scrollToTours = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076"
          alt="Machu Picchu"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/60 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              size="lg"
              onClick={scrollToTours}
              className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#D32F2F] text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {t.hero.ctaButton}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
          >
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="bg-[#C62828]/20 p-3 rounded-lg">
                <Users className="w-6 h-6 text-[#D32F2F]" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">{t.hero.stat1}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="bg-[#C62828]/20 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-[#D32F2F]" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">{t.hero.stat2}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="bg-[#C62828]/20 p-3 rounded-lg">
                <Award className="w-6 h-6 text-[#D32F2F]" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">{t.hero.stat3}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
