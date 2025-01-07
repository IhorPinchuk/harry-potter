import { charactersAllBtnsElem } from "./constants/elementSelectors";
import listAllCharacters from "@/js/data/listAllCharacters.json"
import { studentsSection } from "./pages/studentsSection";

export function charactersBtns() {
  [...charactersAllBtnsElem()].forEach((btn) => {
    btn.addEventListener("click", handleCharactersBtns);
  });
}

function handleCharactersBtns(e) {
    const characterData = e.target.getAttribute("data-page");

    if (listAllCharacters.students === characterData) {
        studentsSection();      
      // e.currentTarget.removeEventListener("click", handleCharactersBtns);
    } else if (listAllCharacters.staff === characterData) {
        console.log("staff");
        // e.currentTarget.removeEventListener("click", handleCharactersBtns);
    } else if (listAllCharacters.houses === characterData) {
        console.log("houses");
        // e.currentTarget.removeEventListener("click", handleCharactersBtns);
    } else {
      console.error("Not found:", characterData);
    }
}
