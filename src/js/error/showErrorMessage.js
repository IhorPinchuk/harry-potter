export function showErrorMessage(elem, message) {
  if (!elem) {
    console.error(`${elem} не знайдено в DOM`);
    return;
  }

  const textError = document.createElement("p");
  textError.textContent = message;
  textError.style.color = "red";

  elem.append(textError);
}
