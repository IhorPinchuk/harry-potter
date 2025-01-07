import { mainContentElem } from "../constants/elementSelectors";
import { createMarkupCharactersSection } from "../createMarkup/createMarkupCharactersSection";

export function homePage() {
    const markup = `
    <section class="homepage">
        <div class="homepage__bg">
        <div class="container">
        <h1 class="homepage__title">Ласкаво просимо <br>у світ Гаррі Поттера</h1>
        <button class="homepage__btn" type="button">Показати всіх персонажів</button>        
      </div>
      </div>
      </section>
      ${createMarkupCharactersSection()}`;
    
    mainContentElem.innerHTML = markup;
}