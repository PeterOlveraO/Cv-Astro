# 🚀 Portafolio Personal - Astro CV

Portafolio profesional y currículum en línea construido con [Astro](https://astro.build), diseñado para mostrar experiencia, proyectos, diplomas y habilidades de manera elegante y eficiente.

![Vista previa del portafolio](public/profile-photo.webp)

## ✨ Características

- Diseño moderno y responsivo
- Alto rendimiento
- SEO optimizado con metadatos OpenGraph
- Lightbox para visualización de imágenes
- Imágenes en formato WebP
- Diseño personalizable

## 📁 Estructura del Proyecto

```
├── public/                   # Recursos estáticos
│   ├── cv.pdf               # Currículum PDF
│   ├── diplomas/            # Imágenes de diplomas
│   ├── favicon.svg         # Favicon
│   ├── profile-photo.webp  # Foto de perfil
│   └── projects/           # Imágenes de proyectos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── BaseHead.astro  # Metadatos y SEO
│   │   ├── Footer.astro    # Pie de página
│   │   ├── Header.astro    # Navegación
│   │   ├── HeaderLink.astro
│   │   ├── DiplomaDisplay.astro
│   │   └── DiplomaLightbox.astro
│   ├── consts.ts           # Configuración global
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro     # Inicio
│   │   ├── projects.astro # Proyectos
│   │   └── diplomas.astro  # Diplomas/Certificaciones
│   └── styles/
│       └── global.css      # Estilos globales
├── astro.config.mjs        # Configuración de Astro
├── package.json
└── README.md
```

## 📝 Páginas Principales

| Página | Descripción |
|--------|-------------|
| `/` | Inicio: información personal, experiencia, educación y habilidades |
| `/projects` | Portafolio de proyectos con imágenes y tecnologías |
| `/diplomas` | Galería de certificaciones y diplomas |

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Vista previa local
pnpm preview
```

## 🎨 Personalización

1. **Contenido personal**: Edita `src/pages/index.astro`
2. **Proyectos**: Modifica `src/pages/projects.astro`
3. **Diplomas**: Actualiza `src/pages/diplomas.astro`
4. **Imágenes**: Cambia archivos en `public/`
5. **Estilos**: Edita `src/styles/global.css`
6. **Metadatos del sitio**: Modifica `src/consts.ts`

## 📱 Despliegue

El proyecto está listo para desplegarse en cualquier plataforma de hosting estático:

- **GitHub Pages**: Configurado en `astro.config.mjs` con site URL
- **Netlify / Vercel**: Compatible automáticamente

---

Creado con [Astro](https://astro.build) 🚀