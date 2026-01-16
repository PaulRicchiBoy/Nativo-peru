"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import { Clock, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Tours() {
  const { language, t } = useLanguage();

  const getDifficultyText = (difficulty: string) => {
    const map: { [key: string]: string } = {
      easy: t.tours.easy,
      moderate: t.tours.moderate,
      challenging: t.tours.challenging
    };
    return map[difficulty] || difficulty;
  };

  const getDifficultyColor = (difficulty: string) => {
    const map: { [key: string]: string } = {
      easy: 'text-[#C62828] dark:text-[#D32F2F] bg-[#C62828]/10 dark:bg-[#C62828]/20',
      moderate: 'text-[#B71C1C] dark:text-[#C62828] bg-[#B71C1C]/10 dark:bg-[#B71C1C]/20',
      challenging: 'text-red-700 dark:text-red-500 bg-red-50 dark:bg-red-900/20'
    };
    return map[difficulty] || 'text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800';
  };

  return (
    <section id="tours" className="py-20 bg-gradient-to-br from-stone-50 to-stone-100 dark:from-[#1F120A] dark:to-[#2C1A0F]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-200 mb-4">
            {t.tours.title}
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            {t.tours.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#2C1A0F] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={language === 'es' ? tour.title : tour.titleEn}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(tour.difficulty)}`}>
                    {getDifficultyText(tour.difficulty)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-200 mb-3">
                  {language === 'es' ? tour.title : tour.titleEn}
                </h3>

                <p className="text-stone-600 dark:text-stone-400 mb-4 text-sm line-clamp-2">
                  {language === 'es' ? tour.description : tour.descriptionEn}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-stone-600 dark:text-stone-400 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-[#C62828] dark:text-[#D32F2F]" />
                    <span>{tour.duration} {tour.duration === 1 ? t.tours.day : t.tours.days}</span>
                  </div>
                  <div className="flex items-center text-stone-600 dark:text-stone-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#B71C1C] dark:text-[#C62828]" />
                    <span>{getDifficultyText(tour.difficulty)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-[#2C1A0F]">
                  <div>
                    <p className="text-xs text-stone-500 dark:text-stone-400">{t.tours.from}</p>
                    <p className="text-2xl font-bold text-[#C62828] dark:text-[#D32F2F]">
                      ${tour.price}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">{t.tours.perPerson}</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#D32F2F] text-white"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t.tours.viewDetails}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
