# ✅ Guía de integración — Academia The Number One
## Astro 5 + Tailwind CSS

---

## Archivos entregados y dónde van

| Archivo entregado        | Destino en tu proyecto              |
|--------------------------|-------------------------------------|
| `AnnouncementModal.astro`| `src/components/`                   |
| `AudioPlayer.astro`      | `src/components/`                   |
| `Layout.astro`           | `src/layouts/` ← **reemplaza**      |
| `index.astro`            | `src/pages/`   ← **reemplaza**      |
| `global.css`             | `src/styles/`  ← **reemplaza**      |
| `reveal.ts`              | `src/scripts/` (crea la carpeta)    |

---

## Paso 1 — Canción

Pon tu archivo MP3 aquí:
```
public/
  audio/
    cancion-tno.mp3
```

---

## Paso 2 — Copiar los archivos

Copia cada archivo en su destino indicado arriba.  
`Layout.astro`, `index.astro` y `global.css` reemplazan los que ya tienes.

---

## Paso 3 — Verificar Tailwind en astro.config.mjs

Tu proyecto debe tener Tailwind integrado. Si ya lo tienes funcionando, no necesitas cambiar nada.

---

## Paso 4 — Cómo usar las animaciones de scroll reveal

En cualquier componente (Hero, Programas, Metodologia, etc.) agrega `data-reveal` a los elementos que quieras animar:

```astro
<h2 data-reveal>Nuestros Programas</h2>
<p  data-reveal data-reveal-delay="1">Descripción...</p>
<div data-reveal data-reveal-delay="2">Card...</div>
```

Al final del componente, activa el script:

```astro
<script>
  import "../scripts/reveal.ts";
</script>
```

---

## Paso 5 — Modal: cómo resetearlo en desarrollo

Si quieres volver a ver el modal (ya que se guarda en localStorage):

Abre la consola del navegador (F12) y escribe:
```javascript
localStorage.removeItem('tno_modal_v1')
```
Luego recarga la página.

---

## Resumen de mejoras incluidas

| Tema              | Qué se mejoró |
|-------------------|---------------|
| **Modal**         | Aparece al entrar, se guarda en localStorage, cierra con X / Escape / click fuera |
| **Audio**         | Reproductor bonito, el usuario elige cuándo escuchar, nunca autoplay |
| **SEO**           | title y description mejorados con Atalaya/Ucayali, schema con teléfonos y dirección |
| **Tipografía**    | Sora para títulos, Nunito para cuerpo (Google Fonts) |
| **Animaciones**   | Scroll reveal listo para usar con data-reveal |
| **Scroll suave**  | `scroll-behavior: smooth` global |
| **Estructura**    | AudioPlayer entre Hero y Stats, orden limpio en index.astro |