import { addArtist } from '../artists/addArtist.js';
const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector("#btn-close-modal");
const btnAddArtist = document.querySelector("#btn-add-artist");
function activateButtons() {
    btnCloseModal?.addEventListener("click", () => {
        modal.close();
    });
    btnAddArtist?.addEventListener('click', addArtist);
}
export { activateButtons };
