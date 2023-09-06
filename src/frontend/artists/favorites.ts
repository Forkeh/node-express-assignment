import { changeInSortOrFilter } from "./sortAndFilter.js";

let favorites: number[] = [];

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

function writeLocalStorage() {
    const string: string = JSON.stringify(favorites);
    localStorage.setItem("favorites", string);
}

function readLocalStorage() {
    const retString = localStorage.getItem("favorites");
    favorites = JSON.parse(retString!);
}

export { favoriteClick, readLocalStorage, favorites };
