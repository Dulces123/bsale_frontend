const productAtCard = (product) => {
  return {
    render: () => {
      return `
      <div id = ${product.id} class = "cart-product">
      <div>
        <img class = "product-img" src = "${
          !product.url_image ? "../images/notavailable.png" : product.url_image
        }" alt = "product">
      </div>
      <div>
        <p>${product.name}</p>
        <p>${product.price}</p>
      </div>
      <div>
        <button><img class = "little-img" src = "../images/drop.png"></button>
        <button><img class = "little-img"  src = "../images/less.png"></button>
        <p>Quantity:</p><p>12</p>
        <button><img class = "little-img"  src = "../images/more.png"></button>
      </div>
      </div>
      `;
    },
  };
};

export default productAtCard;
