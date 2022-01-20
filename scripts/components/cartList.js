import productAtCard from "./productAtCart.js";

const cartList = (products) => {
  return {
    render: () => {
      return `
        ${products.map(product => productAtCard(product).render()).join("")}
      `
    },
    listeners: () => {},
  };
};

export default cartList;
