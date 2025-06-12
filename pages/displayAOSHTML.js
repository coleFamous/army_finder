import { displayArmiesAOSHTML, getUniqueFactions } from "../utils/armiesHTML.js";
import { searchFilter, setupSortByDate, sortArmiesByPoints, header } from "../utils/app.js";

displayArmiesAOSHTML();
getUniqueFactions();

searchFilter();
setupSortByDate();
sortArmiesByPoints();
header();