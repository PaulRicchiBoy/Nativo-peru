# Estructura del Proyecto Amaiatours

## Organización de Carpetas

```
components/
├── navbar/                    # Componentes de navegación
│   ├── Navbar.tsx            # Navbar principal con efectos scroll
│   ├── ToursDropdown.tsx     # Menú desplegable de tours
│   ├── AboutDropdown.tsx     # Menú desplegable de sobre nosotros
│   └── index.ts              # Exportaciones del navbar
│
├── sections/                  # Secciones de la página
│   ├── Hero.tsx              # Sección hero principal
│   ├── Tours.tsx             # Grid de tours
│   ├── About.tsx             # Sección sobre nosotros
│   ├── Testimonials.tsx      # Carrusel de testimonios
│   ├── Contact.tsx           # Formulario de contacto
│   ├── Footer.tsx            # Pie de página
│   └── index.ts              # Exportaciones de secciones
│
└── ui/                        # Componentes de UI de shadcn
    ├── button.tsx
    ├── input.tsx
    ├── textarea.tsx
    └── ...
```

## Navbar Mejorado

### Características Principales

1. **Efectos de Scroll**
   - Cambia de opacidad al hacer scroll
   - Sombra dinámica según posición
   - Transiciones suaves

2. **Menús Desplegables (Dropdowns)**

   **Tours Dropdown**:
   - Mega menú con grid de 4 tours destacados
   - Imágenes de cada tour
   - Precios visibles
   - Categorías: Aventura, Cultural, Naturaleza
   - Botón "Ver Todos los Tours"
   - Animaciones on hover

   **About Dropdown**:
   - 4 secciones: Empresa, Equipo, Valores, Sostenibilidad
   - Iconos coloridos para cada sección
   - Descripciones breves
   - Botón de acción principal

3. **Diseño Responsive**
   - Desktop: Menús desplegables con hover
   - Mobile: Menú hamburguesa completo
   - Transiciones animadas

4. **Selector de Idioma**
   - Toggle visual ES/EN
   - Efecto de gradiente en selección activa
   - Sincronizado con Context API

5. **Botón de Reserva**
   - Gradiente ámbar destacado
   - Scroll suave a sección de contacto
   - Hover effects

## Sistema de Traducciones

Las traducciones están organizadas en `lib/translations.ts`:

```typescript
translations = {
  es: {
    nav: {
      home, tours, about, testimonials, contact, bookNow,
      toursMenu: { ... },      // Menú de tours
      aboutMenu: { ... }        // Menú de nosotros
    },
    hero: { ... },
    tours: { ... },
    about: { ... },
    testimonials: { ... },
    contact: { ... },
    footer: { ... }
  },
  en: { ... }                   // Misma estructura en inglés
}
```

## Animaciones

Todas las animaciones usan **Framer Motion**:

- **Navbar**: Cambios de opacidad y sombra
- **Dropdowns**: Fade in/out con slide vertical
- **Cards**: Hover scale y translate
- **Botones**: Hover states y efectos de presión
- **Scroll**: Aparición progresiva de secciones

## Paleta de Colores

```css
/* Primarios */
emerald-600 / emerald-700  → Verde principal
amber-500 / amber-600      → Dorado/Ámbar

/* Neutrales */
stone-50 / stone-100       → Fondos claros
stone-700 / stone-800      → Textos oscuros
white                      → Fondo principal

/* Gradientes */
from-emerald-600 to-emerald-700  → Botones principales
from-amber-500 to-amber-600      → Botones secundarios
```

## Responsive Breakpoints

```
sm: 640px   → Teléfonos grandes
md: 768px   → Tablets
lg: 1024px  → Laptops
xl: 1280px  → Desktops
```

## Navegación

El navbar usa **smooth scroll** para navegar entre secciones:

```typescript
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
```

IDs de secciones:
- `#home` → Hero
- `#tours` → Tours
- `#about` → About
- `#testimonials` → Testimonials
- `#contact` → Contact

## Performance

- Imágenes optimizadas con Next.js Image
- Lazy loading de componentes
- Animaciones con GPU acceleration
- Static generation para mejor SEO

## Próximas Mejoras Sugeridas

1. Agregar más tours con categorías
2. Sistema de reservas integrado
3. Blog de viajes
4. Galería de fotos
5. Reviews de TripAdvisor
6. Calculadora de precios
7. Itinerarios interactivos
8. Chat en vivo
