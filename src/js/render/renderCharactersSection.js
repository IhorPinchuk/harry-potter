import { charactersBtns } from "../charactersBtns";
import {
  homepageBtnElem,
  mainContentElem,
} from "../constants/elementSelectors";
import { createMarkupCharactersSection } from "../createMarkup/createMarkupCharactersSection";

export function renderCharactersSection() {
  mainContentElem.insertAdjacentHTML(
    "beforeend",
    createMarkupCharactersSection()
  );
  homepageBtnElem.removeEventListener("click", renderCharactersSection);

  charactersBtns();
}
