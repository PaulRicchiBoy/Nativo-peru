"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, BlogPost } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, User, Clock, ArrowLeft, Eye, Heart, 
  MessageCircle, Tag, Share2, Bookmark, Twitter, 
  Facebook, Linkedin, ChevronRight, Star
} from 'lucide-react';
import { useState } from 'react';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { language } = useLanguage();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Buscar el post por slug - tipado correcto
  const post: BlogPost | undefined = blogPosts.find(p => p.slug === params.slug);

  // Si no existe el post, mostrar 404
  if (!post) {
    notFound();
  }

  // Posts relacionados (misma categoría, excluyendo el actual)
  const relatedPosts: BlogPost[] = blogPosts
    .filter(p => p.categorySlug === post.categorySlug && p.id !== post.id)
    .slice(0, 3);

  // Formatear fecha
  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'es' ? 'es-PE' : 'en-US', 
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  // Contenido según idioma
  const content = {
    es: {
      author: 'Escrito por',
      readTime: 'min de lectura',
      views: 'vistas',
      likes: 'me gusta',
      comments: 'comentarios',
      share: 'Compartir',
      related: 'Artículos Relacionados',
      category: 'Categoría',
      tags: 'Etiquetas',
      backToBlog: 'Volver al Blog',
      tableOfContents: 'Tabla de Contenidos',
      introduction: 'Introducción',
      whatIs: '¿Qué es Machu Picchu?',
      history: 'Historia',
      howToGet: 'Cómo llegar',
      bestTime: 'Mejor época',
      tips: 'Consejos útiles',
      conclusion: 'Conclusión'
    },
    en: {
      author: 'Written by',
      readTime: 'min read',
      views: 'views',
      likes: 'likes',
      comments: 'comments',
      share: 'Share',
      related: 'Related Articles',
      category: 'Category',
      tags: 'Tags',
      backToBlog: 'Back to Blog',
      tableOfContents: 'Table of Contents',
      introduction: 'Introduction',
      whatIs: 'What is Machu Picchu?',
      history: 'History',
      howToGet: 'How to get there',
      bestTime: 'Best time',
      tips: 'Useful tips',
      conclusion: 'Conclusion'
    }
  };

  const t = content[language];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Barra de progreso de lectura */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div 
          className="h-full bg-emerald-600 transition-all duration-300"
          style={{ width: '0%' }}
        />
      </div>

      {/* Hero Section con imagen */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title[language]}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          {/* Categoría */}
          <Link 
            href={`/blog?category=${post.categorySlug}`}
            className="inline-flex items-center px-4 py-2 bg-emerald-600 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors mb-6"
          >
            <Tag className="w-4 h-4 mr-2" />
            {post.category[language]}
          </Link>
          
          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title[language]}
          </h1>
          
          {/* Metadatos */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                <User className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/70">{t.author}</p>
                <p className="font-medium">{post.author[language]}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.readTime} {t.readTime}</span>
            </div>
          </div>
        </div>

        {/* Botón volver flotante */}
        <Link 
          href="/blog"
          className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all flex items-center group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          {t.backToBlog}
        </Link>
      </section>

      {/* Contenido principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar izquierdo - Tabla de contenidos (desktop) */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-emerald-600" />
                  {t.tableOfContents}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#introduccion" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {t.introduction}
                    </a>
                  </li>
                  <li>
                    <a href="#que-es" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {t.whatIs}
                    </a>
                  </li>
                  <li>
                    <a href="#historia" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {t.history}
                    </a>
                  </li>
                  <li>
                    <a href="#como-llegar" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {t.howToGet}
                    </a>
                  </li>
                  <li>
                    <a href="#mejor-epoca" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {t.bestTime}
                    </a>
                  </li>
                  <li>
                    <a href="#consejos" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {t.tips}
                    </a>
                  </li>
                  <li>
                    <a href="#conclusion" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {t.conclusion}
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Contenido central */}
            <article className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10">
                
                {/* Extracto destacado */}
                <div className="text-xl text-gray-600 dark:text-gray-400 italic border-l-4 border-emerald-600 pl-6 mb-8">
                  {post.excerpt[language]}
                </div>

                {/* Estadísticas e interacciones */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center gap-1 transition-colors ${
                        isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{post.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                    <div className="flex items-center text-gray-500">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Eye className="w-5 h-5 mr-1" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2 rounded-lg transition-colors ${
                        isBookmarked 
                          ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30' 
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                    
                    {/* Botón compartir */}
                    <div className="relative group">
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                      
                      {/* Dropdown compartir */}
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                        <div className="p-2">
                          <button className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                            <Twitter className="w-4 h-4 mr-3 text-blue-400" />
                            Twitter
                          </button>
                          <button className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                            <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                            Facebook
                          </button>
                          <button className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                            <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                            LinkedIn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido del artículo */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <section id="introduccion">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.introduction}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {language === 'es' 
                        ? 'Machu Picchu, la legendaria ciudadela de los incas, es uno de los destinos más emblemáticos de Sudamérica y una de las Siete Maravillas del Mundo Moderno. Ubicada en la cima de una montaña en los Andes peruanos, esta maravilla arquitectónica atrae a viajeros de todo el mundo que buscan conectarse con la historia, la espiritualidad y la naturaleza.'
                        : 'Machu Picchu, the legendary Inca citadel, is one of the most iconic destinations in South America and one of the Seven Wonders of the Modern World. Located on top of a mountain in the Peruvian Andes, this architectural wonder attracts travelers from around the world seeking to connect with history, spirituality, and nature.'}
                    </p>
                  </section>

                  <section id="que-es" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.whatIs}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {language === 'es'
                        ? 'Machu Picchu, que significa "Montaña Vieja" en quechua, fue construida alrededor de 1450 por el emperador inca Pachacútec como una residencia de descanso real. La ciudadela está dividida en dos sectores principales: el agrícola, con sus impresionantes terrazas de cultivo, y el urbano, donde se encuentran templos, plazas y viviendas.'
                        : 'Machu Picchu, meaning "Old Mountain" in Quechua, was built around 1450 by the Inca emperor Pachacutec as a royal retreat. The citadel is divided into two main sectors: the agricultural area, with its impressive farming terraces, and the urban area, where temples, plazas, and dwellings are found.'}
                    </p>
                    <div className="my-6 rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1625121833596-ae8e8a6b6387?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Vista de Machu Picchu"
                        width={800}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-sm text-gray-500 text-center mt-2">
                        {language === 'es' ? 'Vista panorámica de Machu Picchu' : 'Panoramic view of Machu Picchu'}
                      </p>
                    </div>
                  </section>

                  <section id="historia" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.history}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {language === 'es'
                        ? 'Abandonada un siglo después durante la conquista española, Machu Picchu permaneció oculta para el mundo exterior durante siglos, conocida solo por los pobladores locales. Fue redescubierta para el mundo académico por el historiador Hiram Bingham en 1911, aunque hay evidencia de que otros exploradores la visitaron antes.'
                        : 'Abandoned a century later during the Spanish conquest, Machu Picchu remained hidden from the outside world for centuries, known only to local residents. It was rediscovered for the academic world by historian Hiram Bingham in 1911, although there is evidence that other explorers visited it before.'}
                    </p>
                  </section>

                  <section id="como-llegar" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.howToGet}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {language === 'es'
                        ? 'Hay dos formas principales de llegar a Machu Picchu:'
                        : 'There are two main ways to get to Machu Picchu:'}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                      <li>
                        <strong>{language === 'es' ? 'En tren:' : 'By train:'}</strong> {language === 'es' 
                          ? 'Desde Cusco u Ollantaytambo hasta Aguas Calientes, luego en bus a la ciudadela.'
                          : 'From Cusco or Ollantaytambo to Aguas Calientes, then by bus to the citadel.'}
                      </li>
                      <li>
                        <strong>{language === 'es' ? 'Camino Inca:' : 'Inca Trail:'}</strong> {language === 'es'
                          ? 'Trekking de 4 días que termina en la Puerta del Sol al amanecer.'
                          : '4-day trek that ends at the Sun Gate at sunrise.'}
                      </li>
                    </ul>
                  </section>

                  <section id="mejor-epoca" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.bestTime}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {language === 'es'
                        ? 'La mejor época para visitar Machu Picchu es durante la temporada seca, de abril a octubre. Los meses más populares son junio, julio y agosto, cuando hay menos lluvias y cielos más despejados. Sin embargo, también es cuando hay más visitantes, por lo que se recomienda reservar con anticipación.'
                        : 'The best time to visit Machu Picchu is during the dry season, from April to October. The most popular months are June, July, and August, when there is less rain and clearer skies. However, this is also when there are more visitors, so it is recommended to book in advance.'}
                    </p>
                  </section>

                  <section id="consejos" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.tips}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
                        <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          {language === 'es' ? 'Documentación' : 'Documentation'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'es' 
                            ? 'Lleva tu pasaporte original. Es obligatorio para ingresar.'
                            : 'Bring your original passport. It is mandatory to enter.'}
                        </p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
                        <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          {language === 'es' ? 'Clima' : 'Weather'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'es'
                            ? 'Lleva ropa para lluvia y sol. El clima cambia rápidamente.'
                            : 'Bring rain and sun protection. The weather changes quickly.'}
                        </p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
                        <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          {language === 'es' ? 'Altura' : 'Altitude'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'es'
                            ? 'Aclimatate en Cusco 2-3 días antes para evitar el mal de altura.'
                            : 'Acclimatize in Cusco 2-3 days before to avoid altitude sickness.'}
                        </p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
                        <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          {language === 'es' ? 'Horarios' : 'Schedules'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'es'
                            ? 'Llega temprano. La entrada es por turnos de 2 horas.'
                            : 'Arrive early. Entry is in 2-hour shifts.'}
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="conclusion" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.conclusion}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      {language === 'es'
                        ? 'Visitar Machu Picchu es una experiencia transformadora que combina historia, naturaleza y espiritualidad. Con la preparación adecuada y esta guía, estarás listo para disfrutar al máximo de este increíble destino. ¡No olvides tu cámara!'
                        : 'Visiting Machu Picchu is a transformative experience that combines history, nature, and spirituality. With proper preparation and this guide, you will be ready to fully enjoy this incredible destination. Don\'t forget your camera!'}
                    </p>
                  </section>
                </div>

                {/* Tags */}
                {post.tags && (
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Tag className="w-5 h-5 mr-2 text-emerald-600" />
                      {t.tags}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags[language].map((tag: string, index: number) => (
                        <Link
                          key={index}
                          href={`/blog?tag=${tag.toLowerCase()}`}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Autor */}
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {post.author[language].charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                        {post.author[language]}
                      </h3>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2">
                        {post.authorRole[language]}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {language === 'es'
                          ? 'Guía oficial de turismo con más de 10 años de experiencia liderando grupos a Machu Picchu y el Valle Sagrado. Apasionada por compartir la historia y cultura peruana.'
                          : 'Official tour guide with over 10 years of experience leading groups to Machu Picchu and the Sacred Valley. Passionate about sharing Peruvian history and culture.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar derecho - Info adicional (desktop) */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Tours relacionados */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                    {language === 'es' ? 'Tours Relacionados' : 'Related Tours'}
                  </h3>
                  <div className="space-y-4">
                    <Link href="/tour/machupicchu" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                          <Star className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                            Machu Picchu Full Day
                          </p>
                          <p className="text-sm text-gray-500">$299</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="/tour/machupicchu" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                          <Star className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                            Machu Picchu Express 2D/1N
                          </p>
                          <p className="text-sm text-gray-500">$599</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'es' ? 'Newsletter' : 'Newsletter'}
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    {language === 'es'
                      ? 'Recibe guías y consejos de viaje'
                      : 'Receive travel guides and tips'}
                  </p>
                  <input
                    type="email"
                    placeholder={language === 'es' ? 'Tu email' : 'Your email'}
                    className="w-full px-4 py-2 rounded-lg text-gray-900 mb-2"
                  />
                  <button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-semibold transition-colors">
                    {language === 'es' ? 'Suscribirse' : 'Subscribe'}
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <ChevronRight className="w-6 h-6 mr-2 text-emerald-600" />
              {t.related}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related: BlogPost) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title[language]}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                        {related.category[language]}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {related.readTime} min
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {related.title[language]}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                      {related.excerpt[language]}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {related.author[language]}
                      </div>
                      <span>{related.views.toLocaleString()} vistas</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'es' 
              ? '¿Listo para visitar Machu Picchu?' 
              : 'Ready to visit Machu Picchu?'}
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            {language === 'es'
              ? 'Reserva ahora y vive la experiencia de tu vida'
              : 'Book now and live the experience of your life'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {language === 'es' ? 'Reservar Ahora' : 'Book Now'}
            </Link>
            <Link
              href="/tour"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              {language === 'es' ? 'Ver Tours' : 'View Tours'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}