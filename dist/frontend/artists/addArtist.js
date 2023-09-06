import { openModal, clearModal } from "../helpers/modal.js";
import { createArtistAPI, artists } from "../helpers/restAPI.js";
import { showArtists } from "./showArtists.js";
import { genresToArray } from "../helpers/helpers.js";
function addArtist() {
    clearModal();
    openModal();
    const modalContent = document.querySelector("#modal-content");
    modalContent.innerHTML = `

    <h2>Add Artist</h2>
    <div class="add-view-wrapper">
    <form id="create-artist-form">
    <div>
        <label for="fullName">Name</label>
        <input type="text" name="fullName" id="fullName" >
    </div>
    <div>
        <label for="dob">Birthdate</label>
        <input type="date" name="dob" id="dob" >
    </div>
    <div>
        <label for="activeSince">Active Since</label>
        <input type="number" name="activeSince" id="activeSince" >
    </div>
    <div>
        <label for="genres">Genres</label>
        <input type="text" name="genres" id="genres" placeholder="Seperate by comma">
    </div>
    <div>
        <label for="labels">Labels</label>
        <input type="text" name="labels" id="labels" placeholder="Seperate by comma">
    </div>
    <div>
        <label for="website">Website</label>
        <input type="url" name="website" id="website" placeholder="URL">
    </div>
    <div>
        <label for="image">Image</label>
        <input type="url" name="image" id="image" placeholder="URL">
    </div>
    <div>
        <label for="description">Description</label>
        <input type="text" name="description" id="description" placeholder="Short description">
    </div>

    <input type="submit" value="Add Artist">
    </form>
    
    
    </div>
    `;
    document
        .querySelector("#create-artist-form")
        ?.addEventListener("submit", createArtist);
}
async function createArtist(e) {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const newArtist = {
        name: form.fullName.value,
        birthdate: form.dob.value,
        activeSince: Number(form.activeSince.value),
        genres: genresToArray(form.genres.value),
        labels: form.labels.value,
        website: form.website.value,
        image: form.image.value,
        shortDescription: form.description.value,
    };
    console.log(newArtist);
    const response = await createArtistAPI(newArtist);
    if (response.ok) {
        console.log("added artist");
        showArtists(artists);
    }
    else {
        console.log("something went wrong");
    }
}
export { addArtist };
