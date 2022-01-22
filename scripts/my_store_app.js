import categoriesFetcher from "./services/categoriesFetcher.js";
import productsFetcher from "./services/productsFetcher.js";
import STORE from "./store.js";
import DomHandler from "./domHandler.js";
import mainPage from "./components/mainPage.js";
import loadingPage from "./components/loadingPage.js";
import categoriesNav from "./components/categoriesNav.js";
import resultsComponent from "./components/resultsComponent.js";

const init = async () => {
  /*fetching products and categories*/
  const categories = await categoriesFetcher.index();
  const products = await productsFetcher.index();
  /*saving products in STORE object*/
  STORE.setProducts(products);
  /*render laodingPage in order to avoid fetch delay*/
  DomHandler.render(loadingPage, ".app-container");
  setTimeout(() => {
    /*render mainPage */
    DomHandler.render(mainPage(products), ".app-container");
    DomHandler.render(categoriesNav(categories), ".app-navbar");
    DomHandler.render(resultsComponent(products), ".app-content");
    window.scrollTo(0, 0);
    /*remove class to render components properly*/
    document.querySelector(".app-container").classList.remove("flex-al-jc");
  }, 6000);
};

init();
