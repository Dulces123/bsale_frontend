import DomHandler from "./domHandler.js";
import categoriesFetcher from "./services/categoriesFetcher.js";
import categoriesNav from "./components/categoriesNav.js";

const init = async () => {
  const categories = await categoriesFetcher.index();
  DomHandler.render(categoriesNav(categories), "nav");
};

init();
