import charactersStyle from "@/sass/components/module/CharactersSection.module.scss";
import charactersCardStyle from "@/sass/components/module/CharactersCard.module.scss";
import { menuAllCharacters } from "../data/menuAllCharacters";


export function createMarkupCharactersSection() {
  const markup = menuAllCharacters
    .map(character => 
       `<li class="${charactersStyle.characters__item}">
        <article class="characters_card">
          <img src="${character.img}" alt="${character.name}" class="${charactersCardStyle.characters__img}">           
            <button class="${charactersCardStyle.characters__btn}" data-page="${character.data}">
              ${character.name}
            </button>
            </article>
          </li>`
    )
    .join("");
  
  return `
        <section class="${charactersStyle.characters}">
        <div class="container">            
            <ul class="${charactersStyle.characters__list}">
                ${markup}
            </ul>
            </div>
        </section>
    `;
}
