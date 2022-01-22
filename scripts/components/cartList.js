import productAtCard from "./productAtCart.js";
import nothingComponent from "./nothingComponent.js";
import invoiceComponent from "./invoiceComponent.js";
import DomHandler from "../domHandler.js";
import helpers from "../helpers/helpers.js";
import STORE from "../store.js";

const cartList = (products) => {
  function showInvoice(){
    document.querySelector(".cart-invoice-button").disabled = true;
    document.querySelector("dialog").style.width = "80%";
    const details = [...document.querySelectorAll("li")].map(e => [e.querySelector("#product-quantity").innerText, 
    e.querySelector("#product-name").innerText,
    e.querySelector("#product-price").innerText]);
    DomHandler.render(invoiceComponent(details), ".cart-list");
  }

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
      DomHandler.render(cartList(STORE.getProductsAtCart()), ".shopping-cart-content");
      if(STORE.getProductsAtCart().length === 0) {
        DomHandler.render(nothingComponent,".shopping-cart-content")
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
        <button class = "flex-al-jc cart-invoice-button">Generar Invoice</button>
        <ul  class = "cart-list column m4-m4 p4-p4">
          ${products.map((product) => productAtCard(product).render()).join("")}
        </ul>
      `;
    },
    listeners: () => {
      document.querySelectorAll(".cart-product")
              .forEach((element) => element.addEventListener("click", cartOptions));
      document.querySelector(".cart-invoice-button").addEventListener("click", showInvoice);
    },
  };
};

export default cartList;
