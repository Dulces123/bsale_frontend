import apiFetcher from "./apiFetcher.js";

const categoriesFetcher = (() => {
  return {
    index: () => apiFetcher("categories")
  };
})();

export default categoriesFetcher;
