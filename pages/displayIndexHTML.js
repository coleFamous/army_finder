import { displayArmiesHTML, getUniqueFactions } from "../utils/armiesHTML.js";
import { searchFilter, setupSortByDate, sortArmiesByPoints, pointsSlider, resetSearch, headerDesign } from "../utils/app.js";

displayArmiesHTML();
getUniqueFactions();

searchFilter();
setupSortByDate();
sortArmiesByPoints();
pointsSlider();
resetSearch();
headerDesign();