import apiFetcher from "./apiFetcher.js";

const productsFetcher = (() => {
  return {
    index: () => apiFetcher("products")
  }
})();

export default productsFetcher;