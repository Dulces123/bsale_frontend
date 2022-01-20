const appHeader = (() => {
  const displaySearchBar = () => {
    document.querySelector("#search").addEventListener("click", () => {
      const searchBar = document.querySelector(".search-bar");
      if (window.getComputedStyle(searchBar).display === "flex")
        searchBar.style.display = "none";
      else {
        searchBar.style.display = "flex";
      }
    });
  };
  
  const displayMenu = () => {
    document.querySelector("#menu").addEventListener("click", () => {
      const navBar = document.querySelector("nav");
      if (window.getComputedStyle(navBar).display === "block")
        navBar.style.display = "none";
      else {
        navBar.style.display = "block";
      }
    });
  };

  const goToShoppingCart = () => {}

  return {
    render: () => {
      return `<header class="app-header flex-al-jb p4-p4">
      <h1>My Online Store!</h1>
      <div class = "buttons-container">
        <img id = "search" src="../images/search.svg" alt="search" />
        <img id = "menu" src="../images/menu.svg" alt="menu" />
        <img id = "cart" src="../images/cart.svg" alt="cart" />
      </div>
    </header>`;
    },
    listeners: () => {
      displayMenu();
      displaySearchBar();
      goToShoppingCart();
    }
  };
})();

export default appHeader;