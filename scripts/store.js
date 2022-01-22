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

  function setProductsAtCart(products){
    productsAtCart = products;
  }

  function getProductsAtCart() {
    return productsAtCart;
  }

  function cleanCart(){
    productsAtCart = [];
  }

  return {
    setProducts,
    getProducts,
    addProductToCart,
    getProductsAtCart,
    setProductsAtCart,
    cleanCart
  };
})();

export default STORE;
