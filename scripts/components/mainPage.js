import appHeader from "./appHeader.js";
import DomHandler from "../domHandler.js";
import resultsComponent from "./resultsComponent.js";
import STORE from "../store.js";
import helpers from "../helpers/helpers.js";

const mainPage = (results) => {
  function searchProduct(e) {
    const word = e.target.value.toUpperCase().trim();
    if (!word)
      DomHandler.render(resultsComponent(STORE.getProducts()), ".app-content");
    const filteredResults = STORE.getProducts().filter((product) =>
      product.name.toUpperCase().includes(word)
    );
    DomHandler.render(resultsComponent(filteredResults), ".app-content");
    document.querySelector(".results-count").innerText = helpers.resultMessage(
      filteredResults.length
    );
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
      <dialog class ="shopping-cart">
        <div class = "cart-header m4-m4 flex-al-jb">
          <h1>Shopping Cart!</h1>
          <img id = "close" class = "little-img" src = "../images/close.png">
        </div>
        <div class = "shopping-cart-content m4-m4">
          <h1>0 items seleccionados 😢</h1>
          <h1 id="total">Total: $0.00</h1>
          <ul class = "cart-list column m4-m4 p4-p4">
            <img class = "nothing" src ="../images/noproducts.png" alt = "nothing">
          </ul>
        </div>
      </dialog>
      <section class="app-content">
      </section>
      <footer class="app-footer flex-al-jb p4-p4">
        <p>Created by Dulces Incorporated</p>
        <p>2022</p>
      </footer>`;
    },
    listeners: () => {
      appHeader.listeners();
      document
        .querySelector("#search-field")
        .addEventListener("keyup", searchProduct);
      document.querySelector("#close").addEventListener("click", () => {
        const shoppingCart = document.querySelector(".shopping-cart");
        shoppingCart.close();
      });
    },
  };
};

export default mainPage;
