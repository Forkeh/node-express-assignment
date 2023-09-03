import { openModal, clearModal, closeModal  } from "../helpers/modal.js";

function detailsArtist(artist: Artist) {
    openModal();

    const modalContent = document.querySelector('#modal-content');

    modalContent!.innerHTML = `${artist.name}`

}

export {detailsArtist}