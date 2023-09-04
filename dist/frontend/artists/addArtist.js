import { openModal, clearModal } from "../helpers/modal.js";
function addArtist() {
    clearModal();
    openModal();
    console.log("Add Artist modal");
    const modalContent = document.querySelector("#modal-content");
    modalContent.innerHTML = `

    <div class="add-view-wrapper">
    <h2>Add Artist</h2>
    <form>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" required>
    <label for="dob">Birthdate</label>
    <input type="date" name="dob" id="dob" required>
    <label for="activeSince">Active Since</label>
    <input type="number" name="activeSince" id="activeSince" required>
    <label for="genres">Genres</label>
    <input type="text" name="genres" id="genres" placeholder="Seperate by comma"required>
    <label for="website">Website</label>
    <input type="url" name="website" id="website" placeholder="URL"required>


    </form>
    
    
    </div>
    `;
}
export { addArtist };
