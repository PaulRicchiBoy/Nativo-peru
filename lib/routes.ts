// lib/routes.ts - VERSIÓN CORREGIDA

export const routeMap: Record<string, string> = {
  // ===== TOURS DE CUSCO (IDs de data.ts) =====
  'cuzco-inolvidable-3d2n': '/tours/cuzco-inolvidable-3d2n',  // ← SIN guiones extras
  'cuzco-inolvidable-4d3n': '/tours/cuzco-inolvidable-4d3n',  // ← SIN guiones extras
  'cusco-inolvidable-6d5n': '/tours/cusco-inolvidable-6d5n',  // ← SIN guiones extras
  'cusco-inolvidable-7d6n': '/tours/cusco-inolvidable-7d6n',  // ← SIN guiones extras
  
  // ===== TOURS LIMA-CUSCO =====
  'experiencia-lima-cusco': '/tours/experiencia-lima-cusco',
  'experiencia-lima-cusco-6d5n': '/tours/experiencia-lima-cusco-6d5n',
  'experiencia-lima-cusco-7d6n': '/tours/experiencia-lima-cusco-7d6n',
  'experiencia-lima-cusco-8d7n': '/tours/experiencia-lima-cusco-8d7n',
  'experiencia-lima-cusco-9d8n': '/tours/experiencia-lima-cusco-9d8n',
  
  // ===== TOURS LIMA-NAZCA-CUSCO =====
  'experiencia-lima-nazca-cusco-10d9n': '/tours/experiencia-lima-nazca-cusco-10d9n',
  
  // ===== TOURS LIMA-CUSCO-PUNO =====
  'experiencia-lima-cusco-puno-10d9n': '/tours/experiencia-lima-cusco-puno-10d9n',
  'experiencia-cusco-puno-8d7n': '/tours/experiencia-cusco-puno-8d7n',
  
  // ===== MACHU PICCHU =====
  'machu-picchu-express-1d': '/tours/machu-picchu-express-1d',
  'machu-picchu-express-2d1n': '/tours/machu-picchu-express-2d1n',
  'machu-picchu-full-day': '/tours/machu-picchu-full-day',
  'machu-picchu-sunset-sunrise-2d1n': '/tours/machu-picchu-sunset-sunrise-2d1n',
  'sacred-valley-machu-picchu-2d1n': '/tours/sacred-valley-machu-picchu-2d1n',
  
  // ===== PERÚ COMPLETO =====
  'peru-bolivia-aventura': '/tours/peru-bolivia-aventura',
  'peru-completo-aventura': '/tours/peru-completo-aventura',
  
  // ===== TREKKING =====
  'short-inca-trail-2d1n': '/tours/short-inca-trail-2d1n',
  'classic-inca-trail-4d3n': '/tours/classic-inca-trail-4d3n',
  'salkantay-trek-5d4n': '/tours/salkantay-trek-5d4n',
  
  // ===== TOURS CLÁSICOS CUSCO =====
  'city-tour-cusco': '/tours/city-tour-cusco',
  'sacred-valley-tour': '/tours/sacred-valley-tour',
  'rainbow-mountain': '/tours/rainbow-mountain',
  'cusco-classic-combo-3d': '/tours/cusco-classic-combo-3d',
  
  // ===== TOURS COSTA =====
  'city-tour-lima': '/tours/city-tour-lima',
  'lima-paracas-ballestas-2d1n': '/tours/lima-paracas-ballestas-2d1n',
  'lima-paracas-huacachina-3d2n': '/tours/lima-paracas-huacachina-3d2n',
  'lima-express': '/tours/lima-express',
};

// Función helper con validación
export function getRoute(id: string): string {
  // Verificar si el ID existe en el mapa
  if (routeMap[id]) {
    return routeMap[id];
  }
  
  // En desarrollo, mostrar error claro
  if (process.env.NODE_ENV === 'development') {
    console.error(`❌ ERROR: El tour con ID "${id}" no está registrado en routeMap`);
    console.error('📝 Agrega esta línea a routeMap:');
    console.error(`  '${id}': '/tours/${id}',`);
  }
  
  // Fallback: la URL será /tours/[id]
  // ESTO ES LO CORRECTO para Next.js App Router
  return `/tours/${id}`;
}