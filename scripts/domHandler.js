const DomHandler = (() => {
  return {
    render: (elementHTML, _container) => {
      const container = document.querySelector(_container);
      container.innerHTML = elementHTML.render();
      // elementHTML.listeners();
    },
  };
})();

export default DomHandler;
