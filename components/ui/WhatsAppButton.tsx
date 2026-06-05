"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Send } from 'lucide-react';

export function WhatsAppButton() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const phoneNumber = '51972347781';

  const defaultMessage = language === 'es' 
    ? '¡Hola! Me gustaría obtener más información sobre sus tours personalizados.'
    : 'Hello! I would like more information about your personalized tours.';

  const handleSend = () => {
    const finalMessage = customMessage.trim() || defaultMessage;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomMessage(''); // Reset message
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 rounded-full overflow-hidden shadow-2xl shadow-green-500/60 hover:shadow-green-600/80 transition-all duration-300"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-25" />
          <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-15" style={{ animationDelay: '0.7s' }} />
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[60] w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <Image src="/whatsapp.png" alt="WA" width={40} height={40} />
                </div>
                <div>
                  <p className="font-semibold">Nativo Expedition</p>
                  <p className="text-xs opacity-90">En línea • Respuesta rápida</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-2xl rounded-tl-none mb-4 text-sm">
                {language === 'es' 
                  ? '¡Hola! ¿En qué podemos ayudarte hoy?' 
                  : "Hello! How can we help you today?"}
              </div>

              {/* Text Input */}
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder={language === 'es' 
                  ? "Escribe tu mensaje aquí..." 
                  : "Type your message here..."}
                className="w-full h-24 p-4 rounded-2xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-500 resize-y bg-white dark:bg-gray-900"
              />
            </div>

            {/* Send Button */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <button
                onClick={handleSend}
                className="w-full bg-[#25D366] hover:bg-[#20C65B] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                <Send size={20} />
                Send a Message
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}