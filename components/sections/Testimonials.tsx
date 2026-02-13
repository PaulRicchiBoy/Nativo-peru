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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Client Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-300 dark:ring-gray-600">
                      <Image
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating Stars */}
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-6 h-6 fill-gray-900 dark:fill-white text-gray-900 dark:text-white" 
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                      "{language === 'es' ? testimonials[current].text : testimonials[current].textEn}"
                    </p>

                    {/* Client Info */}
                    <div>
                      <p className="font-bold text-xl text-gray-900 dark:text-white">
                        {testimonials[current].name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[current].country}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full w-12 h-12 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </Button>

              {/* Dots Navigation */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'bg-gray-900 dark:bg-white w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full w-12 h-12 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </Button>
            </div>
          </div>

          {/* View All Testimonials Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a 
              href="/testimonials" 
              className="inline-block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-gray-900 dark:hover:border-white pb-1"
            >
              {language === 'en' ? 'View All Testimonials' : 'Ver Todos los Testimonios'}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}