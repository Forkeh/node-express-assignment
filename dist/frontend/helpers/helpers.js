import { addArtist } from "../artists/addArtist.js";
import { changeInSortOrFilter } from "../artists/sortAndFilter.js";
const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector("#btn-close-modal");
const btnAddArtist = document.querySelector("#btn-add-artist");
const sortDropDown = document.querySelector("#sort-dropdown");
const filterDropdown = document.querySelector("#filter-dropdown");
const searchBar = document.querySelector("#search-bar");
function initializeEventListeners() {
    btnCloseModal?.addEventListener("click", () => {
        modal.close();
    });
    btnAddArtist?.addEventListener("click", addArtist);
    sortDropDown?.addEventListener("change", changeInSortOrFilter);
    filterDropdown?.addEventListener("change", changeInSortOrFilter);
    searchBar?.addEventListener("input", changeInSortOrFilter);
}
function populateFilterGenres(artists) {
    const genresSet = new Set();
    for (const artist of artists) {
        artist.genres.forEach(genre => {
            genresSet.add(genre);
        });
    }
    for (const genre of genresSet) {
        const html = `
        <option value="${genre}">${genre}</option>
        
        `;
        filterDropdown?.insertAdjacentHTML("beforeend", html);
    }
}
function genresToArray(genres) {
    const arr = genres.split(",").map(el => el.trim());
    return arr;
}
function scrollToTop() {
    console.log("scroll");
    window.scrollTo({ top: 0, behavior: "smooth" });
}
export { initializeEventListeners, populateFilterGenres, genresToArray, scrollToTop };
