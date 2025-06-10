function sortArmiesByDate(order = "desc") {
    const resultList = document.getElementById('resultList');
    if (!resultList) return;
    const items = Array.from(resultList.querySelectorAll('article'));
    items.sort((a, b) => {
        const dateA = a.querySelector('.date-registered')?.textContent;
        const dateB = b.querySelector('.date-registered')?.textContent;
        if (!dateA || !dateB) return 0;
        // Format attendu : JJ/MM/AAAA
        const [dA, mA, yA] = dateA.split('/');
        const [dB, mB, yB] = dateB.split('/');
        const dateObjA = new Date(`${yA}-${mA}-${dA}`);
        const dateObjB = new Date(`${yB}-${mB}-${dB}`);
        return order === "desc" ? dateObjB - dateObjA : dateObjA - dateObjB;
    });
    // Réinjecte les articles triés dans le DOM
    items.forEach(item => resultList.appendChild(item));
}

// Trier par points
export function sortArmiesByPoints(order = "asc") {
    const resultList = document.getElementById('resultList');
    if (!resultList) return;
    const items = Array.from(resultList.querySelectorAll('article'));
    items.sort((a, b) => {
        // On suppose que le texte est du type "1,000 points" ou "1500 points"
        const pointsA = parseFloat(a.querySelector('.points')?.textContent.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        const pointsB = parseFloat(b.querySelector('.points')?.textContent.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        return order === "asc" ? pointsA - pointsB : pointsB - pointsA;
    });
    items.forEach(item => resultList.appendChild(item));
}

//Trier par date
export function setupSortByDate() {
    const sortSelect = document.getElementById("sortBy");
    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            if (this.value === "newest") {
                sortArmiesByDate("desc");
            } else if (this.value === "points_asc") {
                sortArmiesByPoints("asc");
            } else if (this.value === "points_desc") {
                sortArmiesByPoints("desc");
            } else if (this.value === "default") {
                // Réaffiche les armées dans l'ordre initial du DOM (pas de tri)
                const resultList = document.getElementById('resultList');
                if (!resultList) return;
                const items = Array.from(resultList.querySelectorAll('article'));
                items.sort((a, b) => a.dataset.index - b.dataset.index);
                items.forEach(item => resultList.appendChild(item));
            }
        });
    }
}

