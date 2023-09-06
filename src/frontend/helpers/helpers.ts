import { addArtist } from "../artists/addArtist.js";
import { changeInSortOrFilter } from "../artists/sortAndFilter.js";

const modal = document.querySelector("#modal") as HTMLDialogElement;
const btnCloseModal = document.querySelector("#btn-close-modal");
const btnAddArtist = document.querySelector("#btn-add-artist");
const sortDropDown = document.querySelector("#sort-dropdown");
const filterDropdown = document.querySelector("#filter-dropdown");
const searchBar = document.querySelector("#search-bar");

function activateButtons() {
    btnCloseModal?.addEventListener("click", () => {
        modal.close();
    });

    btnAddArtist?.addEventListener("click", addArtist);

    sortDropDown?.addEventListener("change", changeInSortOrFilter);

    filterDropdown?.addEventListener("change", changeInSortOrFilter);

    searchBar?.addEventListener("input", changeInSortOrFilter);
}

function populateFilterGenres(artists: Artist[]) {
    const genresSet: Set<string> = new Set();

    for (const artist of artists) {
        artist.genres.forEach(genre => {
            genresSet.add(genre);
        });
    }

    for (const genre of genresSet) {
        const html = /*html*/ `
        <option value="${genre}">${genre}</option>
        
        `;

        filterDropdown?.insertAdjacentHTML("beforeend", html);
    }

    // function convertGenreToValue(genre: string): string {
    //     let convertedString = genre.toLocaleLowerCase();
    //     if (convertedString.includes(" ")) {
    //         return convertedString.replace(" ", "-");
    //     }
    //     return convertedString;
    // }
}

export { activateButtons, populateFilterGenres };
