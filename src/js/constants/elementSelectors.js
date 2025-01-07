import charactersCardStyle from "@/sass/components/module/CharactersCard.module.scss";
import charactersStyle from "@/sass/components/module/CharactersSection.module.scss"

export const mainContentElem = document.querySelector("#main-content");
export const homepageBtnElem = document.querySelector(".homepage__btn");

export const charactersAllBtnsElem = () => {
  return document.querySelectorAll(`.${charactersCardStyle.characters__btn}`);  
};

export const charactersItemElem = () => {
return document.querySelector(`.${charactersStyle.characters__item}`);
}
