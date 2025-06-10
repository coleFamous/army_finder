import { armies } from "../data/armies.js";
import { armyTag, fixedPoints } from "../utils/app.js";

// Afficher toutes les armées en HTML
export function displayArmiesHTML() {
let armiesHTML = "";

armies.forEach((army, index) => {
    armiesHTML +=`<article class="army-card" data-index="${index}" data-keywords="${army.keywords.join(' ')}">
        <div class="${armyTag(army.univers)}-tag js-army-tag">${army.univers}</div>
        <img src="${army.image}" alt="Figurines de ${army.name}">
        <div class="army-card-content">
            <div class="army-card-header">
                <h3><a href="army.html?id=${index}">${army.name}</a></h3>
                <p class="date-registered">${army.dateRegistered}</p>
            </div>
            <p class="points">${fixedPoints(army.points)} points</p>
            <ul class="army-details-list">
                <li><p class="faction"><i class="fa-solid fa-tag"></i>${army.faction}</p></li>
                <li><i class="fas fa-calendar-alt"></i>Edition: ${army.edition}</li>
                <li><i class="fa-solid fa-cart-shopping"></i><a target="_blank" href="${army.link}">Retrouver les unités</a></li>
            </ul>
            <div class="army-card-actions">
                <a href="army.html?id=${index}">Details <i class="fas fa-arrow-right"></i></a>
                <div class="icon-actions">
                    <button title="Signaler une erreur"><i class="fa-solid fa-triangle-exclamation"></i></button>
                    <button title="Ajouter aux favoris"><i class="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    </article>`
});
    
document.querySelector(".army-grid").innerHTML = armiesHTML;
}

// Récupérer toutes les factions uniques
export function getUniqueFactions() {    
const factions = [...new Set(armies.map(army => army.faction))];

const select = document.querySelector("#armyType");

// Ajouter l'option "Tout"
select.innerHTML = `<option value="">Tout</option>`;

// Ajouter les options dynamiquement
factions.forEach(faction => {
    select.innerHTML += `<option value="${faction}">${faction}</option>`;
});
}

// Affiher les armées W40K en HTML
export function displayArmiesW40KHTML() {
    const w40kArmies = armies.filter(army => armyTag(army.univers) === "w40k");
    let w40kHTML = "";

    w40kArmies.forEach((army, index) => {
        const realIndex = armies.indexOf(army);
        w40kHTML += `<article class="army-card" data-index="${index}" data-keywords="${army.keywords.join(' ')}">
            <div class="${armyTag(army.univers)}-tag js-army-tag">${army.univers}</div>
            <img src="${army.image}" alt="Figurines de ${army.name}">
            <div class="army-card-content">
                <div class="army-card-header">
                    <h3><a href="army.html?id=${realIndex}">${army.name}</a></h3>
                    <p class="date-registered">${army.dateRegistered}</p>
                </div>
                <p class="points">${fixedPoints(army.points)} points</p>
                <ul class="army-details-list">
                    <li><p class="faction"><i class="fa-solid fa-tag"></i>${army.faction}</p></li>
                    <li><i class="fas fa-calendar-alt"></i>Edition: ${army.edition}</li>
                    <li><i class="fa-solid fa-cart-shopping"></i><a target="_blank" href="${army.link}">Retrouver les unités</a></li>
                </ul>
                <div class="army-card-actions">
                    <a href="army.html?id=${realIndex}">Details <i class="fas fa-arrow-right"></i></a>
                    <div class="icon-actions">
                        <button title="Signaler une erreur"><i class="fa-solid fa-triangle-exclamation"></i></button>
                        <button title="Ajouter aux favoris"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </article>`;
    }
);
    document.querySelector(".army-grid").innerHTML = w40kHTML;
}

// Affiher les armées AoS en HTML
export function displayArmiesAOSHTML() {
    const aosArmies = armies.filter(army => armyTag(army.univers) === "aos");
    let aosHTML = "";

    aosArmies.forEach((army, index) => {
        const realIndex = armies.indexOf(army);
        aosHTML += `<article class="army-card" data-index="${index}" data-keywords="${army.keywords.join(' ')}">
            <div class="${armyTag(army.univers)}-tag js-army-tag">${army.univers}</div>
            <img src="${army.image}" alt="Figurines de ${army.name}">
            <div class="army-card-content">
                <div class="army-card-header">
                    <h3><a href="army.html?id=${realIndex}">${army.name}</a></h3>
                    <p class="date-registered">${army.dateRegistered}</p>
                </div>
                <p class="points">${fixedPoints(army.points)} points</p>
                <ul class="army-details-list">
                    <li><p class="faction"><i class="fa-solid fa-tag"></i>${army.faction}</p></li>
                    <li><i class="fas fa-calendar-alt"></i>Edition: ${army.edition}</li>
                    <li><i class="fa-solid fa-cart-shopping"></i><a target="_blank" href="${army.link}">Retrouver les unités</a></li>
                </ul>
                <div class="army-card-actions">
                    <a href="army.html?id=${realIndex}">Details <i class="fas fa-arrow-right"></i></a>
                    <div class="icon-actions">
                        <button title="Signaler une erreur"><i class="fa-solid fa-triangle-exclamation"></i></button>
                        <button title="Ajouter aux favoris"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </article>`;
    }
);
    document.querySelector(".army-grid").innerHTML = aosHTML;
}
