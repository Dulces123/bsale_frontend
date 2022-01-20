import productCard from "./productComponent.js";
import cartList from "./cartList.js"
import DomHandler from "../domHandler.js"
import STORE from "../store.js";

const resultsComponent = (results) => {
  function toCart(e){
    const productId = parseInt(e.target.id);
    const currentProduct = STORE.getProducts().filter(product => product.id === productId)[0]
    if (STORE.getProductsAtCart().map(p => p.id).includes(productId)) return;
    STORE.addProductToCart(currentProduct);
    DomHandler.render(cartList(STORE.getProductsAtCart()),".cart-list");
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
