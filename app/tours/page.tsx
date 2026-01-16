'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ToursPage() {
  const { language, t } = useLanguage();


  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <div className="relative h-[400px] bg-gradient-to-r from-[#C62828] to-[#B71C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {t.tours.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            {t.tours.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={language === 'en' ? tour.titleEn : tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#C62828] text-white capitalize">
                      {tour.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-stone-800">
                    {language === 'en' ? tour.titleEn : tour.title}
                  </h3>
                  <p className="text-stone-600 mb-4 line-clamp-2">
                    {language === 'en' ? tour.descriptionEn : tour.description}
                  </p>

                  <div className="space-y-2 text-sm text-stone-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C62828]" />
                      <span>
                        {tour.duration} {tour.duration === 1 ? (language === 'en' ? 'day' : 'día') : (language === 'en' ? 'days' : 'días')}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#C62828]">
                        ${tour.price}
                      </span>
                      <span className="text-stone-500 text-sm">
                        / {language === 'en' ? 'per person' : 'por persona'}
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-gradient-to-r from-[#C62828] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#D32F2F] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Book Now' : 'Reservar Ahora'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t.contact.subtitle}
          </p>
          <Link href="/#contact">
            <Button size="lg" variant="secondary" className="bg-white text-[#C62828] hover:bg-stone-100">
              {t.nav.contact}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
