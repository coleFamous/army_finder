import { headerDesign } from "./headerDesign.js";

export function displayHeader() {
  return new Promise((resolve) => {
    function includeHTML() {
      const elements = document.querySelectorAll('[data-include]');
      let pending = elements.length;
      if (pending === 0) resolve();
      elements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
          .then(response => {
            if (!response.ok) throw new Error('Fichier non trouvé');
            return response.text();
          })
          .then(data => {
            el.innerHTML = data;
            if (file === "header.html") {
              headerDesign(); // Applique le design après l’inclusion du header
            }
            pending--;
            if (pending === 0) resolve();
          })
          .catch(err => {
            el.innerHTML = `<p style="color:red;">Erreur : ${err.message}</p>`;
            pending--;
            if (pending === 0) resolve();
          });
      });
    }
    document.addEventListener('DOMContentLoaded', includeHTML);
  });
}