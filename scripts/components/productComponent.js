const productCard = (product) => {
  return {
    render: () => {
      return `
      <div id = ${product.id} class = "product-container flex-al-jc column">
        <p>${product.name}</p>
        <img class = "product-img" src = "${
          !product.url_image ? "../images/notavailable.png" : product.url_image
        }" alt = "product">
        <p>${product.price}
      </div>`;
    }
  };
};

export default productCard;
