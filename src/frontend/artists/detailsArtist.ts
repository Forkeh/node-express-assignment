import { openModal, clearModal, closeModal } from "../helpers/modal.js";
import { deleteArtist } from "./deleteArtist.js";

function detailsArtist(artist: Artist) {
    clearModal();
    openModal();

    const modalContent = document.querySelector("#modal-content");

    modalContent!.innerHTML = /*html*/ `

    <div class="detail-view-wrapper">
        <h2>${artist.name}</h2>
        <img src="${artist.image}"
                alt="artist picture">
        <p><b>Date of Birth:</b> ${artist.birthdate}</p>
        <p><b>Active Since:</b> ${artist.activeSince}</p>
        <p><b>Genres:</b> ${artist.genres.join(", ")}</p>
        <p><b>Labels:</b> ${artist.labels}</p>
        <p><b>Website</b>: ${artist.website}</p>
        <p><b>Description:</b> ${artist.shortDescription}</p>
    </div>

    <button class="btn-delete-artist">Delete artist</button>
    `;

    document
        .querySelector(".btn-delete-artist")
        ?.addEventListener("click", () => {
            deleteArtist(artist);
        });
}

export { detailsArtist };
