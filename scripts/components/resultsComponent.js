import productCard from "./productComponent.js";
import STORE from "../store.js";

const resultsComponent = (results) => {
  function toCart(e){
    const productId = e.target.id
    const currentProduct = STORE.getProducts().filter(product => product.id === parseInt(productId))
    STORE.addProductToCart(currentProduct)
    console.log(STORE.getProductsAtCart());
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
