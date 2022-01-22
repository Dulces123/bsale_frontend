import productCard from "./productComponent.js";
import cartList from "./cartList.js"
import DomHandler from "../domHandler.js"
import STORE from "../store.js";
import helpers from "../helpers/helpers.js";

const resultsComponent = (results) => {
  function animateCard(elementHTML){
    elementHTML.style.background = '#696969';
    elementHTML.style.color = 'white';
    setTimeout(() => {
      elementHTML.style.background = 'whitesmoke';
      elementHTML.style.color = 'black';
    },2000);
  }

  function toCart(e){
    if (!e.target.closest("button")) return;
    const productId = parseInt(e.target.id);
    const currentProduct = STORE.getProducts().filter(product => product.id === productId)[0]
    if (STORE.getProductsAtCart().map(p => p.id).includes(productId)) return;
    const cardContainer = e.target.closest(".product-container");
    animateCard(cardContainer);
    STORE.addProductToCart(currentProduct);
    DomHandler.render(cartList(STORE.getProductsAtCart()),".cart-list");
    helpers.totalAmount("#product-price");
  }

  return {
    render: () => {
      return `
      ${results.map((result) => productCard(result).render()).join("")}`;
    },
    listeners: () => {
      document
        .querySelectorAll(".product-container")
        .forEach((product) =>
          product.addEventListener("click", toCart)
        );
    },
  };
};

export default resultsComponent;
