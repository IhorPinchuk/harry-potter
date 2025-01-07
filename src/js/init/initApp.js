import { homepageBtnElem } from "../constants/elementSelectors";
import { renderCharactersSection } from "../render/renderCharactersSection";

export function initApp() {
    homepageBtnElem.addEventListener("click", renderCharactersSection);
}