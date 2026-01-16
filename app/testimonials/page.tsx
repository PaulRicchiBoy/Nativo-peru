'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TestimonialsPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <div className="relative h-[400px] bg-gradient-to-r from-[#C62828] to-[#B71C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {t.testimonials.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#C62828]/30">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Avatar className="w-16 h-16 border-2 border-[#C62828]/30">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-[#C62828]/10 text-[#C62828] text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-stone-800">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-2 text-stone-600 text-sm mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{testimonial.country}</span>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-[#C62828]/20" />
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#C62828] text-[#C62828]"
                        />
                      ))}
                    </div>

                    <p className="text-stone-700 leading-relaxed">
                      {language === 'en' ? testimonial.textEn : testimonial.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#C62828]/10 to-[#B71C1C]/10 border-2 border-[#C62828]/30">
            <CardContent className="p-12">
              <Star className="w-16 h-16 mx-auto mb-6 text-[#C62828] fill-[#C62828]" />
              <h2 className="text-3xl font-bold text-stone-800 mb-4">
                {language === 'en' ? 'Share Your Experience' : 'Comparte tu Experiencia'}
              </h2>
              <p className="text-stone-600 mb-6">
                {language === 'en' ? 'Help others discover the magic of Peru' : 'Ayuda a otros a descubrir la magia del Perú'}
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#D32F2F] text-white">
                  {t.nav.contact}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready for Your Adventure?' : '¿Listo para tu Aventura?'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'en' ? 'Explore our amazing tours' : 'Explora nuestros increíbles tours'}
          </p>
          <Link href="/tours">
            <Button size="lg" variant="secondary" className="bg-white text-[#C62828] hover:bg-stone-100">
              {t.nav.tours}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
