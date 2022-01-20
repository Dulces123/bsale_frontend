import productCard from "./productComponent.js";
import productAtCard from "./productAtCart.js";
import cartList from "./cartList.js"
import DomHandler from "../domHandler.js"
import STORE from "../store.js";

const resultsComponent = (results) => {
  function toCart(e){
    console.log(STORE.getProductsAtCart())
    const productId = parseInt(e.target.id);
    const currentProduct = STORE.getProducts().filter(product => product.id === productId)[0]
    if (STORE.getProductsAtCart().map(p => p.id).includes(productId)) return;
    STORE.addProductToCart(currentProduct);
    DomHandler.render(cartList(STORE.getProductsAtCart()),".shopping-cart");
  }

  return {
    render: () => {
      return `
      ${productAtCard(results[0]).render()}
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
