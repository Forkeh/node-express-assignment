import { openModal } from "../helpers/modal.js";
function detailsArtist(artist) {
    openModal();
    const modalContent = document.querySelector("#modal-content");
    modalContent.innerHTML = `

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
    `;
}
export { detailsArtist };
