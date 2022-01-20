import appHeader from "./appHeader.js";
import productCard from "./productComponent.js";

const mainPage = (results) => {
  return {
    render: () => {
      return `
      ${appHeader.render()}
      <section class = "search-bar" style = "display: none">
        <input id = "search-field" type="search" placeholder="Product....">
      </section>
      <nav class="app-navbar"></nav>
      <p class = "results-count" >${results.length} productos disponibles!</p>
      <section class="app-content">
        ${results.map((result) => productCard(result).render()).join("")}
      </section>
      <footer class="app-footer flex-al-jb p4-p4">
        <p>Created by Dulces Incorporated</p>
        <p>2022</p>
      </footer>`;
    },
    listeners: () => {
      appHeader.listeners();
      document.querySelector("#search-field").addEventListener("keyup", (e) => {
        console.log(e.target.value);
      });
      document
        .querySelectorAll(".product-container")
        .forEach((element) =>
          element.addEventListener("click", () => alert("HERE!"))
        );
    },
  };
};

export default mainPage;
