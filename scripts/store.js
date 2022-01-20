const STORE = (() => {
  let results = [];
  function setResults(products) {
    results = [...products];
  }

  function getResults() {
    return [...results];
  }

  return {
    setResults,
    getResults,
  };
})();
