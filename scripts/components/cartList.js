import productAtCard from "./productAtCart.js";
import DomHandler from "../domHandler.js"
import STORE from "../store.js"

const cartList = (products) => {
  function cartOptions(e) {
    const dropButton = e.target.closest('#drop')
    const cart = e.target.closest('li')
    if(dropButton){
      const currentId = parseInt(cart.id);
      const filteredProducts = STORE.getProductsAtCart().filter(product => product.id !== currentId);
      STORE.setProductsAtCart(filteredProducts);
      console.log(STORE.getProductsAtCart())
      DomHandler.render(cartList(STORE.getProductsAtCart()),".cart-list");
    }else{

    }
  }

  return {
    render: () => {
      return `
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
