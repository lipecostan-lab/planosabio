// Script de Lazy Loading - Coloque em src/js/lazy-load.js
// Este script carrega as imagens com data-src quando o DOM está pronto

(function () {
  "use strict";

  // Aguardar o DOM estar pronto
  document.addEventListener("DOMContentLoaded", function () {
    loadLazyImages();

    // Se houver scroll, carregar imagens conforme aparecem na tela
    if ("IntersectionObserver" in window) {
      observeLazyImages();
    }
  });

  /**
   * Carrega todas as imagens com atributo data-src
   */
  function loadLazyImages() {
    const images = document.querySelectorAll("img[data-src]");
    images.forEach(function (img) {
      const src = img.getAttribute("data-src");
      if (src) {
        img.src = src;
        img.removeAttribute("data-src");
      }
    });
  }

  /**
   * Observa imagens que entram na viewport para carregar sob demanda
   */
  function observeLazyImages() {
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");

          if (src) {
            img.src = src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
})();
