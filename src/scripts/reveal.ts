// src/scripts/reveal.ts
//
// Anima elementos que tengan el atributo [data-reveal] cuando entran al viewport.
// Las clases Tailwind que necesitas agregar a tu global.css o directamente:
//
//   [data-reveal] { opacity: 0; transform: translateY(1.5rem); transition: opacity .6s ease, transform .6s ease; }
//   [data-reveal].visible { opacity: 1; transform: translateY(0); }
//   [data-reveal-delay="1"] { transition-delay: .1s }
//   [data-reveal-delay="2"] { transition-delay: .2s }
//   [data-reveal-delay="3"] { transition-delay: .3s }
//
// Como Tailwind no genera clases de atributo, agrega esto en global.css (son solo 7 líneas).
//
// USO en cualquier componente .astro:
//   <div data-reveal> ... </div>
//   <div data-reveal data-reveal-delay="2"> ... </div>
//
//   Al final del componente:
//   <script>import "../scripts/reveal.ts"</script>

export function initReveal() {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el    = entry.target as HTMLElement;
        const delay = el.dataset.revealDelay;
        if (delay) el.style.transitionDelay = `${Number(delay) * 0.1}s`;
        el.classList.add("visible");
        observer.unobserve(el);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach((el) => observer.observe(el));
}

// Auto-init
if (typeof window !== "undefined") {
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", initReveal)
    : initReveal();
}