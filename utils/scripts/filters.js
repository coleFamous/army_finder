import { armyTag } from "../scripts/tools.js";

// Filtre les armées en fonction des critères de recherche
function filterArmiesOnSearch() {
    const univers = document.getElementById("armyUnivers")?.value;
    const faction = document.getElementById("armyType")?.value;
    const edition = document.getElementById("edition_search")?.value.toLowerCase().trim();
    const keywords = document.getElementById("keyword")?.value.toLowerCase().split(' ').filter(k => k);
    const pointsMin = parseInt(document.getElementById('points_min_hidden').value, 10);
    const pointsMax = parseInt(document.getElementById('points_max_hidden').value, 10);
    const resultList = document.getElementById('resultList');
    if (!resultList) return;
    const items = resultList.querySelectorAll('article');
    items.forEach(item => {
        // Univers
        const itemUnivers = item.querySelector('.js-army-tag')?.textContent;
        const tag = armyTag(itemUnivers);
        const matchUnivers = !univers || tag === univers;
        // Faction
        const itemFaction = item.querySelector('.faction')?.textContent?.toLowerCase();
        const matchFaction = !faction || (itemFaction && itemFaction.includes(faction.toLowerCase()));
        // Edition
        const editionText = item.querySelector('.army-details-list li:nth-child(2)')?.textContent.toLowerCase() || '';
        const matchEdition = !edition || editionText.includes(edition);
        // Keywords
        const itemKeywords = item.dataset.keywords.toLowerCase();
        const matchKeywords = !keywords || keywords.length === 0 || keywords.every(kw => itemKeywords.includes(kw));
        // Points d'armée
        const pointsText = item.querySelector('.points')?.textContent || '';
        const points = parseInt(pointsText.replace(/[^\d]/g, ''), 10);
        const matchPoints = (!pointsMin || points >= pointsMin) && (!pointsMax || points <= pointsMax);
        // Affichage si tout est ok
        item.style.display = (matchUnivers && matchFaction && matchEdition && matchKeywords && matchPoints) ? '' : 'none';
    });
}

// Appliquer tous les filtres uniquement lors du clic sur RECHERCHER
export function searchFilter() {
    const form = document.querySelector(".search-widget form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            filterArmiesOnSearch();
        });
    }
}

// Met à jour le slider de points et les champs associés
export function pointsSlider() {
    const minInput = document.getElementById('pointsMin');
    const maxInput = document.getElementById('pointsMax');
    const minDisplay = document.getElementById('pointsMinDisplay');
    const maxDisplay = document.getElementById('pointsMaxDisplay');
    const minHidden = document.getElementById('points_min_hidden');
    const maxHidden = document.getElementById('points_max_hidden');
    const rangeBar = document.querySelector('.points-slider-range');

    function updateSlider() {
        let min = parseInt(minInput.value, 10);
        let max = parseInt(maxInput.value, 10);
        if (min > max) {
            if (event.target === minInput) minInput.value = max;
            else maxInput.value = min;
            min = parseInt(minInput.value, 10);
            max = parseInt(maxInput.value, 10);
        }
        minDisplay.textContent = min;
        maxDisplay.textContent = max;
        minHidden.value = min;
        maxHidden.value = max;

        // Met à jour la barre colorée entre les deux curseurs
        const percentMin = ((min - 500) / (3000 - 500)) * 100;
        const percentMax = ((max - 500) / (3000 - 500)) * 100;
        rangeBar.style.left = percentMin + "%";
        rangeBar.style.width = (percentMax - percentMin) + "%";
    }

    if (minInput && maxInput) {
        minInput.addEventListener('input', updateSlider);
        maxInput.addEventListener('input', updateSlider);
        updateSlider();
}
}

// Réinitialise les filtres de recherche
export function resetSearch() {
    const resetButton = document.querySelector(".btn-reset");
    if (resetButton) {
        resetButton.addEventListener("click", function (e) {
            e.preventDefault();
            const resetInputField = (id, value) => {
                const element = document.getElementById(id);
                if (element) element.value = value;
            };

            resetInputField("armyUnivers", "");
            resetInputField("armyType", "");
            resetInputField("edition_search", "");
            resetInputField("keyword", "");
            resetInputField("pointsMin", 500);
            resetInputField("pointsMax", 3000);
            resetInputField("points_min_hidden", 500);
            resetInputField("points_max_hidden", 3000);

            // Réinitialise l'affichage du slider
            const minDisplay = document.getElementById('pointsMinDisplay');
            const maxDisplay = document.getElementById('pointsMaxDisplay');
            if (minDisplay) minDisplay.textContent = 500;
            if (maxDisplay) maxDisplay.textContent = 3000;

            // Réaffiche toutes les armées (remplace par ta fonction d'affichage globale si besoin)
            if (typeof displayArmiesHTML === "function") {
                displayArmiesHTML();
            } else {
                // Sinon, retire tous les filtres manuellement
                const resultList = document.getElementById('resultList');
                if (resultList) {
                    resultList.querySelectorAll('article').forEach(item => {
                        item.style.display = '';
                    });
                }
            }
        });
    }
}