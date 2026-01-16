"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Users, Heart, Leaf, ArrowRight, Award, Globe, Shield, TrendingUp } from 'lucide-react';

interface AboutDropdownProps {
  onClose: () => void;
}

export function AboutDropdown({ onClose }: AboutDropdownProps) {
  const { language, t } = useLanguage();

  const sections = [
    {
      icon: Building2,
      title: t.nav.aboutMenu.company,
      description: '12 años de experiencia',
      color: 'from-[#C62828] to-[#B71C1C]',
      stat: '2500+ Tours'
    },
    {
      icon: Users,
      title: t.nav.aboutMenu.team,
      description: 'Guías certificados expertos',
      color: 'from-[#B71C1C] to-[#D32F2F]',
      stat: '25+ Guías'
    },
    {
      icon: Heart,
      title: t.nav.aboutMenu.values,
      description: 'Compromiso y excelencia',
      color: 'from-[#C62828] to-[#D32F2F]',
      stat: '98% Satisfacción'
    },
    {
      icon: Leaf,
      title: t.nav.aboutMenu.sustainability,
      description: 'Turismo responsable',
      color: 'from-[#B71C1C] to-[#C62828]',
      stat: 'Certificado'
    }
  ];

  const highlights = [
    { icon: Award, text: 'Certificación internacional' },
    { icon: Shield, text: 'Seguro incluido' },
    { icon: TrendingUp, text: '98% recomendación' },
    { icon: Globe, text: '50+ nacionalidades' }
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white dark:bg-[#1F120A] rounded-2xl shadow-2xl border border-stone-200 dark:border-[#2C1A0F] overflow-hidden"
    >
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider flex items-center">
            <Building2 className="w-4 h-4 mr-2 text-[#C62828]" />
            {t.nav.aboutMenu.title}
          </h3>
          <span className="text-xs text-stone-500 dark:text-stone-400 bg-[#C62828]/10 dark:bg-[#C62828]/20 px-3 py-1 rounded-full">
            Desde 2012
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={index}
                onClick={scrollToAbout}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex flex-col items-start p-5 rounded-xl hover:bg-stone-50 dark:hover:bg-[#2C1A0F] transition-all duration-300 text-left group border border-stone-200 dark:border-[#2C1A0F] hover:border-[#C62828]/50 hover:shadow-lg"
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${section.color} mb-3 shadow-md group-hover:shadow-lg transition-all group-hover:scale-110`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-stone-800 dark:text-stone-200 text-sm mb-1 group-hover:text-[#C62828] transition-colors">
                  {section.title}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-2">
                  {section.description}
                </p>
                <div className="mt-auto">
                  <span className="text-xs font-bold text-[#C62828] bg-[#C62828]/10 dark:bg-[#C62828]/20 px-2 py-1 rounded-full">
                    {section.stat}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-stone-50 to-stone-50/30 dark:from-[#2C1A0F] dark:to-[#1F120A] rounded-xl p-5 mb-6">
          <p className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-3">
            Por qué elegirnos
          </p>
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-2 text-left group cursor-pointer"
                >
                  <div className="bg-white dark:bg-[#2C1A0F] p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                    <Icon className="w-4 h-4 text-[#C62828]" />
                  </div>
                  <span className="text-xs text-stone-700 dark:text-stone-300 font-medium group-hover:text-[#C62828] transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#C62828] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#D32F2F] text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <span>{language === 'es' ? 'Conoce más sobre nosotros' : 'Learn More About Us'}</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
