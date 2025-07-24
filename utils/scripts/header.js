import { headerDesign, headerActive } from "./headerDesign.js";
import { displayHeader } from "./include.js";

export function headerSetup() {
    // Modifie displayHeader pour retourner une promesse
    displayHeader().then(() => {
        headerDesign();
        headerActive();
    });
}