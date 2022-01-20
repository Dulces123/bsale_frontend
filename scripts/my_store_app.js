import DomHandler from "./domHandler.js";
import mainPage from "./components/mainPage.js";

const init = () => {
  DomHandler.render(mainPage, ".app-container");
};

init();
