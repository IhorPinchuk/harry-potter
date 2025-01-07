import studentsStyle from "@/sass/components/module/StudentsSection.module.scss";
import studentCardStyle from "@/sass/components/module/StudentCard.module.scss";

export function createMarkupStudentsSection(students) {
  const markup = students
    .map(
      (student) =>
        `<li class="${studentsStyle.students__item}">
        <article class="${studentCardStyle.student__card}">
        <img class="${studentCardStyle.student__img}" src="${student.image}" alt="${student.name}"></img>
        <div class="${studentCardStyle.wrapper}">
        <h3 class="${studentCardStyle.student__name}">${student.name}</h3>
        <div class="${studentCardStyle.student__wrapper_text}">        
        <p>${student.alternate_names[0]}</p>
        <p">${student.house}</p>
        <p">${student.dateOfBirth}</p>
        </div>       
        <button class="${studentCardStyle.student__btn}" type="button">Більше інформації</button>
        </div>
        </article>
    </li>`
    )
    .join("");

  return `
            <section class="${studentsStyle.students}">
            <div class="container">
            <h2 class="${studentsStyle.students__title}">Студенти Гоґвортсу</h2>
            <ul class="${studentsStyle.students__list}">
            ${markup}
            </ul>
            </div>
            </section>
    `;
}
