import DomHandler from "../domHandler.js";
import resultsComponent from "./resultsComponent.js";
import STORE from "../store.js";
import helpers from "../helpers/helpers.js";

const categoriesNav = (categories) => {
  function resultsByCategory(e) {
    const categoryId = parseInt(e.target.id);
    const filteredResults = STORE.getProducts().filter(
      (product) => product.category === categoryId
    );
    DomHandler.render(resultsComponent(filteredResults), ".app-content");
    document.querySelector(".results-count").innerText = helpers.resultMessage(
      filteredResults.length
    );
  }

  return {
    render: () => {
      return `<div class = "categories-container flex-al-ja">
      <div id = "all" class = "category-container">todos</div>
      ${categories
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
      document.querySelector("#all").addEventListener("click", () => {
        DomHandler.render(
          resultsComponent(STORE.getProducts()),
          ".app-content"
        );
        document.querySelector(".results-count").innerText =
          helpers.resultMessage(STORE.getProducts().length);
      });
    },
  };
};
export default categoriesNav;
