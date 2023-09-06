import { addArtist } from "../artists/addArtist.js";
import { changeInSortOrFilter } from "../artists/sortAndFilter.js";
const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector("#btn-close-modal");
const btnAddArtist = document.querySelector("#btn-add-artist");
const sortDropDown = document.querySelector("#sort-dropdown");
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
}
export { activateButtons };
