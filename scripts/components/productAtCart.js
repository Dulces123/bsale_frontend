const productAtCard = (product) => {
  return {
    render: () => {
      return `
      <li id = ${product.id} class = "cart-product">
      <div>
        <img class = "cart-product-img" src = "${
          !product.url_image ? "../images/notavailable.png" : product.url_image
        }" alt = "product">
      </div>
      <div>
        <p>${product.name}</p>
        <p id = "product-price">${product.price}</p>
      </div>
      <div>
        <button><img id = "drop" class = "little-img" src = "../images/drop.png"></button>
        <button><img id = "less" class = "little-img"  src = "../images/less.png"></button>
        <p>Quantity:</p><p id = "product-quantity" >1</p>
        <button><img id = "more" class = "little-img"  src = "../images/more.png"></button>
      </div>
      </li>
      `;
    },
  };
};

export default productAtCard;
