const productCard = (product) => {
  return {
    render: () => {
      return `
      <div class = "product-container flex-al-jc">
        <p>${product.name}</p>
        <img class = "product-img" src = "${
          !product.url_image ? "../images/notavailable.png" : product.url_image
        }" alt = "product">
        <p>${product.price}
      </div>`;
    },
    listeners: () => {
      document
        .querySelector(".product-container")
        .addEventListener("click", () => alert("Dulces"));
    },
  };
};

export default productCard;
