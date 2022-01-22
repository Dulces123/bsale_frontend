import helpers from "../helpers/helpers.js";
const productCard = (product) => {
  return {
    render: () => {
      return `
      <div id = ${product.id} class = "product-container flex-al-jc column g2">
        <p>${product.name}</p>
        <img class = "product-img" src = "${
          !product.url_image ? "../images/notavailable.png" : product.url_image
        }" alt = "product">
        <p>${helpers.formatPrice(product.price)}</p>
        <p class = "product-discount">${product.discount > 0 ? product.discount + "%" + " de descuento" : "sin descuento😅"}</p>
        <div class = "flex-al-jc g4">
          <label>Enviar al carrito</label>
          <button class = "cart-button flex-al-jc p4-p4" id = ${product.id}>To Cart</button>
        </div>
      </div>`;
    }
  };
};

export default productCard;
