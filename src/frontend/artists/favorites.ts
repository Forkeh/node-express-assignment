import { changeInSortOrFilter } from "./sortAndFilter.js";

let favorites: number[] = [];

// adds/removes favorite icon color
// adds/removes artist from favorites array
function favoriteClick(heartElement: HTMLElement, artist: Artist) {
    heartElement.classList.toggle("favorite");

    if (heartElement.classList.contains("favorite")) {
        favorites.push(artist.id!);
    } else {
        const indexOfId = favorites.findIndex(id => id === artist.id);
        favorites.splice(indexOfId, 1);
    }
    writeLocalStorage();

    changeInSortOrFilter();
}

// Saves favorites to localStorage
function writeLocalStorage() {
    const string: string = JSON.stringify(favorites);
    localStorage.setItem("favorites", string);
}

// Reads favorites from localStorage
function readLocalStorage() {
    const retString = localStorage.getItem("favorites");
    favorites = JSON.parse(retString!);
}

export { favoriteClick, readLocalStorage, favorites };
