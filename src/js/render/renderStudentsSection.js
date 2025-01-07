import { mainContentElem } from "../constants/elementSelectors";
import { createMarkupStudentsSection } from "../createMarkup/createMarkupStudentsSection";

export function renderStudentsSection(students) {
  mainContentElem.innerHTML = createMarkupStudentsSection(students);
}