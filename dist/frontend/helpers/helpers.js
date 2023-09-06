import { addArtist } from "../artists/addArtist.js";
import { changeInSortOrFilter } from "../artists/sortAndFilter.js";
const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector("#btn-close-modal");
const btnAddArtist = document.querySelector("#btn-add-artist");
const sortDropDown = document.querySelector("#sort-dropdown");
const filterDropdown = document.querySelector("#filter-dropdown");
function activateButtons() {
    btnCloseModal?.addEventListener("click", () => {
        modal.close();
    });
    btnAddArtist?.addEventListener("click", addArtist);
    sortDropDown?.addEventListener("change", (e) => {
        const target = e.target;
        if (target) {
            changeInSortOrFilter(target.value);
        }
    });
    filterDropdown?.addEventListener("change", (e) => {
        const target = e.target;
        if (target) {
            changeInSortOrFilter(target.value);
        }
    });
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
export { activateButtons, populateFilterGenres };
