import { openModal, clearModal, closeModal } from "../helpers/modal.js";
import { updateArtistAPI } from "../helpers/restAPI.js";
import { genresToArray, refreshView } from "../helpers/helpers.js";
function updateArtistForm(artist) {
    clearModal();
    openModal();
    const modalContent = document.querySelector("#modal-content");
    modalContent.innerHTML = `

    <h2>Update Artist</h2>
    <div class="modal-form-wrapper">
    <form id="update-artist-form">
        <div class="form-grid">
            <label for="fullName">Name</label>
            <input type="text" name="fullName" id="fullName" value="${artist.name}">
            <label for="dob">Birthdate</label>
            <input type="date" name="dob" id="dob" value="${artist.birthdate}">
            <label for="activeSince">Active Since</label>
            <input type="number" name="activeSince" id="activeSince" value="${artist.activeSince}">
            <label for="genres">Genres</label>
            <input type="text" name="genres" id="genres" placeholder="Seperate by comma" value="${artist.genres}">
            <label for="labels">Labels</label>
            <input type="text" name="labels" id="labels" placeholder="Seperate by comma" value="${artist.labels}">
            <label for="website">Website</label>
            <input type="url" name="website" id="website" placeholder="URL" value="${artist.website}">
            <label for="image">Image</label>
            <input type="url" name="image" id="image" placeholder="URL" value="${artist.image}">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" placeholder="Short description" value="${artist.shortDescription}">
        </div>

    <div class="modal-btn-wrapper"><input type="submit" class="btn-update-artist" value="Update Artist">
    </form>
    
    
    </div>
    `;
    document
        .querySelector("#update-artist-form")
        ?.addEventListener("submit", updateArtist);
    async function updateArtist(e) {
        e.preventDefault();
        const form = e.target;
        const updatedArtist = {
            name: form.fullName.value,
            birthdate: form.dob.value,
            activeSince: Number(form.activeSince.value),
            genres: genresToArray(form.genres.value),
            labels: form.labels.value,
            website: form.website.value,
            image: form.image.value,
            shortDescription: form.description.value,
            id: artist.id,
        };
        const response = await updateArtistAPI(updatedArtist);
        if (response.ok) {
            console.log("update response ok");
            closeModal();
            refreshView();
        }
        else {
            console.log("something went wrong");
        }
    }
}
export { updateArtistForm };
