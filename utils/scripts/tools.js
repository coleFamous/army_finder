//Récupérer l'univers pour le tag
export function armyTag(univers) {
    if (!univers) return null;
    const text = univers.trim().toLowerCase();
    if (text === "warhammer 40k") {
        return "w40k";
    } else if (text === "age of sigmar") {
        return "aos";
    }
    return null;
}

// Formate les points d'armée pour l'affichage
export function fixedPoints(points) {
    if (points <= 3) {
        return points.toFixed(3);
    } else if (points > 3) {
        return points;
    }
}
