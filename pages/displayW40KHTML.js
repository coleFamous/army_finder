import { displayArmiesW40KHTML, getUniqueFactions } from "../utils/armiesHTML.js";
import { searchFilter, setupSortByDate, sortArmiesByPoints } from "../utils/app.js";

displayArmiesW40KHTML();
getUniqueFactions();

searchFilter();
setupSortByDate();
sortArmiesByPoints();