const nothingComponent = (() => {
  return {
    render: () => {
      return `
      <h1>0 items seleccionados 😢</h1>
      <h1 id="total">Total: $0.00</h1>
      <ul class = "cart-list column m4-m4 p4-p4">
        <img class = "nothing" src ="../images/noproducts.png" alt = "nothing">
      </ul>`;
    },
    listeners: () => {},
  };
})();

export default nothingComponent;
