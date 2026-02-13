"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, MapPin, Mountain, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Contenedor de imagen con proporciones preservadas */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="/heroNativo.jpg"
            alt="Peruvian landscapes and culture"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            style={{
              objectPosition: "center 35%",
            }}
          />
        </div>
      </motion.div>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent md:from-black/85 md:via-black/60 md:to-transparent" />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-600/50">
              <Compass className="w-4 h-4 text-gray-300 mr-2" />
              <span className="text-gray-300 text-sm font-medium">
                {t.hero.badgeText}
              </span>
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20"
          >
            {/* Botón Ver Tours - AHORA APUNTA A /tour (SINGULAR) */}
            <Link href="/tour" passHref>
              <Button
                size="lg"
                className="bg-emerald-700 hover:bg-emerald-600 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-emerald-500 font-semibold w-full sm:w-auto"
              >
                {t.hero.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            {/* Botón Our Philosophy */}
            <Button
              size="lg"
              variant="outline"
              className="bg-black text-white text-lg px-8 py-6 border-2 border-black hover:bg-neutral-800 hover:border-neutral-700 backdrop-blur-sm font-semibold w-full sm:w-auto"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === 'es' ? 'Nuestra Filosofía' : 'Our Philosophy'}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-emerald-900/40 p-3 rounded-lg border border-emerald-800/50">
                <Users className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <p className="text-white font-bold text-xl">{t.hero.stat1}</p>
                <p className="text-white/80 text-sm mt-1">{t.hero.stat1Desc}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-emerald-900/40 p-3 rounded-lg border border-emerald-800/50">
                <MapPin className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <p className="text-white font-bold text-xl">{t.hero.stat2}</p>
                <p className="text-white/80 text-sm mt-1">{t.hero.stat2Desc}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-emerald-900/40 p-3 rounded-lg border border-emerald-800/50">
                <Mountain className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <p className="text-white font-bold text-xl">{t.hero.stat3}</p>
                <p className="text-white/80 text-sm mt-1">{t.hero.stat3Desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowRight className="w-6 h-6 transform rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}