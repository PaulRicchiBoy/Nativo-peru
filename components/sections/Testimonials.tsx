"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { testimonials } from '@/lib/data';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Testimonials() {
  const { language, t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-stone-50 to-stone-100 dark:from-[#2C1A0F] dark:to-[#1F120A]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-200 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-[#2C1A0F] rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#C62828]/30 dark:ring-[#D32F2F]/30">
                      <Image
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-[#C62828] text-[#C62828] dark:fill-[#D32F2F] dark:text-[#D32F2F]" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 mb-6 leading-relaxed italic">
                      "{language === 'es' ? testimonials[current].text : testimonials[current].textEn}"
                    </p>

                    <div>
                      <p className="font-bold text-xl text-stone-800 dark:text-stone-200">
                        {testimonials[current].name}
                      </p>
                      <p className="text-stone-600 dark:text-stone-400">
                        {testimonials[current].country}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full w-12 h-12 border-2 border-[#C62828]/30 dark:border-[#D32F2F]/30 hover:bg-[#C62828]/10 dark:hover:bg-[#D32F2F]/10"
              >
                <ChevronLeft className="w-6 h-6 text-[#C62828] dark:text-[#D32F2F]" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'bg-[#C62828] dark:bg-[#D32F2F] w-8'
                        : 'bg-[#C62828]/20 dark:bg-[#D32F2F]/20 hover:bg-[#C62828]/40 dark:hover:bg-[#D32F2F]/40'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full w-12 h-12 border-2 border-[#C62828]/30 dark:border-[#D32F2F]/30 hover:bg-[#C62828]/10 dark:hover:bg-[#D32F2F]/10"
              >
                <ChevronRight className="w-6 h-6 text-[#C62828] dark:text-[#D32F2F]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
