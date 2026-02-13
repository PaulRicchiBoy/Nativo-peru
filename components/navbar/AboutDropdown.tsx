"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Users, Heart, Leaf, ArrowRight, Award, Globe, Shield, TrendingUp, MapPin, Calendar, Star, Compass } from 'lucide-react';

interface AboutDropdownProps {
  onClose: () => void;
}

export function AboutDropdown({ onClose }: AboutDropdownProps) {
  const { language, t } = useLanguage();

  const featuredTours = [
    {
      title: language === 'es' ? 'Machu Picchu Premium' : 'Machu Picchu Premium',
      duration: '4 días / 3 noches',
      rating: '4.9',
      price: '$850',
      tag: 'Más vendido',
      gradient: 'from-[#C62828] to-[#D84315]'
    },
    {
      title: language === 'es' ? 'Ruta del Salkantay' : 'Salkantay Trek',
      duration: '5 días / 4 noches',
      rating: '4.8',
      price: '$720',
      tag: 'Aventura',
      gradient: 'from-[#1565C0] to-[#00838F]'
    },
    {
      title: language === 'es' ? 'Valle Sagrado Completo' : 'Full Sacred Valley',
      duration: '2 días / 1 noche',
      rating: '4.7',
      price: '$380',
      tag: 'Cultural',
      gradient: 'from-[#2E7D32] to-[#558B2F]'
    },
    {
      title: language === 'es' ? 'Montaña de 7 Colores' : 'Rainbow Mountain',
      duration: '1 día',
      rating: '4.6',
      price: '$95',
      tag: 'Express',
      gradient: 'from-[#6A1B9A] to-[#8E24AA]'
    }
  ];

  const whyChooseUs = [
    { 
      icon: Shield, 
      title: language === 'es' ? 'Seguridad Garantizada' : 'Safety Guaranteed',
      description: language === 'es' ? 'Equipo de primeros auxilios y protocolos certificados' : 'Certified first aid team and safety protocols'
    },
    { 
      icon: Users, 
      title: language === 'es' ? 'Guías Expertos' : 'Expert Guides',
      description: language === 'es' , 'Guías bilingües certificados por MINCETUR' : 'Bilingual guides certified by MINCETUR'
    },
    { 
      icon: Leaf, 
      title: language === 'es' ? 'Turismo Responsable' : 'Responsible Tourism',
      description: language === 'es' ? 'Compromiso con comunidades y medio ambiente' : 'Commitment to communities and environment'
    },
    { 
      icon: Award, 
      title: language === 'es' ? 'Certificación Internacional' : 'International Certification',
      description: language === 'es' ? 'Reconocidos por TripAdvisor y Rainforest Alliance' : 'Recognized by TripAdvisor and Rainforest Alliance'
    }
  ];

  const stats = [
    { value: '12+', label: language === 'es' ? 'Años de Experiencia' : 'Years Experience' },
    { value: '25,000+', label: language === 'es' ? 'Viajeros Felices' : 'Happy Travelers' },
    { value: '98%', label: language === 'es' ? 'Satisfacción' : 'Satisfaction' },
    { value: '50+', label: language === 'es' ? 'Tours Únicos' : 'Unique Tours' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[800px] bg-white dark:bg-[#1A0F06] rounded-2xl shadow-2xl border border-stone-200 dark:border-[#2C1A0F] overflow-hidden z-50"
    >
      <div className="flex">
        {/* Left Column - Tours Destacados */}
        <div className="w-2/3 p-6 border-r border-stone-100 dark:border-[#2C1A0F]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Compass className="w-5 h-5 text-[#C62828] mr-2" />
              <h3 className="text-lg font-bold text-stone-800 dark:text-white">
                {language === 'es' ? 'Tours Destacados' : 'Featured Tours'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[#C62828] bg-[#C62828]/10 px-3 py-1 rounded-full">
              {language === 'es' ? 'Reserva Ahora' : 'Book Now'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('tours')}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tour.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-4 bg-white/50 dark:bg-[#2C1A0F]/50 backdrop-blur-sm border border-stone-200/50 dark:border-stone-800/50 rounded-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-xs font-bold text-[#C62828] bg-[#C62828]/10 px-2 py-1 rounded-full">
                        {tour.tag}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm font-bold text-stone-700 dark:text-white">{tour.rating}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-stone-800 dark:text-white text-sm mb-2 group-hover:text-[#C62828] transition-colors">
                    {tour.title}
                  </h4>
                  
                  <div className="flex items-center text-xs text-stone-500 dark:text-stone-400 mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {tour.duration}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-stone-800 dark:text-white">
                      {tour.price}
                      <span className="text-xs text-stone-500 dark:text-stone-400 ml-1">
                        {language === 'es' ? '/persona' : '/person'}
                      </span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#C62828] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('tours')}
            className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#C62828] to-[#D84315] hover:from-[#B71C1C] hover:to-[#C62828] text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>{language === 'es' ? 'Ver Todos los Tours' : 'View All Tours'}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column - Información de la Empresa */}
        <div className="w-1/3 p-6 bg-gradient-to-b from-stone-50 to-white dark:from-[#1A0F06] dark:to-[#2C1A0F]">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Building2 className="w-5 h-5 text-[#C62828] mr-2" />
              <h3 className="text-lg font-bold text-stone-800 dark:text-white">
                {t.nav.aboutMenu.title}
              </h3>
            </div>
            
            <p className="text-sm text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">
              {language === 'es' 
                ? '12 años creando experiencias inolvidables en Perú. Expertos en tours personalizados y aventuras auténticas.'
                : '12 years creating unforgettable experiences in Peru. Experts in personalized tours and authentic adventures.'
              }
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-[#2C1A0F] p-3 rounded-lg border border-stone-200 dark:border-stone-800"
              >
                <div className="text-2xl font-bold text-[#C62828] mb-1">{stat.value}</div>
                <div className="text-xs text-stone-600 dark:text-stone-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="space-y-3 mb-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-[#2C1A0F] cursor-pointer transition-colors"
                  onClick={() => scrollToSection('about')}
                >
                  <div className="bg-[#C62828]/10 p-2 rounded-lg">
                    <Icon className="w-4 h-4 text-[#C62828]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-800 dark:text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="w-full flex items-center justify-center px-4 py-3 bg-stone-900 hover:bg-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>{language === 'es' ? 'Nuestra Historia' : 'Our Story'}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-stone-200 dark:border-[#2C1A0F] bg-stone-50 dark:bg-[#1A0F06] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-[#C62828] mr-2" />
              <span className="text-xs text-stone-600 dark:text-stone-400">
                {language === 'es' ? 'Operamos en:' : 'Operating in:'}
              </span>
              <span className="text-xs font-bold text-stone-800 dark:text-white ml-2">
                Cusco • Machu Picchu • Sacred Valley
              </span>
            </div>
          </div>
          <span className="text-xs text-stone-500 dark:text-stone-400">
            Tripadvisor Travelers' Choice 2024
          </span>
        </div>
      </div>
    </motion.div>
  );
}