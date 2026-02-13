"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Users, Heart, Leaf, Mountain, Users as Community, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function About() {
  const { t, language } = useLanguage();
  const [counts, setCounts] = useState({ communities: 0, travelers: 0, satisfaction: 0, sustainability: 100 });

  useEffect(() => {
    const targets = { communities: 15, travelers: 5000, satisfaction: 97, sustainability: 100 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        communities: Math.floor(targets.communities * progress),
        travelers: Math.floor(targets.travelers * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        sustainability: Math.floor(targets.sustainability * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const coreValues = [
    {
      icon: MapPin,
      title: t.about.value1Title,
      description: t.about.value1Desc,
      highlight: t.about.value1Highlight
    },
    {
      icon: Heart,
      title: t.about.value2Title,
      description: t.about.value2Desc,
      highlight: t.about.value2Highlight
    },
    {
      icon: Leaf,
      title: t.about.value3Title,
      description: t.about.value3Desc,
      highlight: t.about.value3Highlight
    },
    {
      icon: Community,
      title: t.about.value4Title,
      description: t.about.value4Desc,
      highlight: t.about.value4Highlight
    }
  ];

  const philosophyPoints = [
    {
      icon: Globe,
      text: t.about.philosophyPoint1
    },
    {
      icon: Sparkles,
      text: t.about.philosophyPoint2
    },
    {
      icon: Mountain,
      text: t.about.philosophyPoint3
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título y subtítulo */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 border border-gray-200 dark:border-gray-700">
            <Leaf className="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.about.philosophyBadge}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.mainTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.about.mainSubtitle}
          </p>
        </motion.div>

        {/* Nuestros Valores Fundamentales */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.about.coreValuesTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                    <Icon className="w-7 h-7 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {value.highlight}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Filosofía en puntos */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-10 mb-20 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t.about.philosophyTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full mb-4 border border-gray-200 dark:border-gray-600">
                    <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Estadísticas con gradiente elegante */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-black dark:from-black dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t.about.impactTitle}
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t.about.impactSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {counts.communities}+
              </motion.p>
              <p className="text-gray-200 font-medium">{t.about.statCommunities}</p>
              <p className="text-sm text-gray-400 mt-1">{t.about.statCommunitiesDesc}</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {counts.travelers}+
              </motion.p>
              <p className="text-gray-200 font-medium">{t.about.statTravelers}</p>
              <p className="text-sm text-gray-400 mt-1">{t.about.statTravelersDesc}</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {counts.satisfaction}%
              </motion.p>
              <p className="text-gray-200 font-medium">{t.about.statSatisfaction}</p>
              <p className="text-sm text-gray-400 mt-1">{t.about.statSatisfactionDesc}</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {counts.sustainability}%
              </motion.p>
              <p className="text-gray-200 font-medium">{t.about.statSustainability}</p>
              <p className="text-sm text-gray-400 mt-1">{t.about.statSustainabilityDesc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}