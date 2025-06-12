import { displayArmiesHTML, getUniqueFactions } from "../utils/armiesHTML.js";
import { searchFilter, setupSortByDate, sortArmiesByPoints, pointsSlider, resetSearch, header } from "../utils/app.js";

displayArmiesHTML();
getUniqueFactions();

searchFilter();
setupSortByDate();
sortArmiesByPoints();
pointsSlider();
resetSearch();
header();