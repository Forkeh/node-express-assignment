import { openModal, clearModal, closeModal } from "../helpers/modal.js";
import { createArtistAPI, artists } from "../helpers/restAPI.js";
import { showArtists } from "./showArtists.js";
import { genresToArray } from "../helpers/helpers.js";

function addArtist() {
    clearModal();
    openModal();

    const modalContent = document.querySelector("#modal-content");

    modalContent!.innerHTML = /*html*/ `

    <h2>Add Artist</h2>
    <div class="modal-form-wrapper">
    <form id="create-artist-form">
    <div class="form-grid">
            <label for="fullName">Name</label>
            <input type="text" name="fullName" id="fullName" >
            <label for="dob">Birthdate</label>
            <input type="date" name="dob" id="dob" >
            <label for="activeSince">Active Since</label>
            <input type="number" name="activeSince" id="activeSince" >
            <label for="genres">Genres</label>
            <input type="text" name="genres" id="genres" placeholder="Seperate by comma">
            <label for="labels">Labels</label>
            <input type="text" name="labels" id="labels" placeholder="Seperate by comma">
            <label for="website">Website</label>
            <input type="url" name="website" id="website" placeholder="URL">
            <label for="image">Image</label>
            <input type="url" name="image" id="image" placeholder="URL" value="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" placeholder="Short description">
    </div>

    <div class="modal-btn-wrapper"><input type="submit" class="btn-add-artist" value="Add Artist"></div>
    </form>
    
    
    </div>
    `;

    document
        .querySelector("#create-artist-form")
        ?.addEventListener("submit", createArtist);
}

async function createArtist(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form);

    const newArtist: Artist = {
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
        closeModal();
        showArtists(artists);
    } else {
        console.log("something went wrong");
    }
}

export { addArtist };
