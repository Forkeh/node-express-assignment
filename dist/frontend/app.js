import { initializeEventListeners, refreshView } from "./helpers/helpers.js";
import { readLocalStorage } from "./artists/favorites.js";
window.addEventListener("load", app);
async function app() {
    refreshView();
    readLocalStorage();
    initializeEventListeners();
}
