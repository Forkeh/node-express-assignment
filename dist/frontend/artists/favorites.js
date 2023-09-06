import { changeInSortOrFilter } from "./sortAndFilter.js";
let favorites = [];
function favoriteClick(heartElement, artist) {
    heartElement.classList.toggle("favorite");
    if (heartElement.classList.contains("favorite")) {
        favorites.push(artist.id);
    }
    else {
        const indexOfId = favorites.findIndex(id => id === artist.id);
        favorites.splice(indexOfId, 1);
    }
    writeLocalStorage();
    changeInSortOrFilter();
}
function writeLocalStorage() {
    const string = JSON.stringify(favorites);
    localStorage.setItem("favorites", string);
}
function readLocalStorage() {
    const retString = localStorage.getItem("favorites");
    favorites = JSON.parse(retString);
}
export { favoriteClick, readLocalStorage, favorites };
