# Amaiatours - Tour Operator Website

Complete tour operator website built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Features

### Internationalization (i18n)
- Bilingual support: Spanish and English
- Language switcher in navbar
- Persistent language selection using localStorage
- Context API for global language state

### Components

1. **Navbar**
   - Responsive design with mobile hamburger menu
   - Language switcher (ES/EN)
   - Smooth scroll navigation
   - Call-to-action button

2. **Hero Section**
   - Full-screen background with Machu Picchu image
   - Compelling headline and description
   - Statistics cards
   - Smooth animations with Framer Motion

3. **Tours Section**
   - Grid layout with 4 featured tours:
     - Machu Picchu Classic
     - Rainbow Mountain (7 Colors)
     - Humantay Lake
     - Sacred Valley
   - Tour cards with images, pricing, difficulty levels
   - Hover effects and animations

4. **About Section**
   - Four key value propositions
   - Animated statistics counters
   - Company achievements showcase

5. **Testimonials**
   - Auto-rotating carousel
   - Real customer reviews with photos
   - 5-star ratings
   - Manual navigation controls

6. **Contact Form**
   - Full contact form with WhatsApp integration
   - Contact information display
   - Google Maps embed
   - Form validation

7. **Footer**
   - Company information
   - Quick links
   - Social media links
   - Payment methods accepted

## Design System

### Colors
- **Primary**: Emerald Green (`emerald-600`)
- **Secondary**: Amber/Gold (`amber-500` to `amber-600`)
- **Neutral**: Stone tones
- **Text**: Stone-800 for headings, Stone-600 for body

### Typography
- Font: Inter (system fonts)
- Responsive text sizing
- Clear hierarchy

### Animations
- Smooth transitions with Framer Motion
- Scroll-based animations
- Hover effects on interactive elements
- Page load animations

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Images**: Next.js Image optimization with Unsplash

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page with all sections
│   └── globals.css        # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Tours.tsx          # Tours grid
│   ├── About.tsx          # About section
│   ├── Testimonials.tsx   # Testimonials carousel
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── contexts/
│   └── LanguageContext.tsx # i18n context
├── lib/
│   ├── translations.ts    # Translation strings
│   └── data.ts            # Tours and testimonials data
└── types/
    └── index.ts           # TypeScript interfaces
```

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Optimized layouts for all screen sizes
- Touch-friendly interactions

### SEO Optimized
- Meta tags for social sharing
- Semantic HTML structure
- Optimized images
- Fast loading times

### Performance
- Static generation
- Optimized images with Next.js
- Code splitting
- Fast page loads

### User Experience
- Smooth scroll navigation
- Intuitive interface
- Clear call-to-actions
- WhatsApp integration for instant contact

## Tours Data

All tours include:
- Professional images from Unsplash
- Pricing information
- Duration and difficulty level
- Detailed descriptions in both languages
- Highlight features

## Contact Integration

- WhatsApp direct messaging
- Email contact
- Phone number
- Physical address in Cusco
- Google Maps location
- Business hours

## Color Theme

The design uses natural, warm colors inspired by Peruvian landscapes:
- Emerald green (Andes mountains)
- Amber/gold (Incan heritage)
- Stone grays (ancient architecture)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

All rights reserved - Amaiatours © 2024
