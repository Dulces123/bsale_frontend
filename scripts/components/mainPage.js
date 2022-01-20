import appHeader from "./appHeader.js";
import DomHandler from "../domHandler.js";
import resultsComponent from "./resultsComponent.js";
import STORE from "../store.js";

const mainPage = (results) => {
  function resultMessage(number){
    if(number === 0) return 'No se encontraron productos!';
    else if (number == 1) return '1 producto encontrado!';
    else if (number >= 1) return `${number} productos encontrados!`
  }

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
      </section>
      <footer class="app-footer flex-al-jb p4-p4">
        <p>Created by Dulces Incorporated</p>
        <p>2022</p>
      </footer>`;
    },
    listeners: () => {
      appHeader.listeners();
      document.querySelector("#search-field").addEventListener("keyup", (e) => {
        const word = e.target.value.toUpperCase().trim();
        if(!word) DomHandler.render(resultsComponent(STORE.getProducts()), ".app-content");
        const filteredResults = STORE.getProducts().filter((product) =>
          product.name.toUpperCase().includes(word)
        );
        DomHandler.render(resultsComponent(filteredResults), ".app-content");
        document.querySelector(".results-count").innerText = resultMessage(filteredResults.length);
      });
    },
  };
};

export default mainPage;
