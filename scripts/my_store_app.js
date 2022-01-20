import categoriesFetcher from "./services/categoriesFetcher.js";
import productsFetcher from "./services/productsFetcher.js"
import DomHandler from "./domHandler.js";
import mainPage from "./components/mainPage.js";
import loadingPage from "./components/loadingPage.js";
import categoriesNav from "./components/categoriesNav.js";

const init = async () => {
  /*fetching products and categories*/
  const categories = await categoriesFetcher.index();
  const products = await productsFetcher.index();
  console.log(products);
  /*render laodingPage in order to avoid fetch delay*/
  DomHandler.render(loadingPage, ".app-container");
  setTimeout(() => {
    /*render mainPage */
    DomHandler.render(mainPage, ".app-container");
    DomHandler.render(categoriesNav(categories), ".app-navbar")
    window.scrollTo(0,0);
    /*remove class to render components properly*/
    document.querySelector(".app-container").classList.remove("flex-al-jc");
  }, 6000);
};

init();
