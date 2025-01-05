import charactersStyle from "@/sass/components/module/CharactersSection.module.scss";
import charactersCardStyle from "@/sass/components/module/CharactersCard.module.scss";
import { menuAllCharacters } from "../data/menuAllCharacters";


export function createMarkupAllCharacters() {
  const markup = menuAllCharacters
    .map((character) => {
      return `<li class="${charactersStyle.characters_item}">
        <article class="characters_card">
          <img src="${character.img}" alt="${character.name}" class="${charactersCardStyle.characters_img}">           
            <button class="${charactersCardStyle.characters_btn}" data-page="${character.data}">
              ${character.name}
            </button>
            </article>
          </li>`;
    })
    .join("");
  return `
        <section class="${charactersStyle.characters}">
        <div class="container">            
            <ul class="${charactersStyle.characters_list}">
                ${markup}
            </ul>
            </div>
        </section>
    `;
}
