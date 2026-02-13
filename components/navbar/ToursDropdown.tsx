"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mountain, Compass, Waves, TreePine, ArrowRight, Clock, Star, Calendar, Castle, Plane, Map, Building, Hotel, TrendingUp, Globe } from 'lucide-react';
import Link from 'next/link';
import { tours } from '@/lib/data';

interface ToursDropdownProps {
  onClose: () => void;
}

export function ToursDropdown({ onClose }: ToursDropdownProps) {
  const { language } = useLanguage();

  // Función para determinar el icono según el tipo de tour
  const getTourIcon = (tourId: string) => {
    if (tourId.includes('machu') || tourId.includes('inca')) return Mountain;
    if (tourId.includes('lima')) return Building;
    if (tourId.includes('bolivia')) return Globe;
    if (tourId.includes('aventura') || tourId.includes('completo')) return TrendingUp;
    if (tourId.includes('valle')) return TreePine;
    if (tourId.includes('montaña') || tourId.includes('colores')) return Compass;
    if (tourId.includes('humantay') || tourId.includes('laguna')) return Waves;
    if (tourId.includes('cusco')) return Castle;
    return Mountain;
  };

  // Función para determinar la categoría del tour
  const getTourCategory = (tour: any) => {
    if (tour.id.includes('lima') || tour.id.includes('cusco')) return 'Cultural';
    if (tour.id.includes('bolivia') || tour.duration > 10) return 'Multi-Day';
    if (tour.id.includes('aventura') || tour.id.includes('completo')) return 'Adventure';
    return 'Cultural';
  };

  // Función para determinar el badge
  const getTourBadge = (tour: any) => {
    if (tour.duration <= 3) return 'Short';
    if (tour.duration <= 7) return 'Popular';
    if (tour.duration <= 10) return 'Premium';
    return 'Exclusive';
  };

  // Función para obtener hotelCategory de forma segura
  const getHotelCategory = (tour: any) => {
    return tour.hotelCategory || 'Standard';
  };

  // Filtrar tours por duración para diferentes secciones
  const shortTours = tours.filter(tour => tour.duration <= 3);
  const multiDayTours = tours.filter(tour => tour.duration > 3 && tour.duration <= 7);
  const premiumTours = tours.filter(tour => tour.duration > 7);

  // Tomar solo 2 tours de cada categoría para mostrar
  const featuredShortTours = shortTours.slice(0, 2);
  const featuredMultiDayTours = multiDayTours.slice(0, 2);
  const featuredPremiumTours = premiumTours.slice(0, 2);

  // Estadísticas dinámicas basadas en los tours reales
  const tourStats = {
    totalTours: tours.length,
    totalDays: tours.reduce((acc, tour) => acc + tour.duration, 0),
    averagePrice: Math.round(tours.reduce((acc, tour) => acc + tour.price, 0) / tours.length),
    adventureCount: tours.filter(t => 
      t.id.includes('aventura') || 
      t.difficulty === 'moderate' || 
      t.difficulty === 'challenging'
    ).length,
    culturalCount: tours.filter(t => 
      t.id.includes('lima') || 
      t.id.includes('cusco') || 
      (t.hotelCategory && t.hotelCategory.includes('★'))
    ).length,
  };

  // Categorías dinámicas basadas en los tours reales
  const categories = [
    { 
      name: language === 'en' ? 'Adventure Tours' : 'Tours de Aventura', 
      icon: '🏔️', 
      count: `${tourStats.adventureCount} tours`,
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      slug: 'adventure'
    },
    { 
      name: language === 'en' ? 'Cultural Tours' : 'Tours Culturales', 
      icon: '🏛️', 
      count: `${tourStats.culturalCount} tours`,
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      slug: 'cultural'
    },
    { 
      name: language === 'en' ? 'Multi-Day Tours' : 'Tours Multi-Día', 
      icon: '📦', 
      count: `${multiDayTours.length + premiumTours.length} packages`,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      slug: 'multi-day'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl shadow-black/20 dark:shadow-black/40 border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
    >
      <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-800">
        {/* Columna 1: Tours Cortos (1-3 días) */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-500" />
                {language === 'en' ? 'Short Tours' : 'Tours Cortos'}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {language === 'en' 
                  ? '1-3 days experiences' 
                  : 'Experiencias de 1-3 días'}
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1.5 rounded-full">
              {shortTours.length} {language === 'en' ? 'tours' : 'tours'}
            </span>
          </div>
          
          <div className="space-y-3">
            {featuredShortTours.length > 0 ? (
              featuredShortTours.map((tour) => {
                const Icon = getTourIcon(tour.id);
                const category = getTourCategory(tour);
                const badge = getTourBadge(tour);
                
                return (
                  <motion.div
                    key={tour.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    <Link href={`/tours/${tour.id}`} onClick={onClose}>
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-emerald-300 dark:hover:border-emerald-700">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                              {language === 'en' ? tour.titleEn : tour.title}
                            </h4>
                            <span className="text-xs font-medium px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded">
                              {badge}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <span>{tour.duration} {language === 'en' ? 'days' : 'días'}</span>
                              <span>•</span>
                              <span>{category}</span>
                            </div>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">
                              ${tour.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                {language === 'en' ? 'No short tours available' : 'No hay tours cortos disponibles'}
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <Link href="/tours?duration=short" onClick={onClose}>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span>{language === 'en' ? 'View All Short Tours' : 'Ver Todos los Tours Cortos'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Columna 2: Paquetes Multi-Día (4-7 días) */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Map className="w-5 h-5 text-amber-500" />
                {language === 'en' ? 'Multi-Day Tours' : 'Tours Multi-Día'}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {language === 'en' 
                  ? '4-7 days complete experiences' 
                  : 'Experiencias completas de 4-7 días'}
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1.5 rounded-full">
              {multiDayTours.length} {language === 'en' ? 'packages' : 'paquetes'}
            </span>
          </div>
          
          <div className="space-y-3">
            {featuredMultiDayTours.length > 0 ? (
              featuredMultiDayTours.map((tour) => {
                const Icon = getTourIcon(tour.id);
                const category = getTourCategory(tour);
                const badge = getTourBadge(tour);
                
                return (
                  <motion.div
                    key={tour.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    <Link href={`/tours/${tour.id}`} onClick={onClose}>
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-amber-300 dark:hover:border-amber-700">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                              {language === 'en' ? tour.titleEn : tour.title}
                            </h4>
                            <span className="text-xs font-medium px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded">
                              {badge}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <span>{tour.duration} {language === 'en' ? 'days' : 'días'}</span>
                              <span>•</span>
                              <span>{category}</span>
                            </div>
                            <span className="font-bold text-amber-600 dark:text-amber-400">
                              ${tour.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                {language === 'en' ? 'No multi-day tours available' : 'No hay tours multi-día disponibles'}
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <Link href="/tours?duration=multi-day" onClick={onClose}>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Plane className="w-4 h-4" />
                <span>{language === 'en' ? 'All Multi-Day Tours' : 'Todos los Tours Multi-Día'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Columna 3: Paquetes Premium y Categorías */}
        <div className="p-6">
          <div className="h-full flex flex-col">
            <div className="flex-1">
              {/* Paquetes Premium (8+ días) */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-500" />
                      {language === 'en' ? 'Premium Packages' : 'Paquetes Premium'}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {language === 'en' 
                        ? '8+ days complete journeys' 
                        : 'Viajes completos de 8+ días'}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 rounded-full">
                    {premiumTours.length} {language === 'en' ? 'premium' : 'premium'}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {featuredPremiumTours.length > 0 ? (
                    featuredPremiumTours.map((tour) => {
                      const Icon = getTourIcon(tour.id);
                      const badge = getTourBadge(tour);
                      const hotelCategory = getHotelCategory(tour);
                      
                      return (
                        <motion.div
                          key={tour.id}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative group"
                        >
                          <Link href={`/tours/${tour.id}`} onClick={onClose}>
                            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-purple-300 dark:hover:border-purple-700">
                              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                                    {language === 'en' ? tour.titleEn : tour.title}
                                  </h4>
                                  <span className="text-xs font-medium px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded">
                                    {badge}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center gap-2">
                                    <span>{tour.duration} {language === 'en' ? 'days' : 'días'}</span>
                                    <span>•</span>
                                    <span>{hotelCategory}</span>
                                  </div>
                                  <span className="font-bold text-purple-600 dark:text-purple-400">
                                    ${tour.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })
                  ) : (
                    <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                      {language === 'en' ? 'No premium packages available' : 'No hay paquetes premium disponibles'}
                    </div>
                  )}
                </div>
                
                <div className="mt-4">
                  <Link href="/tours?duration=premium" onClick={onClose}>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <span>{language === 'en' ? 'View Premium Tours' : 'Ver Tours Premium'}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Categorías */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  {language === 'en' ? 'Browse Categories' : 'Explorar Categorías'}
                </h3>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.div
                      key={category.slug}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href={`/tours?category=${category.slug}`} onClick={onClose}>
                        <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group cursor-pointer">
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center ${category.color} shadow-sm`}>
                            <span className="text-lg">{category.icon}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                              {category.name}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{category.count}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Oferta Especial */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 to-teal-600 p-4 text-white">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      <span className="text-xs font-bold">🔥 HOT</span>
                    </div>
                    <span className="text-xs font-bold text-yellow-300">
                      -15% OFF
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-sm mb-1">
                    {language === 'en' ? 'Early Booking' : 'Reserva Anticipada'}
                  </h4>
                  <p className="text-xs text-emerald-100 mb-3">
                    {language === 'en' 
                      ? 'Book 30+ days in advance'
                      : 'Reserva con 30+ días de anticipación'}
                  </p>
                  <Link href="/contact" onClick={onClose}>
                    <button className="w-full text-xs font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 rounded-lg transition-colors">
                      {language === 'en' ? 'Get Discount' : 'Obtener Descuento'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Footer con botón CTA */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800 mt-4">
              <Link href="/tours" onClick={onClose}>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 hover:from-black hover:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'en' ? 'View All Tours' : 'Ver Todos los Tours'}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}