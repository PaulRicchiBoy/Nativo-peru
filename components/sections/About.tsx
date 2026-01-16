"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Users, DollarSign, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function About() {
  const { t } = useLanguage();
  const [counts, setCounts] = useState({ years: 0, tours: 0, clients: 0, rate: 0 });

  useEffect(() => {
    const targets = { years: 12, tours: 2500, clients: 5000, rate: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        years: Math.floor(targets.years * progress),
        tours: Math.floor(targets.tours * progress),
        clients: Math.floor(targets.clients * progress),
        rate: Math.floor(targets.rate * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const reasons = [
    {
      icon: MapPin,
      title: t.about.reason1Title,
      description: t.about.reason1Desc,
      color: 'from-[#C62828] to-[#B71C1C]'
    },
    {
      icon: Users,
      title: t.about.reason2Title,
      description: t.about.reason2Desc,
      color: 'from-[#B71C1C] to-[#D32F2F]'
    },
    {
      icon: DollarSign,
      title: t.about.reason3Title,
      description: t.about.reason3Desc,
      color: 'from-[#C62828] to-[#B71C1C]'
    },
    {
      icon: Leaf,
      title: t.about.reason4Title,
      description: t.about.reason4Desc,
      color: 'from-[#B71C1C] to-[#D32F2F]'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#1F120A]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-200 mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-stone-50 to-stone-100 dark:from-[#2C1A0F] dark:to-[#1F120A] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${reason.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-200 mb-3">
                  {reason.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {counts.years}+
              </motion.p>
              <p className="text-red-100 font-medium">{t.about.yearsExp}</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {counts.tours}+
              </motion.p>
              <p className="text-red-100 font-medium">{t.about.toursCompleted}</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {counts.clients}+
              </motion.p>
              <p className="text-red-100 font-medium">{t.about.happyClients}</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {counts.rate}%
              </motion.p>
              <p className="text-red-100 font-medium">{t.about.successRate}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
