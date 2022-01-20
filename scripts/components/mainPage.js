import appHeader from "./appHeader.js";
const mainPage = (() => {
  return {
    render: () => {
      return `
      ${appHeader.render()}
      <section class = "search-bar" style = "display: none">
        <input id = "search-field" type="search" placeholder="Product....">
      </section>
      <nav class="app-navbar" style = "display: none"></nav>
      <section class="app-content"></section>
      <footer class="app-footer flex-al-jb p4-p4">
        <p>Created by Dulces Incorporated</p>
        <p>2022</p>
      </footer>`;
    },
    listeners: () => {
      appHeader.listeners();
      document.querySelector("#search-field").addEventListener('keyup', (e) => {
        console.log(e.target.value)
      })
    },
  };
})();

export default mainPage;
