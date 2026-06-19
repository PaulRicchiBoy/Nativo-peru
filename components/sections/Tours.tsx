"use client";
import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Star, Clock, Users, Award, Phone, ArrowRight,
  Sun, Moon, Mountain, MapPin, TrendingUp, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getRoute } from '@/lib/routes';
import { tours } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Tours() {
  const { language } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === 'dark';

  const t = (es: string, en: string) => language === 'en' ? en : es;

  // Best of Season IDs
  const bestOfSeasonIds = ['parque-nacional-manu', 'bosque-nublado-kosnipata', 'paucartambo-tres-cruces'];

  const bestOfSeasonTours = useMemo(() => {
    return tours.filter(tour => bestOfSeasonIds.includes(tour.id));
  }, []);

  // Tours de Machu Picchu (excluyendo best of season)
  const machuPicchuTours = useMemo(() => {
    return tours.filter(tour =>
      !bestOfSeasonIds.includes(tour.id) && (
        tour.id.includes('machu-picchu') ||
        tour.title.toLowerCase().includes('machu picchu') ||
        tour.id === 'machu-picchu-express-2d1n' ||
        tour.id === 'machu-picchu-full-day' ||
        tour.id === 'machu-picchu-express-1d' ||
        tour.id === 'machu-picchu-sunset-sunrise-2d1n' ||
        tour.id === 'sacred-valley-machu-picchu-2d1n'
      )
    ).slice(0, 6); // Limitamos por si hay muchos
  }, []);

  // Tours de Cusco
  const cuscoTours = useMemo(() => {
    return tours.filter(tour =>
      !bestOfSeasonIds.includes(tour.id) &&
      !machuPicchuTours.some(t => t.id === tour.id) && (
        tour.id.includes('cusco') ||
        tour.id.includes('cuzco') ||
        tour.title.toLowerCase().includes('cusco') ||
        tour.id === 'city-tour-cusco' ||
        tour.id === 'sacred-valley-tour' ||
        tour.id === 'rainbow-mountain' ||
        tour.id === 'cusco-classic-combo-3d'
      )
    ).slice(0, 6);
  }, [machuPicchuTours]);

  // Tours de Trekking
  const trekkingTours = useMemo(() => {
    return tours.filter(tour =>
      !bestOfSeasonIds.includes(tour.id) &&
      !machuPicchuTours.some(t => t.id === tour.id) &&
      !cuscoTours.some(t => t.id === tour.id) && (
        tour.id.includes('trail') ||
        tour.id.includes('trek') ||
        tour.id.includes('salkantay') ||
        tour.difficulty === 'challenging' ||
        tour.title.toLowerCase().includes('trek')
      )
    ).slice(0, 6);
  }, [machuPicchuTours, cuscoTours]);

  const handleWhatsApp = (tourTitle: string) => {
    const phoneNumber = '5197237781';
    const message = language === 'es'
      ? `¡Hola! Estoy interesado en el tour: ${tourTitle}. ¿Podrían darme más información?`
      : `Hello! I'm interested in the tour: ${tourTitle}. Could you give me more information?`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const TourCard = ({ tour, index, featured = false }: { 
    tour: typeof tours[0]; 
    index: number; 
    featured?: boolean 
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`group relative bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden flex flex-col h-full hover:border-amber-500/50 transition-all duration-300 ${featured ? 'ring-2 ring-amber-400/30' : ''}`}
    >
      <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-0 group-hover:opacity-20 transition-all duration-700 blur-xl -z-10" />
      
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-amber-400">
          {tour.duration} {t('días', 'days')}
        </div>
        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> TOP
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {language === 'en' ? tour.titleEn : tour.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {language === 'en' ? tour.descriptionEn : tour.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-zinc-800 pt-5 mt-auto">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}d</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{tour.passengerType}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 flex items-center justify-between gap-3">
        <div>
          <span className="text-xs text-gray-500 dark:text-gray-400">Desde</span>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">S/ {tour.price}</div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => handleWhatsApp(language === 'es' ? tour.title : tour.titleEn)}
            className="bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-xl"
          >
            <Phone className="w-4 h-4" />
          </Button>
          <Link href={getRoute(tour.id)}>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 rounded-xl transition-all duration-300">
              {t('Ver', 'View')} <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  const SectionTitle = ({ icon: Icon, title, titleEn, highlight = false }: { 
    icon: any; 
    title: string; 
    titleEn: string; 
    highlight?: boolean 
  }) => (
    <div className="flex items-center gap-3 mb-8">
      <div className={`p-2 rounded-xl ${highlight ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-amber-500 to-orange-500'}`}>
        <Icon className={`w-6 h-6 ${highlight ? 'text-black' : 'text-black'}`} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {language === 'en' ? titleEn : title}
      </h2>
    </div>
  );

  const TourSlider = ({ 
    tours: tourList, 
    title, 
    titleEn, 
    icon, 
    categoryPath 
  }: { 
    tours: typeof tours; 
    title: string; 
    titleEn: string; 
    icon: any;
    categoryPath: string;
  }) => {
    const displayedTours = tourList.slice(0, 3);

    return (
      <div className="mb-16">
        <div className="flex items-end justify-between mb-8">
          <SectionTitle icon={icon} title={title} titleEn={titleEn} />
          
          {tourList.length > 3 && (
            <Link href={categoryPath}>
              <Button variant="outline" className="border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950 group">
                {t('Ver todos', 'View all')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
          )}
        </div>
        
        {displayedTours.length > 0 ? (
          <>
            {/* Slider en móvil */}
            <div className="block lg:hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="pb-12"
              >
                {displayedTours.map((tour, idx) => (
                  <SwiperSlide key={tour.id}>
                    <TourCard tour={tour} index={idx} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Grid en desktop - máximo 3 tarjetas */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {displayedTours.map((tour, idx) => (
                <TourCard key={tour.id} tour={tour} index={idx} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center py-12 text-gray-600 dark:text-gray-400">
            {t('Próximamente...', 'Coming soon...')}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-2.5 rounded-full text-sm font-bold tracking-widest mb-6">
              <Award className="w-5 h-5" />
              EXPERIENCES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t('Descubre Perú', 'Discover Peru')}
            </h1>
            <p className="text-xl mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              {t('Experiencias únicas en los destinos más impresionantes', 'Unique experiences in the most stunning destinations')}
            </p>
          </div>
          
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          )}
        </div>

        {/* ==================== BEST OF SEASON ==================== */}
        <div className="mb-20">
          <SectionTitle 
            icon={Sparkles} 
            title="Lo Mejor de la Temporada" 
            titleEn="Best of the Season" 
            highlight={true} 
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {bestOfSeasonTours.map((tour, idx) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                index={idx} 
                featured={true} 
              />
            ))}
          </div>
        </div>

        {/* ==================== OTRAS SECCIONES ==================== */}
        <TourSlider
          tours={machuPicchuTours}
          title="Machu Picchu"
          titleEn="Machu Picchu"
          icon={Mountain}
          categoryPath="/tour/machupicchu"
        />

        <TourSlider
          tours={cuscoTours}
          title="Cusco"
          titleEn="Cusco"
          icon={MapPin}
          categoryPath="/tour/cusco"
        />

        <TourSlider
          tours={trekkingTours}
          title="Trekking"
          titleEn="Trekking"
          icon={TrendingUp}
          categoryPath="/tour/trekking"
        />
      </div>
    </section>
  );
}