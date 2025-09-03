# Carpeta de Diplomas

Esta carpeta está destinada a almacenar los diplomas y certificaciones que se mostrarán en tu CV.

## Cómo agregar nuevos diplomas

1. Agrega los archivos de imagen de tus diplomas a esta carpeta.
2. Para que aparezcan en la página de diplomas, edita el archivo `src/pages/diplomas.astro` y añade un nuevo objeto al arreglo de `diplomas` siguiendo este formato:

```js
{
  title: "Título del Diploma o Certificación",
  date: "Fecha de obtención (ej: Enero 2024)",
  institute: "Institución que lo otorgó",
  description: "Breve descripción de lo que aprendiste o lograste",
  imageUrl: "/diplomas/nombre-de-tu-archivo.jpg" // Ruta a tu imagen
}
```

## Recomendaciones para las imágenes

- Usa formatos como JPG, PNG o WebP.
- Procura que las imágenes no sean demasiado pesadas (menos de 500 KB es ideal).
- Mantén una proporción similar en todas las imágenes para que se vean consistentes.
- Resolución recomendada: 1200 x 800 píxeles.
