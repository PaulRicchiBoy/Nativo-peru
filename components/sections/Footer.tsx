"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Mountain, Facebook, Instagram, Mail, Phone, Leaf, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 dark:bg-[#0F2318] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 p-2 rounded-lg">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Nativo Expeditions</span>
            </div>
            <p className="text-stone-400 dark:text-stone-500 leading-relaxed">
              Expediciones auténticas que conectan viajeros conscientes con la cultura, naturaleza y comunidades del Perú de manera sostenible y respetuosa.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com/nativoexpeditions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 dark:bg-emerald-900/30 p-3 rounded-lg hover:bg-emerald-700 transition-colors border border-stone-700"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/nativoexpeditions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 dark:bg-emerald-900/30 p-3 rounded-lg hover:bg-emerald-600 transition-colors border border-stone-700"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 dark:bg-emerald-900/30 p-3 rounded-lg hover:bg-emerald-700 transition-colors border border-stone-700"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Expediciones</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-stone-400 dark:text-stone-500 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors flex items-center group"
                >
                  <Leaf className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('expeditions')}
                  className="text-stone-400 dark:text-stone-500 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors flex items-center group"
                >
                  <Mountain className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Expediciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-stone-400 dark:text-stone-500 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors flex items-center group"
                >
                  <Globe className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Nuestra Filosofía
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('communities')}
                  className="text-stone-400 dark:text-stone-500 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors flex items-center group"
                >
                  <MapPin className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Comunidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-stone-400 dark:text-stone-500 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors flex items-center group"
                >
                  <Mail className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-stone-400 dark:text-stone-500">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                <span>hola@nativoexpeditions.com</span>
              </li>
              <li className="flex items-start space-x-2 text-stone-400 dark:text-stone-500">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                <span>+51 987 654 321</span>
              </li>
              <li className="flex items-start space-x-2 text-stone-400 dark:text-stone-500">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                <span>Cusco, Perú - Centro de Operaciones</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Leaf className="w-4 h-4 mr-2 text-emerald-400" />
              Compromiso Sostenible
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="bg-emerald-800/40 rounded-lg px-4 py-2 text-emerald-300 font-semibold text-sm border border-emerald-700/30">
                Turismo Responsable
              </div>
              <div className="bg-emerald-800/40 rounded-lg px-4 py-2 text-emerald-300 font-semibold text-sm border border-emerald-700/30">
                Comercio Justo
              </div>
              <div className="bg-emerald-800/40 rounded-lg px-4 py-2 text-emerald-300 font-semibold text-sm border border-emerald-700/30">
                Impacto Positivo
              </div>
            </div>
            
            <h3 className="text-lg font-bold mb-4 mt-6">Formas de Pago</h3>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white rounded-lg px-4 py-2 text-stone-800 font-semibold text-sm">
                Visa
              </div>
              <div className="bg-white rounded-lg px-4 py-2 text-stone-800 font-semibold text-sm">
                Mastercard
              </div>
              <div className="bg-white rounded-lg px-4 py-2 text-stone-800 font-semibold text-sm">
                Transferencia
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-400">
          <p className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} Nativo Expeditions. Todos los derechos reservados.</span>
            <span className="hidden md:inline">•</span>
            <span className="text-emerald-400">Viajes con propósito, impacto con respeto.</span>
          </p>
          <p className="mt-2 text-sm text-stone-500">
            Operamos en tierras ancestrales con permiso y respeto hacia las comunidades originarias.
          </p>
        </div>
      </div>
    </footer>
  );
}