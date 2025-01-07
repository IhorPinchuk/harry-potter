import { fetchStudents } from "../api";
import { charactersItemElem } from "../constants/elementSelectors";
import { showErrorMessage } from "../error/showErrorMessage";
import { renderStudentsSection } from "../render/renderStudentsSection";

export async function studentsSection() {
  try {
    const students = await fetchStudents();
    renderStudentsSection(students);
    history.pushState({ page: "students" }, "", "/students");
  } catch (error) {    
    console.error("Error fetching students:", error);

    // Відобразити повідомлення користувачу
    showErrorMessage(
      charactersItemElem(),
      "Не вдалося завантажити. Спробуйте пізніше."
    );
  }
}
