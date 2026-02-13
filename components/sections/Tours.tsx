"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import { 
  Clock, MapPin, Star, Users, ChevronRight, Phone, 
  ArrowRight, Award, TrendingUp, Calendar, Shield,
  Mountain, Compass, Camera, Coffee, Sun, Waves,
  Landmark, Tent, Train, Ship, Plane, Bus, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';

// Interfaz para los tours
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
  location?: string;
  locationEn?: string;
  rating?: number;
  reviews?: number;
}

export function Tours() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleTours, setVisibleTours] = useState(6); // Cambiado a 6 (múltiplo de 3)

  // Función para WhatsApp
  const handleWhatsApp = (tourTitle: string) => {
    const phoneNumber = '51987654321';
    const message = language === 'es' 
      ? `¡Hola! Estoy interesado en el tour: ${tourTitle}. ¿Podrían darme más información?`
      : `Hello! I'm interested in the tour: ${tourTitle}. Could you give me more information?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Categorías de tours
  const categories = [
    { id: 'all', label: { es: 'Todos', en: 'All' }, icon: Compass },
    { id: 'machupicchu', label: { es: 'Machu Picchu', en: 'Machu Picchu' }, icon: Landmark },
    { id: 'trekking', label: { es: 'Trekking', en: 'Trekking' }, icon: Mountain },
    { id: 'cusco', label: { es: 'Cusco', en: 'Cusco' }, icon: Sun },
    { id: 'packages', label: { es: 'Paquetes', en: 'Packages' }, icon: Award },
    { id: 'lima', label: { es: 'Lima', en: 'Lima' }, icon: Camera },
    { id: 'puno', label: { es: 'Puno', en: 'Puno' }, icon: Waves },
    { id: 'bolivia', label: { es: 'Bolivia', en: 'Bolivia' }, icon: Globe }
  ];

  // Función para determinar la categoría de un tour
  const getTourCategory = (tour: Tour): string => {
    const title = tour.title.toLowerCase();
    const id = tour.id.toLowerCase();
    
    if (id.includes('machu-picchu') || title.includes('machu picchu')) return 'machupicchu';
    if (id.includes('trek') || title.includes('trek') || title.includes('camino inca') || title.includes('salkantay')) return 'trekking';
    if (id.includes('cusco') || title.includes('cusco')) return 'cusco';
    if (id.includes('lima') || title.includes('lima')) return 'lima';
    if (id.includes('puno') || title.includes('puno') || title.includes('titicaca')) return 'puno';
    if (id.includes('bolivia') || title.includes('bolivia')) return 'bolivia';
    if (tour.duration >= 8 || id.includes('paquete') || id.includes('package')) return 'packages';
    
    return 'all';
  };

  // Filtrar tours por categoría
  const filteredTours = useMemo(() => {
    const allTours = tours as Tour[];
    
    if (selectedCategory === 'all') {
      return allTours;
    }
    
    return allTours.filter(tour => getTourCategory(tour) === selectedCategory);
  }, [selectedCategory]);

  // Tours destacados
  const featuredTours = useMemo(() => {
    return (tours as Tour[])
      .filter(tour => 
        tour.id.includes('machu-picchu') || 
        tour.id.includes('cusco-inolvidable') ||
        tour.id.includes('peru-bolivia')
      )
      .slice(0, 3); // Cambiado a 3 para que sean 3 destacados
  }, []);

  const getDifficultyText = (difficulty: string): string => {
    const map: Record<string, { es: string; en: string }> = {
      easy: { es: 'Fácil', en: 'Easy' },
      moderate: { es: 'Moderado', en: 'Moderate' },
      challenging: { es: 'Desafiante', en: 'Challenging' }
    };
    return map[difficulty]?.[language] || difficulty;
  };

  const getDifficultyColor = (difficulty: string): string => {
    const map: Record<string, string> = {
      easy: 'text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30',
      moderate: 'text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/30',
      challenging: 'text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30'
    };
    return map[difficulty] || 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800';
  };

  const getDurationText = (duration: number): string => {
    if (duration === 0.5) return language === 'es' ? '½ día' : '½ day';
    if (duration === 1) return language === 'es' ? '1 día' : '1 day';
    return `${duration} ${language === 'es' ? 'días' : 'days'}`;
  };

  // Obtener icono de transporte
  const getTransportIcon = (tour: Tour) => {
    if (tour.id.includes('train') || tour.id.includes('tren')) return Train;
    if (tour.id.includes('flight') || tour.id.includes('vuelo')) return Plane;
    if (tour.id.includes('boat') || tour.id.includes('lancha')) return Ship;
    if (tour.id.includes('bus') || tour.id.includes('traslado')) return Bus;
    return Mountain;
  };

  const loadMore = () => {
    setVisibleTours(prev => prev + 3); // Cargar de 3 en 3
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header con estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            {language === 'es' ? 'Tours Premium en Perú' : 'Premium Tours in Peru'}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'es' ? 'Experiencias' : 'Experiences'} <br />
            <span className="text-emerald-600 dark:text-emerald-400">
              {language === 'es' ? 'Inolvidables' : 'Unforgettable'}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Descubre la magia de Perú a través de nuestros tours cuidadosamente diseñados'
              : 'Discover the magic of Peru through our carefully designed tours'}
          </p>

          {/* Stats rápidas */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{language === 'es' ? 'Tours Únicos' : 'Unique Tours'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">5000+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{language === 'es' ? 'Viajeros Felices' : 'Happy Travelers'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">15+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{language === 'es' ? 'Años de Experiencia' : 'Years Experience'}</div>
            </div>
          </div>
        </motion.div>

        {/* Tours Destacados - AHORA 3 COLUMNAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              {language === 'es' ? 'Tours Destacados' : 'Featured Tours'}
            </h3>
            <Link href="/tour" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1">
              {language === 'es' ? 'Ver todos' : 'View all'}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid de 3 columnas para destacados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour: Tour, index: number) => {
              const TransportIcon = getTransportIcon(tour);
              
              return (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <Link href={`/tour/${tour.id}`} className="block relative h-48 overflow-hidden">
                    <Image
                      src={tour.image || '/default-tour.jpg'}
                      alt={language === 'es' ? tour.title : tour.titleEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ${tour.price}
                    </div>
                    
                    <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-900/90 p-2 rounded-lg">
                      <TransportIcon className="w-4 h-4 text-emerald-600" />
                    </div>
                  </Link>

                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
                      {language === 'es' ? tour.title : tour.titleEn}
                    </h4>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {tour.location || (language === 'es' ? 'Perú' : 'Peru')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {getDurationText(tour.duration)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">4.9</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Filtros por categoría */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                  {category.label[language]}
                  {isSelected && (
                    <span className="ml-1 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {filteredTours.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid de tours - AHORA 3 COLUMNAS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTours.slice(0, visibleTours).map((tour: Tour, index: number) => {
            const isNew = index < 2;
            const hasDiscount = tour.id.includes('express');
            
            return (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {isNew && (
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {language === 'es' ? 'NUEVO' : 'NEW'}
                    </span>
                  )}
                  {hasDiscount && (
                    <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                      -20%
                    </span>
                  )}
                </div>

                {/* Badge de dificultad */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${getDifficultyColor(tour.difficulty)}`}>
                    {getDifficultyText(tour.difficulty)}
                  </span>
                </div>

                {/* Imagen del tour */}
                <Link href={`/tour/${tour.id}`} className="block relative h-52 overflow-hidden">
                  <Image
                    src={tour.image || '/default-tour.jpg'}
                    alt={language === 'es' ? tour.title : tour.titleEn}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Contenido */}
                <div className="p-5">
                  {/* Título y ubicación */}
                  <Link href={`/tour/${tour.id}`} className="block">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {language === 'es' ? tour.title : tour.titleEn}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs mb-3">
                    <MapPin className="w-3 h-3" />
                    <span className="line-clamp-1">{getTourLocation(tour)}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (128 {language === 'es' ? 'reseñas' : 'reviews'})
                    </span>
                  </div>

                  {/* Descripción corta */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {language === 'es' ? tour.description : tour.descriptionEn}
                  </p>

                  {/* Info rápida */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{getDurationText(tour.duration)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>2-10 {language === 'es' ? 'pers' : 'ppl'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{language === 'es' ? 'Todo el año' : 'All year'}</span>
                    </div>
                  </div>

                  {/* Precio y botones */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">
                        {language === 'es' ? 'Desde' : 'From'}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${tour.price}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          /{language === 'es' ? 'pers' : 'pp'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {/* Botón WhatsApp */}
                      <Button
                        size="sm"
                        onClick={() => handleWhatsApp(language === 'es' ? tour.title : tour.titleEn)}
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors shadow-md hover:shadow-lg"
                        title={language === 'es' ? 'Consultar por WhatsApp' : 'Inquire via WhatsApp'}
                      >
                        <Phone className="w-4 h-4" />
                      </Button>

                      {/* Botón Ver Detalles */}
                      <Link href={`/tour/${tour.id}`}>
                        <Button
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-md hover:shadow-lg px-4"
                        >
                          <span className="hidden sm:inline">{language === 'es' ? 'Ver' : 'View'}</span>
                          <ArrowRight className="w-4 h-4 sm:ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mensaje si no hay tours */}
        {filteredTours.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            <Compass className="w-20 h-20 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {language === 'es' ? 'No hay tours disponibles' : 'No tours available'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {language === 'es' 
                ? 'Pronto agregaremos más tours en esta categoría'
                : 'We will add more tours in this category soon'}
            </p>
            <Button
              onClick={() => setSelectedCategory('all')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              {language === 'es' ? 'Ver todos los tours' : 'View all tours'}
            </Button>
          </motion.div>
        )}

        {/* Botón Cargar más y Ver todos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          {visibleTours < filteredTours.length && (
            <Button
              onClick={loadMore}
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 text-base font-semibold rounded-full transition-all"
            >
              {language === 'es' ? 'Cargar más tours' : 'Load more tours'}
              <TrendingUp className="w-4 h-4 ml-2" />
            </Button>
          )}
          
          <Link href="/tour">
            <Button 
              className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black"
            >
              {language === 'es' ? 'Explorar Todos los Tours' : 'Explore All Tours'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Función auxiliar para obtener ubicación
function getTourLocation(tour: Tour): string {
  if (tour.location) return tour.location;
  
  const id = tour.id.toLowerCase();
  const title = tour.title.toLowerCase();
  
  if (id.includes('machu-picchu') || title.includes('machu picchu')) return 'Machu Picchu, Perú';
  if (id.includes('cusco') || title.includes('cusco')) return 'Cusco, Perú';
  if (id.includes('lima') || title.includes('lima')) return 'Lima, Perú';
  if (id.includes('puno') || title.includes('puno') || title.includes('titicaca')) return 'Puno, Perú';
  if (id.includes('arequipa') || title.includes('arequipa')) return 'Arequipa, Perú';
  if (id.includes('bolivia') || title.includes('bolivia')) return 'Perú & Bolivia';
  
  return 'Perú';
}