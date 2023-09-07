import { artists } from "../helpers/restAPI.js";
import { showArtists } from "../artists/showArtists.js";
import { favorites } from "./favorites.js";
function changeInSortOrFilter() {
    const filteredArtists = filter();
    const searchedArtists = filterBySearch(filteredArtists);
    const sortedArtists = sort(searchedArtists);
    showArtists(sortedArtists);
}
function filter() {
    const value = document.querySelector("#filter-dropdown").value;
    const filterArray = [...artists];
    if (value === "none")
        return filterArray;
    if (value === "favorites")
        return filterArray.filter(artist => favorites.includes(artist.id));
    return filterArray.filter(artist => artist.genres.includes(value));
}
function filterBySearch(artists) {
    const searchValue = document.querySelector("#search-bar").value;
    const filterSearchArray = artists.filter(artist => {
        for (const key in artist) {
            if (!["name", "labels", "genres"].includes(key))
                continue;
            const value = artist[key];
            if (typeof value === "string" &&
                value.toLowerCase().includes(searchValue))
                return true;
            if (Array.isArray(value) &&
                value.some(index => index.toLowerCase().includes(searchValue)))
                return true;
        }
        return false;
    });
    return filterSearchArray;
}
function sort(artists) {
    const value = document.querySelector("#sort-dropdown").value;
    const sortArray = [...artists];
    switch (value) {
        case "name":
        case "birthdate":
            sortArray.sort((a, b) => a[value].localeCompare(b[value]));
            break;
        case "activeSince":
            sortArray.sort((a, b) => Number(a[value]) - Number(b[value]));
        default:
            sortArray;
            break;
    }
    return sortArray;
}
export { changeInSortOrFilter };
