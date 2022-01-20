const STORE = (() => {
  let products = [];
  function setProducts(_products) {
    products = _products;
  }

  function getProducts() {
    return products;
  }

  return {
    setProducts,
    getProducts,
  };
})();

export default STORE;