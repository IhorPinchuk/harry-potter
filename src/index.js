import { initApp } from "./js/init/initApp";
import { homePage } from "./js/pages/homePage";
import "./sass/main.scss";

if (window.location.pathname === "/") {
  history.replaceState({ page: "home" }, "", "/");
}

window.addEventListener("popstate", (event) => {
  const state = event.state || {};
  console.log("state", state);

  if (state?.page === "home") {
    homePage();
  } else if (state?.page === "students") {
    handleStudentsPage();
  } else if (state?.page === "staff") {
    handleStaffPage();
  } else if (state?.page === "houses") {
    handleHousesPage();
  } else {
    window.history.pushState({ page: "home" }, "", "./");

    // showErrorMessage(
    //   mainContentElem,
    //   "Сторінка не знайдена. Поверніться на головну."
    // );
  }
});

document.addEventListener("DOMContentLoaded", initApp);
