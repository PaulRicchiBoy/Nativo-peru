"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import { Clock, TrendingUp, CheckCircle, Star, MapPin, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Definimos una interfaz temporal para el tour basada en lo que parece tener
interface Tour {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  duration: number;
  difficulty: string;
  price: number;
  highlights?: string[];
  highlightsEn?: string[];
  // Propiedades opcionales que podemos añadir o manejar dinámicamente
  location?: string;
  locationEn?: string;
  featured?: boolean;
  category?: string;
}

export function Tours() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('featured');

  // Categorías de tours
  const categories = [
    { id: 'featured', label: language === 'es' ? 'Destacados' : 'Featured' },
    { id: 'machupicchu', label: 'Machu Picchu' },
    { id: 'trekking', label: 'Trekking' },
    { id: 'cusco', label: 'Cusco' },
    { id: 'packages', label: language === 'es' ? 'Paquetes' : 'Packages' }
  ];

  // Función para determinar si un tour es destacado basado en ciertos criterios
  const isFeaturedTour = (tour: Tour): boolean => {
    // Podemos definir lógica para determinar qué tours son destacados
    // Por ejemplo: tours con mejor relación calidad-precio, más populares, etc.
    const featuredIds = [
      'machu-picchu-full-day', 
      'cusco-inolvidable-4d-3n',
      'inca-trail-machu-picchu',
      'experiencia-lima-cusco-8d-7n'
    ];
    return featuredIds.includes(tour.id);
  };

  // Función para obtener la ubicación del tour
  const getTourLocation = (tour: Tour): string => {
    if (tour.location) return tour.location;
    
    // Determinar ubicación basada en el título o ID
    if (tour.id.includes('machu-picchu') || tour.title.toLowerCase().includes('machu picchu')) {
      return 'Machu Picchu, Perú';
    } else if (tour.id.includes('cusco') || tour.title.toLowerCase().includes('cusco')) {
      return 'Cusco, Perú';
    } else if (tour.id.includes('lima') || tour.title.toLowerCase().includes('lima')) {
      return 'Lima, Perú';
    } else if (tour.id.includes('trek') || tour.title.toLowerCase().includes('inca trail')) {
      return 'Cusco & Machu Picchu, Perú';
    }
    
    return 'Perú';
  };

  // Función para determinar la categoría del tour
  const getTourCategory = (tour: Tour): string => {
    const title = tour.title.toLowerCase();
    const description = tour.description.toLowerCase();
    
    if (title.includes('machu picchu') || description.includes('machu picchu')) {
      return 'machupicchu';
    } else if (title.includes('trek') || title.includes('inca trail') || 
               title.includes('salkantay') || tour.difficulty === 'challenging') {
      return 'trekking';
    } else if (title.includes('cusco') || description.includes('cusco')) {
      return 'cusco';
    } else if (tour.duration > 3 && (title.includes('paquete') || title.includes('package') || 
               title.includes('experiencia') || title.includes('completo'))) {
      return 'packages';
    }
    
    return 'featured';
  };

  // Filtrar tours por categoría
  const filterToursByCategory = (category: string): Tour[] => {
    const allTours = tours as Tour[];
    
    switch(category) {
      case 'machupicchu':
        return allTours.filter(tour => getTourCategory(tour) === 'machupicchu');
      case 'trekking':
        return allTours.filter(tour => getTourCategory(tour) === 'trekking');
      case 'cusco':
        return allTours.filter(tour => getTourCategory(tour) === 'cusco');
      case 'packages':
        return allTours.filter(tour => getTourCategory(tour) === 'packages');
      default:
        // Destacados: tours que cumplen ciertos criterios o los primeros
        return allTours.filter(tour => isFeaturedTour(tour)).slice(0, 8);
    }
  };

  const getDifficultyText = (difficulty: string): string => {
    const map: Record<string, string> = {
      easy: language === 'es' ? 'Fácil' : 'Easy',
      moderate: language === 'es' ? 'Moderado' : 'Moderate',
      challenging: language === 'es' ? 'Desafiante' : 'Challenging'
    };
    return map[difficulty] || difficulty;
  };

  const getDifficultyColor = (difficulty: string): string => {
    const map: Record<string, string> = {
      easy: 'text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30',
      moderate: 'text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/30',
      challenging: 'text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30'
    };
    return map[difficulty] || 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800';
  };

  const getDurationText = (duration: number): string => {
    if (duration === 1) {
      return `${duration} ${language === 'es' ? 'día' : 'day'}`;
    }
    return `${duration} ${language === 'es' ? 'días' : 'days'}`;
  };

  // Tours filtrados según categoría seleccionada
  const filteredTours = filterToursByCategory(selectedCategory);

  return (
    <section id="tours" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-4">
            {language === 'es' ? 'Tours Premium' : 'Premium Tours'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'es' ? 'Nuestros Mejores Tours' : 'Our Best Selling Tours'}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Descubre las experiencias más increíbles que Perú tiene para ofrecer'
              : 'Discover the most incredible experiences that Peru has to offer'}
          </p>
        </motion.div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de tours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredTours.slice(0, 8).map((tour: Tour, index: number) => {
            const isFeatured = isFeaturedTour(tour);
            const location = getTourLocation(tour);
            
            return (
              <motion.div
                key={tour.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700"
              >
                {/* Badge de destacado */}
                {isFeatured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold">
                      <Star className="w-3 h-3" fill="white" />
                      <span>{language === 'es' ? 'Popular' : 'Popular'}</span>
                    </div>
                  </div>
                )}

                {/* Badge de dificultad */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tour.difficulty)}`}>
                    {getDifficultyText(tour.difficulty)}
                  </span>
                </div>

                {/* Imagen del tour */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={tour.image || '/default-tour.jpg'}
                    alt={language === 'es' ? tour.title : tour.titleEn}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenido del card */}
                <div className="p-5">
                  {/* Título y ubicación */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
                      {language === 'es' ? tour.title : tour.titleEn}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="line-clamp-1">{location}</span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {language === 'es' ? tour.description : tour.descriptionEn}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <ul className="space-y-1.5">
                      {(language === 'es' ? tour.highlights : tour.highlightsEn || [])?.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                      {(!tour.highlights || tour.highlights.length === 0) && (
                        <li className="text-xs text-gray-500 dark:text-gray-400 italic">
                          {language === 'es' ? 'Experiencia única en la vida' : 'Once in a lifetime experience'}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Información del tour */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{getDurationText(tour.duration)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2-12 {language === 'es' ? 'personas' : 'people'}</span>
                    </div>
                  </div>

                  {/* Precio y botón */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {language === 'es' ? 'Desde' : 'From'}
                        </span>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${tour.price}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                          {language === 'es' ? '/persona' : '/person'}
                        </span>
                      </div>
                    </div>
                    <Link href={`/tours/${tour.id}`}>
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-md hover:shadow-lg"
                      >
                        {language === 'es' ? 'Ver Detalles' : 'View Details'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mensaje si no hay tours en la categoría */}
        {filteredTours.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Users className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {language === 'es' ? 'No hay tours disponibles' : 'No tours available'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {language === 'es' 
                ? 'Pronto agregaremos más tours en esta categoría'
                : 'We will add more tours in this category soon'}
            </p>
          </motion.div>
        )}

        {/* Botón para ver todos los tours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/tours">
            <Button 
              variant="outline" 
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all px-8 py-6 text-base font-semibold rounded-full"
            >
              {language === 'es' ? 'Ver Todos los Tours' : 'View All Tours'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}