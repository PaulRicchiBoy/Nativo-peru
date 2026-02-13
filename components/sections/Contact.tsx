"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '51987654321';
    const message = `Hola! Me gustaría información sobre:\nNombre: ${formData.name}\nEmail: ${formData.email}\nTour: ${formData.tour}\nFecha: ${formData.date}\nMensaje: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.formTitle}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.name}
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.email}
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.phone}
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.tourInterest}
                  </label>
                  <select
                    value={formData.tour}
                    onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors"
                    required
                  >
                    <option value="">{t.contact.selectTour}</option>
                    {tours.map((tour) => (
                      <option key={tour.id} value={language === 'es' ? tour.title : tour.titleEn}>
                        {language === 'es' ? tour.title : tour.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.date}
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.message}
                  </label>
                  <Textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors py-6 text-lg font-semibold shadow-lg border-2 border-transparent hover:border-black dark:hover:border-white"
                >
                  {t.contact.send}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black dark:from-black dark:to-gray-900 rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg flex-shrink-0 border border-white/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white/90">Dirección</p>
                    <p className="text-white/70">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg flex-shrink-0 border border-white/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white/90">Teléfono</p>
                    <p className="text-white/70">+51 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg flex-shrink-0 border border-white/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white/90">Email</p>
                    <p className="text-white/70">info@amaiatours.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg flex-shrink-0 border border-white/20">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white/90">Horario</p>
                    <p className="text-white/70">{t.contact.hours}</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-8 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 py-6 text-lg font-semibold shadow-lg border-2 border-transparent hover:border-white dark:hover:border-gray-300 transition-all"
                onClick={() => window.open('https://wa.me/51987654321', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.contact.whatsappBtn}
              </Button>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.8524799428743!2d-71.96746738461395!3d-13.516639690464853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d826598b85%3A0x989be0940487e527!2sCusco%2C%20Peru!5e0!3m2!1sen!2sus!4v1642089234567!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="dark:invert-[90%] dark:contrast-[110%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}