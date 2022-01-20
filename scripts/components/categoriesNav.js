import DomHandler from "../domHandler.js";
import resultsComponent from "./resultsComponent.js";
import STORE from "../store.js";
import helpers from "../helpers/helpers.js"

const categoriesNav = (categories) => {
  function resultsByCategory(e) {
    const categoryId = parseInt(e.target.id);
    const filteredResults = STORE.getProducts().filter(product => product.category === categoryId)
    DomHandler.render(resultsComponent(filteredResults),".app-content")
    document.querySelector(".results-count").innerText = helpers.resultMessage(filteredResults.length);
  }

  return {
    render: () => {
      return `<div class = "categories-container flex-al-ja">${categories
        .map(
          (category) =>
            `<div class = "category-container" id = ${category.id}>${category.name}</div>`
        )
        .join("")}</div>`;
    },
    listeners: () => {
      document
        .querySelectorAll(".category-container")
        .forEach((element) =>
          element.addEventListener("click", resultsByCategory)
        );
    },
  };
};
export default categoriesNav;
