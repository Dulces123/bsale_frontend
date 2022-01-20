import productCard from "./productComponent.js";

const resultsComponent = (results) => {
  return {
    render: () => {
      return `
      ${results.map((result) => productCard(result).render()).join("")}`;
    },
    listeners: () => {
      document
        .querySelectorAll(".product-container")
        .forEach((product) =>
          product.addEventListener("click", () => alert("H"))
        );
    },
  };
};

export default resultsComponent;
