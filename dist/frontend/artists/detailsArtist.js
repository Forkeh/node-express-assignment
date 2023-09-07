import { openModal, clearModal } from "../helpers/modal.js";
import { deleteArtist } from "./deleteArtist.js";
function detailsArtist(artist) {
    clearModal();
    openModal();
    const modalContent = document.querySelector("#modal-content");
    modalContent.innerHTML = `

    <h2>${artist.name}</h2>
    <div class="detail-view-wrapper">
        <aside class="detail-view-pic">
            <img src="${artist.image}"
                    alt="artist picture">
        </aside>
        <section class="detail-view-text">
            <p><b>Date of Birth:</b></p> 
            <p>${artist.birthdate}</p>
            <p><b>Active Since:</b></p>
             <p>${artist.activeSince}</p>
            <p><b>Genres:</b></p>
             <p>${artist.genres.join(", ")}</p>
            <p><b>Labels:</b></p>
             <p>${artist.labels}</p>
            <p><b>Website</b>:</p>
             <p>${artist.website}</p>
            <p><b>Description:</b></p>
            <p>${artist.shortDescription}</p>
        </section>
    </div>

    <div class="modal-btn-wrapper"><button class="btn-delete-artist">Delete artist</button></div>
    `;
    document
        .querySelector(".btn-delete-artist")
        ?.addEventListener("click", () => {
        deleteArtist(artist);
    });
}
export { detailsArtist };
