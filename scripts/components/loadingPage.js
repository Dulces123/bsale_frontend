const loadingPage = (() => {
  return {
    render: () => {
      return `<img class = "loading" src = "../images/loading.gif" alt = "loading!">`
    },
    listeners: () => {}
  }
})();

export default loadingPage;