import { armies } from "../data/armies.js";
import { fixedPoints } from "../utils/app.js";


// Récupère l'id dans l'URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const army = armies[id];

// Affiche les détails de l'armée
let armyHTML ="";

armyHTML = `<div class="hero-content">
            <h1>${army.name}</h1>
            <p class="faction"><i class="fa-solid fa-tag"></i>${army.faction}</p>
            <p class="description">${army.description}</p>
            <p class="points">${fixedPoints(army.points)} points</p>
        </div>
`
document.querySelector(".hero-js").innerHTML = armyHTML;

// Ajoute ou modifie le background-image
document.querySelector(".hero-js").style.backgroundImage = `url('${army.image}')`;

// Affichage des détails spécifiques de l'armée
let detailsHTML = "";
if (army.armyDetails) {
    detailsHTML = `<div class="army-details"><h2>Détails de l'armée</h2>`;
    if (Array.isArray(army.armyDetails)) {
        army.armyDetails.forEach(detail => {
            detailsHTML += `${detail}`;
        });
    } else if (typeof army.armyDetails === "object") {
        for (const [key, value] of Object.entries(army.armyDetails)) {
            detailsHTML += `<strong>${key} :</strong> ${value}`;
        }
    } else if (typeof army.armyDetails === "string") {
        detailsHTML += `${army.armyDetails}`;
    }
    detailsHTML += `</div>`;
} else {
    detailsHTML = `<div class="army-details"><h2>Détails de l'armée</h2><p>Aucun détail disponible.</p></div>`;
}

// Ajoute les détails sous le bloc principal
document.querySelector(".army-details").innerHTML = detailsHTML;

//Galerie de l'armée
let armyGalleryHTML = "";
if (army.gallery && Array.isArray(army.gallery) && army.gallery.length > 0) {
    armyGalleryHTML = `<div class="army-gallery">`;
    army.gallery.forEach(imgUrl => {
        armyGalleryHTML += `<img src="${imgUrl}" alt="Galerie de ${army.name}" class="gallery-img">`;
    });
    armyGalleryHTML += `</div>`;
}

// Ajoute la galerie sous le bloc principal
document.querySelector(".gallery-js").innerHTML += armyGalleryHTML;

