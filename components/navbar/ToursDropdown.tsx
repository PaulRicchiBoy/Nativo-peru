"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mountain, Compass, Waves, TreePine, ArrowRight, Clock, Star, Users } from 'lucide-react';
import Image from 'next/image';

interface ToursDropdownProps {
  onClose: () => void;
}

export function ToursDropdown({ onClose }: ToursDropdownProps) {
  const { language, t } = useLanguage();

  const tours = [
    {
      icon: Mountain,
      title: t.nav.toursMenu.machu,
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=400',
      price: '$180',
      duration: '1 día',
      rating: 5.0,
      color: 'from-[#C62828] to-[#B71C1C]',
      badge: 'Popular'
    },
    {
      icon: Compass,
      title: t.nav.toursMenu.rainbow,
      image: 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?q=80&w=400',
      price: '$85',
      duration: '1 día',
      rating: 4.9,
      color: 'from-[#B71C1C] to-[#D32F2F]',
      badge: 'Aventura'
    },
    {
      icon: Waves,
      title: t.nav.toursMenu.humantay,
      image: 'https://images.unsplash.com/photo-1583338982726-44a6c5d644c2?q=80&w=400',
      price: '$75',
      duration: '1 día',
      rating: 4.8,
      color: 'from-[#C62828] to-[#D32F2F]',
      badge: 'Naturaleza'
    },
    {
      icon: TreePine,
      title: t.nav.toursMenu.valley,
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=400',
      price: '$95',
      duration: '1 día',
      rating: 4.9,
      color: 'from-[#B71C1C] to-[#C62828]',
      badge: 'Cultural'
    }
  ];

  const categories = [
    { name: t.nav.toursMenu.categories.adventure, icon: '🏔️', count: '12 tours' },
    { name: t.nav.toursMenu.categories.cultural, icon: '🏛️', count: '8 tours' },
    { name: t.nav.toursMenu.categories.nature, icon: '🌿', count: '15 tours' }
  ];

  const scrollToTours = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[900px] bg-white dark:bg-[#1F120A] rounded-2xl shadow-2xl border border-stone-200 dark:border-[#2C1A0F] overflow-hidden"
    >
      <div className="grid grid-cols-3 divide-x divide-stone-200 dark:divide-[#2C1A0F]">
        <div className="col-span-2 p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider flex items-center">
              <Mountain className="w-4 h-4 mr-2 text-[#C62828]" />
              {t.nav.toursMenu.title}
            </h3>
            <span className="text-xs text-stone-500 dark:text-stone-400 bg-[#C62828]/10 dark:bg-[#C62828]/20 px-3 py-1 rounded-full">
              50+ destinos
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {tours.map((tour, index) => {
              const Icon = tour.icon;
              return (
                <motion.button
                  key={index}
                  onClick={scrollToTours}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex flex-col p-0 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 text-left group bg-white dark:bg-[#2C1A0F] border border-stone-200 dark:border-[#2C1A0F] hover:border-[#C62828]/50"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-2 right-2">
                      <span className="text-xs font-bold bg-white/95 dark:bg-[#1F120A]/95 text-stone-800 dark:text-stone-200 px-2 py-1 rounded-full shadow-md">
                        {tour.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-[#C62828] text-[#C62828]" />
                      <span className="text-xs font-bold text-white">{tour.rating}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-stone-800 dark:text-stone-200 text-sm mb-2 group-hover:text-[#C62828] transition-colors line-clamp-1">
                      {tour.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-stone-500 dark:text-stone-400">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{tour.duration}</span>
                      </div>
                      <p className="text-sm">
                        <span className="text-xs text-stone-500 dark:text-stone-400">Desde</span>
                        <span className="font-bold text-[#C62828] ml-1">{tour.price}</span>
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-stone-50 via-white to-stone-50/30 dark:from-[#2C1A0F] dark:via-[#1F120A] dark:to-[#2C1A0F]/50">
          <h3 className="text-sm font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-6">
            Categorías
          </h3>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={scrollToTours}
                whileHover={{ x: 4 }}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-white dark:hover:bg-[#2C1A0F] hover:shadow-md transition-all duration-200 text-left group border border-transparent hover:border-[#C62828]/30"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-stone-800 dark:text-stone-200 group-hover:text-[#C62828] transition-colors">
                      {category.name}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">{category.count}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-[#C62828] opacity-0 group-hover:opacity-100 transition-all" />
              </motion.button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-xl text-white">
            <div className="flex items-center justify-between mb-3">
              <Users className="w-5 h-5" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Especial</span>
            </div>
            <p className="text-sm font-semibold mb-1">Grupos Privados</p>
            <p className="text-xs text-red-100 mb-4">Tours personalizados para tu familia</p>
            <button
              onClick={scrollToTours}
              className="w-full bg-white text-[#C62828] px-4 py-2 rounded-lg text-xs font-bold hover:bg-stone-100 transition-colors"
            >
              Cotizar Ahora
            </button>
          </div>

          <button
            onClick={scrollToTours}
            className="w-full mt-4 flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#C62828] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#D32F2F] text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>{t.nav.toursMenu.allTours}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
