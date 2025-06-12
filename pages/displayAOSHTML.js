import { displayArmiesAOSHTML, getUniqueFactions } from "../utils/armiesHTML.js";
import { searchFilter, setupSortByDate, sortArmiesByPoints, headerDesign } from "../utils/app.js";

displayArmiesAOSHTML();
getUniqueFactions();

searchFilter();
setupSortByDate();
sortArmiesByPoints();
headerDesign();