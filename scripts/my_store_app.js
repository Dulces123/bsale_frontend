import DomHandler from "./domHandler.js";
import categoriesFetcher from "./services/categoriesFetcher.js";
import categoriesNav from "./components/categoriesNav.js";
import appHeader from "./components/appHeader.js";

const init = async () => {
  const categories = await categoriesFetcher.index();
  // displayMenu();
  // displaySearchBar();
  // goToShoppingCart();
  // DomHandler.render(categoriesNav(categories), "nav");
  DomHandler.render(appHeader, ".app-container");
};

// const displaySearchBar = () => {
//   document.querySelector("#search").addEventListener("click", () => {
//     const searchBar = document.querySelector(".search-bar");
//     if (window.getComputedStyle(searchBar).display === "flex")
//       searchBar.style.display = "none";
//     else {
//       searchBar.style.display = "flex";
//     }
//   });
// };

// const displayMenu = () => {
//   document.querySelector("#menu").addEventListener("click", () => {
//     const navBar = document.querySelector("nav");
//     if (window.getComputedStyle(navBar).display === "block")
//       navBar.style.display = "none";
//     else {
//       navBar.style.display = "block";
//     }
//   });
// };

const goToShoppingCart = () => {}
init();
