import { homepageBtnElem } from "../constants/elementSelectors";
import { markupAllCharacters } from "../markup/markupAllCharacters";

export function initApp() {
    homepageBtnElem.addEventListener("click", markupAllCharacters);
}