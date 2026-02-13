"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, MapPin, Star, Users, Calendar, Check, 
  ArrowLeft, Phone, Mail, Share2, Heart, 
  Mountain, Train, Bus, Plane, Ship, Coffee,
  Sun, Moon, Cloud, Thermometer
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Definir tipos para el tour
interface ItineraryDay {
  day: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  schedule?: string;
  includes?: string[];
  includesEn?: string[];
}

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
  hotelCategory?: string;
  highlights?: string[];
  highlightsEn?: string[];
  inclusions?: string[];
  inclusionsEn?: string[];
  itinerary?: ItineraryDay[];
}

export default function TourPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions'>('overview');
  const [isLiked, setIsLiked] = useState(false);
  
  // Buscar el tour por ID - con tipo definido
  const tour = tours.find(t => t.id === params.id) as Tour | undefined;

  // Si no existe el tour, mostrar 404
  if (!tour) {
    notFound();
  }

  // Función para WhatsApp
  const handleWhatsApp = () => {
    const phoneNumber = '51987654321';
    const message = language === 'es' 
      ? `¡Hola! Estoy interesado en el tour: ${tour.title}. ¿Podrían darme más información?`
      : `Hello! I'm interested in the tour: ${tour.title}. Could you give me more information?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Formatear duración
  const getDurationText = (duration: number) => {
    if (duration === 0.5) return language === 'es' ? 'Medio día' : 'Half day';
    if (duration === 1) return language === 'es' ? '1 día' : '1 day';
    return `${duration} ${language === 'es' ? 'días' : 'days'}`;
  };

  // Obtener highlights según idioma
  const highlights = language === 'es' ? tour.highlights : tour.highlightsEn;
  
  // Obtener inclusions según idioma
  const inclusions = language === 'es' ? tour.inclusions : tour.inclusionsEn;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={tour.image || '/default-tour.jpg'}
            alt={language === 'es' ? tour.title : tour.titleEn}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          {/* Badge de duración */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-600 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4 mr-2" />
            {getDurationText(tour.duration)}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {language === 'es' ? tour.title : tour.titleEn}
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {language === 'es' ? tour.description : tour.descriptionEn}
          </p>

          {/* Precio y botones */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3">
              <span className="text-sm text-white/80">{language === 'es' ? 'Desde' : 'From'}</span>
              <span className="text-3xl font-bold ml-2">${tour.price}</span>
              <span className="text-sm text-white/80 ml-1">/ {language === 'es' ? 'persona' : 'person'}</span>
            </div>
            
            <Button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              {language === 'es' ? 'Reservar por WhatsApp' : 'Book via WhatsApp'}
            </Button>
            
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-4 rounded-xl transition-colors"
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
            </button>
          </div>
        </div>

        {/* Botón volver */}
        <Link 
          href="/tour"
          className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'es' ? 'Volver a Tours' : 'Back to Tours'}
        </Link>
      </section>

      {/* Pestañas de navegación */}
      <section className="sticky top-20 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium text-sm transition-colors border-b-2 ${
                activeTab === 'overview'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {language === 'es' ? 'Descripción General' : 'Overview'}
            </button>
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`px-6 py-4 font-medium text-sm transition-colors border-b-2 ${
                activeTab === 'itinerary'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {language === 'es' ? 'Itinerario' : 'Itinerary'}
            </button>
            <button
              onClick={() => setActiveTab('inclusions')}
              className={`px-6 py-4 font-medium text-sm transition-colors border-b-2 ${
                activeTab === 'inclusions'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {language === 'es' ? 'Incluye' : 'Inclusions'}
            </button>
          </div>
        </div>
      </section>

      {/* Contenido según pestaña */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Descripción General */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {language === 'es' ? 'Descripción del Tour' : 'Tour Description'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {language === 'es' ? tour.description : tour.descriptionEn}
                </p>

                {highlights && highlights.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {language === 'es' ? 'Lo que vivirás' : 'What you\'ll experience'}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {highlights.map((highlight: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-32">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {language === 'es' ? 'Información Rápida' : 'Quick Info'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'es' ? 'Duración' : 'Duration'}</span>
                      <span className="font-semibold">{getDurationText(tour.duration)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'es' ? 'Dificultad' : 'Difficulty'}</span>
                      <span className="font-semibold capitalize">{tour.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'es' ? 'Precio desde' : 'Price from'}</span>
                      <span className="text-2xl font-bold text-emerald-600">${tour.price}</span>
                    </div>
                    {tour.hotelCategory && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">{language === 'es' ? 'Categoría hotel' : 'Hotel category'}</span>
                        <span className="font-semibold">{tour.hotelCategory}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      onClick={handleWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      {language === 'es' ? 'Consultar disponibilidad' : 'Check availability'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Itinerario */}
          {activeTab === 'itinerary' && tour.itinerary && tour.itinerary.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'es' ? 'Itinerario día a día' : 'Day by day itinerary'}
              </h2>
              
              <div className="space-y-4">
                {tour.itinerary.map((day: ItineraryDay, index: number) => {
                  const dayIncludes = language === 'es' ? day.includes : day.includesEn;
                  
                  return (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                      <div className="bg-emerald-600 text-white px-6 py-4">
                        <h3 className="text-lg font-semibold">
                          {language === 'es' ? `Día ${day.day}` : `Day ${day.day}`}: {language === 'es' ? day.title : day.titleEn}
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {language === 'es' ? day.description : day.descriptionEn}
                        </p>
                        {day.schedule && (
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Clock className="w-4 h-4 mr-2" />
                            {day.schedule}
                          </div>
                        )}
                        {dayIncludes && dayIncludes.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              {language === 'es' ? 'Incluye:' : 'Includes:'}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {dayIncludes.map((item: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Incluye */}
          {activeTab === 'inclusions' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'es' ? 'Qué incluye el tour' : 'What the tour includes'}
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-emerald-600 mb-4">
                      {language === 'es' ? '✓ Incluye' : '✓ Includes'}
                    </h3>
                    {inclusions && inclusions.length > 0 ? (
                      <ul className="space-y-3">
                        {inclusions.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">
                        {language === 'es' ? 'Información no disponible' : 'Information not available'}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">
                      {language === 'es' ? '✗ No incluye' : '✗ Not included'}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {language === 'es' ? 'Vuelos internacionales' : 'International flights'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {language === 'es' ? 'Seguro de viaje' : 'Travel insurance'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {language === 'es' ? 'Gastos personales' : 'Personal expenses'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {language === 'es' ? 'Propinas' : 'Tips'}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tours relacionados */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'es' ? 'Tours relacionados' : 'Related tours'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tours
              .filter(t => t.id !== tour.id)
              .slice(0, 3)
              .map(relatedTour => (
                <Link
                  key={relatedTour.id}
                  href={`/tour/${relatedTour.id}`}
                  className="group bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-40">
                    <Image
                      src={relatedTour.image || '/default-tour.jpg'}
                      alt={language === 'es' ? relatedTour.title : relatedTour.titleEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 transition-colors">
                      {language === 'es' ? relatedTour.title : relatedTour.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                      {language === 'es' ? relatedTour.description : relatedTour.descriptionEn}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-emerald-600">${relatedTour.price}</span>
                      <span className="text-sm text-gray-500">{getDurationText(relatedTour.duration)}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}