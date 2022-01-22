import DomHandler from "../domHandler.js"
import nothingComponent from "./nothingComponent.js"
import payPlatform from "./payPlatform.js"
import STORE from "../store.js";
import cartList from "./cartList.js"
import helpers from "../helpers/helpers.js";

const invoiceComponent = (details) => {
  function backToCart(){
    document.querySelector('dialog').style.width = '40%';
    DomHandler.render(cartList(STORE.getProductsAtCart()),".shopping-cart-content");
    helpers.totalAmount("#product-price");
  }

  function payProducts(){
    DomHandler.render(payPlatform,".shopping-cart-content");
  }

  return {
    render: () => {
      return`
      <table class="default">
        <tr>
          <th class = "table-text">Cantidad</th>
          <th class = "table-text">Descripcion</th>
          <th class = "table-text">Importe</th>
        </tr>
        ${details.map(details => `<tr><td class = "table-text">${details[0]}</td><td class = "table-text">${details[1]}</td><td class = "table-text">${details[2]}</td></tr>`).join('')}
      </table>
      <div class="flex-al-ja">
        <button class = "big-button bg-red white-text" id = "back">Volver</button>
        <button class = "big-button bg-green" id = "pay">Pagar</button>
      </div>
      `;
    },
    listeners: () => {
      document.querySelector('#back').addEventListener('click', backToCart);
      document.querySelector('#pay').addEventListener('click',payProducts);
    },
  };
};

export default invoiceComponent;
