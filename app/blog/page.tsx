"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, User, Clock, Search, ArrowRight, 
  TrendingUp, Star, ChevronRight, BookOpen,
  Filter, X
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  blogPosts, 
  blogCategories, 
  getFeaturedPosts, 
  getPopularPosts, 
  getRecentPosts 
} from '@/lib/blogs';
import { useState } from 'react';

export default function BlogPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');

  // Filtrar y ordenar posts
  let filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'todos' || post.categorySlug === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author[language].toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Ordenar posts
  if (sortBy === 'popular') {
    filteredPosts = [...filteredPosts].sort((a, b) => b.views - a.views);
  } else {
    filteredPosts = [...filteredPosts].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  const featuredPosts = getFeaturedPosts();
  const popularPosts = getPopularPosts(3);
  const recentPosts = getRecentPosts(3);

  // Estadísticas
  const totalViews = blogPosts.reduce((acc, post) => acc + post.views, 0);
  const totalPosts = blogPosts.length;
  const avgReadTime = Math.round(blogPosts.reduce((acc, post) => acc + post.readTime, 0) / totalPosts);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="text-sm">Nativo Expeditions Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {language === 'es' ? 'Blog de Viajes Perú' : 'Peru Travel Blog'}
            </h1>
            
            <p className="text-xl text-emerald-100 mb-8">
              {language === 'es' 
                ? 'Consejos, guías y experiencias para descubrir lo mejor de Perú'
                : 'Tips, guides and experiences to discover the best of Peru'}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <p className="text-2xl font-bold">{totalPosts}</p>
                <p className="text-xs text-emerald-200">{language === 'es' ? 'Artículos' : 'Articles'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <p className="text-2xl font-bold">{(totalViews / 1000).toFixed(1)}k</p>
                <p className="text-xs text-emerald-200">{language === 'es' ? 'Vistas' : 'Views'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <p className="text-2xl font-bold">{avgReadTime}</p>
                <p className="text-xs text-emerald-200">{language === 'es' ? 'Min lectura' : 'Min read'}</p>
              </div>
            </div>

            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder={language === 'es' ? 'Buscar artículos...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Barra de filtros */}
      <section className="sticky top-20 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="hidden lg:flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {cat.name[language]} ({cat.count})
                </button>
              ))}
            </div>

            <div className="lg:hidden flex items-center justify-between">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <Filter className="w-4 h-4" />
                <span>{language === 'es' ? 'Filtros' : 'Filters'}</span>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'recent' | 'popular')}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm"
              >
                <option value="recent">{language === 'es' ? 'Más recientes' : 'Most recent'}</option>
                <option value="popular">{language === 'es' ? 'Más populares' : 'Most popular'}</option>
              </select>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <span className="text-sm text-gray-500">{language === 'es' ? 'Ordenar por:' : 'Sort by:'}</span>
              <button
                onClick={() => setSortBy('recent')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  sortBy === 'recent' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                {language === 'es' ? 'Recientes' : 'Recent'}
              </button>
              <button
                onClick={() => setSortBy('popular')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  sortBy === 'popular' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                {language === 'es' ? 'Populares' : 'Popular'}
              </button>
            </div>
          </div>

          {isFilterOpen && (
            <div className="lg:hidden mt-4 flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setIsFilterOpen(false);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {cat.name[language]} ({cat.count})
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Grid de Posts - Versión simplificada */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
                <p className="text-gray-500 dark:text-gray-400">
                  {language === 'es' ? 'No se encontraron artículos' : 'No articles found'}
                </p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={post.image}
                        alt={post.title[language]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                          {post.category[language]}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime} min
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                        {post.title[language]}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {post.excerpt[language]}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author[language]}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-PE' : 'en-US')}
                          </div>
                        </div>
                        <span className="text-emerald-600 group-hover:translate-x-2 transition-transform flex items-center">
                          {language === 'es' ? 'Leer más' : 'Read more'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}