# Instrucciones de Configuración

## Imagen de Fondo del Hero

Para que el Hero Section funcione correctamente, necesitas agregar tu imagen de fondo:

1. Coloca tu imagen en la carpeta `public/`
2. Nómbrala `nativoHero.jpg` (o actualiza el nombre en `components/hero-section.tsx` línea 24)
3. Formato recomendado: JPG o WebP
4. Tamaño recomendado: 1920x1080px o mayor para mejor calidad

## Colores Personalizados

Los colores están optimizados para fondos claros y naturales:
- **Verde Esmeralda**: Para botones principales y acentos
- **Dorado/Ámbar**: Para elementos secundarios y detalles
- **Blanco cálido**: Para textos sobre el fondo

Si deseas cambiar los colores, edita:
- `app/globals.css` (líneas 27, 29, 33, 39-41) para los colores base
- `components/hero-section.tsx` para gradientes y efectos específicos

## Textos y Traducciones

Los textos se encuentran en:
- Español: `messages/es.json`
- Inglés: `messages/en.json`

Edita estos archivos para cambiar el contenido sin tocar el código del componente.
