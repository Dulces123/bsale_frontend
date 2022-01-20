const STORE = (() => {
  let products = [];
  let productsAtCart = [];
  function setProducts(_products) {
    products = _products;
  }

  function getProducts() {
    return products;
  }

  function addProductToCart(_product) {
    productsAtCart = [...productsAtCart, _product];
  }

  function getProductsAtCart() {
    return productsAtCart;
  }

  return {
    setProducts,
    getProducts,
    addProductToCart,
    getProductsAtCart,
  };
})();

export default STORE;
