# Astro-CV: Porta## 🚀 Estructura del Proyecto

Dentro del proyecto Astro-CV, encontrarás la siguiente estructura de carpetas y archivos:

```text
├── public/               # Recursos estáticos (imágenes, fuentes, PDF del CV)
│   ├── diplomas/         # Imágenes de diplomas en formato WebP
│   ├── fonts/            # Fuentes personalizadas
│   └── projects/         # Imágenes de proyectos en formato WebP
├── scripts/              # Scripts de utilidad
│   └── convert-to-webp.js # Script para convertir JPG a WebP
├── src/
│   ├── assets/           # Recursos para el procesamiento de Astro
│   ├── components/       # Componentes reutilizables
│   │   ├── DiplomaCard.astro
│   │   ├── DiplomaLightbox.astro
│   │   └── ...
│   ├── content/          # Contenido en Markdown para el blog
│   ├── layouts/          # Plantillas de página
│   ├── pages/            # Páginas del sitio
│   │   ├── diplomas.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── ...
│   └── styles/           # Estilos CSS
├── astro.config.mjs      # Configuración de Astro
├── package.json
└── tsconfig.json
```

Cada página del sitio se encuentra en el directorio `src/pages/` y se expone como una ruta basada en su nombre de archivo. Los componentes reutilizables están en `src/components/`, creados específicamente para este portafolio.

## 📝 Páginas Principales

El portafolio incluye las siguientes páginas principales:

- **Inicio (`index.astro`)**: Página principal con información personal, experiencia y habilidades.
- **Proyectos (`projects.astro`)**: Muestra de proyectos con imágenes, descripciones y tecnologías utilizadas.
- **Diplomas (`diplomas.astro`)**: Galería de certificaciones y diplomas profesionales.
- **Blog (`blog/index.astro`)**: Sección de blog con artículos técnicos y profesionales.
- **Acerca de (`about.astro`)**: Información detallada sobre el perfil profesional.

## 🖼️ Optimización de Imágenes

Todas las imágenes en el proyecto están en formato WebP para mejorar el rendimiento. Se incluye un script (`scripts/convert-to-webp.js`) para convertir automáticamente imágenes JPG a WebP:

```javascript
// Para convertir nuevas imágenes JPG a WebP:
node scripts/convert-to-webp.js
```l

Un portafolio personal y CV en línea construido con Astro, diseñado para mostrar tu experiencia profesional, proyectos, diplomas y habilidades de manera elegante y eficiente.

![Imagen del Portafolio](public/profile-photo.webp)

## Características

- ✅ Diseño moderno y responsivo
- ✅ Alto rendimiento (100/100 en Lighthouse)
- ✅ Optimizado para SEO con metadatos OpenGraph
- ✅ Secciones para Proyectos, Diplomas y Blog
- ✅ Lightbox para visualización de imágenes de proyectos
- ✅ Formato WebP para imágenes, mejorando el rendimiento
- ✅ Soporte para RSS
- ✅ Diseño personalizable

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`|
| `npm run build`           | Compila el sitio para producción en `./dist/`    |
| `npm run preview`         | Vista previa local antes de desplegar            |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `check`   |

## 🎨 Personalización

El portafolio es altamente personalizable:

1. Modifica el contenido personal en `src/pages/` 
2. Actualiza las imágenes en `public/`
3. Cambia estilos en `src/styles/global.css`
4. Configura los metadatos del sitio en `src/consts.ts`

## 📱 Responsivo

El diseño está completamente optimizado para todos los dispositivos, desde móviles hasta pantallas grandes.

## 🚀 Despliegue

El proyecto está listo para ser desplegado en cualquier plataforma que soporte sitios estáticos (Netlify, Vercel, GitHub Pages, etc.).

---

Creado con [Astro](https://astro.build) 🚀
