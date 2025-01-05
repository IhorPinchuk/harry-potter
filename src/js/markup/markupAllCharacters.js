import { homepageBtnElem, mainContentElem } from "../constants/elementSelectors";
import { createMarkupAllCharacters } from "../createMarkup/createMarkupAllCharacters";

export function markupAllCharacters() {
  mainContentElem.insertAdjacentHTML("beforeend", createMarkupAllCharacters());
  homepageBtnElem.removeEventListener("click", markupAllCharacters);
}