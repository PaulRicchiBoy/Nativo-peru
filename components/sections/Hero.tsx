"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      
      {/* Video Background - No Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/heroNativo.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 35%' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-16 md:pt-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text + Button - First on Mobile */}
          <div className="flex flex-col justify-center order-1">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 inline-flex items-center px-5 py-2.5 bg-black/70 backdrop-blur-md rounded-full border border-white/30"
            >
              <Compass className="w-5 h-5 text-amber-400 mr-3" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">
                {t.hero.badgeText}
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tighter mb-6 drop-shadow-lg"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-xl md:text-2xl text-white drop-shadow-lg max-w-xl leading-relaxed mb-10"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/tour">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 group font-semibold w-full sm:w-auto"
                >
                  {t.hero.ctaButton}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Image - Second on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px]">
              <Image
                src="/heroNativo.png"
                alt="Nativo Expedition"
                width={620}
                height={520}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
                quality={95}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}