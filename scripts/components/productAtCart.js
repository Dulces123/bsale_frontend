import helpers from "../helpers/helpers.js";

const productAtCard = (product) => {
  return {
    render: () => {
      return `
      <li id = ${product.id} class = "cart-product">
      <div class = "m4-m4">
        <img class = "cart-product-img" src = "${
          !product.url_image ? "../images/notavailable.png" : product.url_image
        }" alt = "product">
      </div>
      <div class = "flex-jc column">
        <p id = "product-name">${product.name}</p>
        <p id = "product-price">${helpers.formatPrice(helpers.priceWithDiscount(product.price, product.discount))}</p>
      </div>
      <div class = "flex-al-jb options g12">
        <div class = "flex-al-jc g4">
          <img id = "less" class = "little-img"  src = "../images/less.png">
          <p id = "product-quantity" >1</p>
          <img id = "more" class = "little-img"  src = "../images/more.png">
        </div>
        <img id = "drop" class = "little-img" src = "../images/drop.png">
      </div>
      </li>
      `;
    },
  };
};

export default productAtCard;
