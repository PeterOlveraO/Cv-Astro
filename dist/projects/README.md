# Imágenes de Proyectos con Carrusel

Coloca aquí las imágenes de tus **dos proyectos específicos**. Cada proyecto puede tener **múltiples imágenes** que se muestran en un carrusel. Todas las imágenes deben estar en formato **WebP**.

## 🎠 Estructura de Carrusel:
Cada proyecto puede tener 2-3 imágenes que muestren diferentes aspectos:
- Pantalla principal
- Funcionalidades específicas  
- Vistas adicionales (admin, configuración, etc.)

## 📁 Organización por proyecto:

### 📱 Aplicación Móvil:
- `app-1.webp` - Pantalla principal de la aplicación
- `app-2.webp` - Funcionalidades principales
- `app-3.webp` - Configuraciones o vista secundaria

### 🦷 Sitio Web para Dentistas:
- `dentist-web-1.webp` - Página de inicio
- `dentist-web-2.webp` - Servicios dentales
- `dentist-web-3.webp` - Sistema de citas o contacto

## ⚙️ Configuración de Botones:

### 📱 Aplicación Móvil:
- ✅ **Solo botón GitHub** (repositorio del código)
- ❌ **Sin demo** (por ser aplicación móvil)

### 🦷 Sitio Web Dentistas:  
- ✅ **Botón GitHub** (repositorio del código)
- ✅ **Botón Ver Demo** (sitio web en vivo)

## 📐 Especificaciones:
- **Tamaño**: 1000x550px (ratio 20:11)
- **Formato**: WebP
- **Peso**: Máximo 300KB por imagen
- **Calidad**: Alta resolución optimizada para mejor visualización

Si tienes imágenes en formato `.jpg`, puedes convertirlas con el script:
`node scripts/convert-to-webp.js`

## 🎯 Características del Carrusel:
- ⬅️➡️ Navegación con flechas
- 🔘 Indicadores (dots) en la parte inferior
- 🖱️ Solo aparecen controles al hacer hover
- 📱 Responsive en móvil y desktop
- 🎨 Efecto de zoom en hover
