# Carpeta de Diplomas

Esta carpeta está destinada a almacenar los diplomas y certificaciones que se mostrarán en tu CV. Las imágenes deben estar en formato **WebP** para optimizar el rendimiento del sitio.

## Cómo agregar nuevos diplomas

1.  Agrega los archivos de imagen de tus diplomas en formato `.webp` a esta carpeta.
2.  Si tus imágenes están en formato `.jpg` o `.png`, puedes convertirlas usando el script que se encuentra en la raíz del proyecto:
    ```bash
    node scripts/convert-to-webp.js
    ```
3.  Para que aparezcan en la página de diplomas, edita el archivo `src/pages/diplomas.astro` y añade un nuevo objeto al arreglo de `diplomas` siguiendo este formato:

```javascript
{
  title: "Título del Diploma o Certificación",
  themeImageSrc: "URL de la imagen de tema",
  diplomaImageUrl: "/diplomas/nombre-de-tu-archivo.webp" // Ruta a tu imagen en formato WebP
}
```

## Recomendaciones para las imágenes

-   **Usa siempre el formato WebP.**
-   Procura que las imágenes no sean demasiado pesadas (menos de 300 KB es ideal).
-   Mantén una proporción similar en todas las imágenes para que se vean consistentes.
-   Resolución recomendada: 1200 x 800 píxeles.
