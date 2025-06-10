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