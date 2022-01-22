import productAtCard from "./productAtCart.js";
import DomHandler from "../domHandler.js";
import helpers from "../helpers/helpers.js";
import STORE from "../store.js";

const cartList = (products) => {
  function cartOptions(e) {
    const dropButton = e.target.closest("#drop");
    const moreButton = e.target.closest("#more");
    const lessButton = e.target.closest("#less");
    const cart = e.target.closest("li");
    const product = STORE.getProducts().find(
      (product) => product.id === parseInt(cart.id)
    );
    let productQuantity = cart.querySelector("#product-quantity").innerText;
    const basePrice = product.price * (1 - product.discount / 100);
  
    if (dropButton) {
      const filteredProducts = STORE.getProductsAtCart().filter(
        (product) => product.id !== parseInt(cart.id)
      );
      STORE.setProductsAtCart(filteredProducts);
      DomHandler.render(cartList(STORE.getProductsAtCart()), ".cart-list");
      if(STORE.getProductsAtCart().length === 0) {
        const nothingToShow = document.createElement("img");
        nothingToShow.src = "../images/noproducts.png";
        nothingToShow.classList.add("nothing");
        document.querySelector("ul").append(nothingToShow);
      }
    }

    if (moreButton) {
      cart.querySelector("#product-quantity").innerText =
        parseInt(productQuantity) + 1;
    }

    if (lessButton) {
      if (cart.querySelector("#product-quantity").innerText == 1) return;
      cart.querySelector("#product-quantity").innerText =
        parseInt(productQuantity) - 1;
    }
    cart.querySelector("#product-price").innerText =
      helpers.formatPrice(basePrice * parseInt(cart.querySelector("#product-quantity").innerText));
      helpers.totalAmount("#product-price");
  }

  return {
    render: () => {
      return `
        <h1>${helpers.quantityMessage(products.length)}</h1>
        <h1 id = "total">Total: $0</h1>
        ${products.map((product) => productAtCard(product).render()).join("")}
      `;
    },
    listeners: () => {
      document
        .querySelectorAll(".cart-product")
        .forEach((element) => element.addEventListener("click", cartOptions));
    },
  };
};

export default cartList;
