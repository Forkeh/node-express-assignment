import { openModal } from "../helpers/modal.js";
function detailsArtist(artist) {
    openModal();
    const modalContent = document.querySelector('#modal-content');
    modalContent.innerHTML = `${artist.name}`;
}
export { detailsArtist };
