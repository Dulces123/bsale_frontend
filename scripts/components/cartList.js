import productAtCard from "./productAtCart.js";

const cartList = (products) => {
  return {
    render: () => {
      return `
      <ul style = "display: flex, flex-direction: column">
        ${products.map(product => productAtCard(product).render()).join("")}
      </ul>
      `
    },
    listeners: () => {},
  };
};

export default cartList;
