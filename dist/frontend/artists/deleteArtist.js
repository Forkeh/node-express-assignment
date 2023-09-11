import { deleteArtistAPI } from "../helpers/restAPI.js";
import { closeModal } from "../helpers/modal.js";
import { refreshView } from "../helpers/helpers.js";
async function deleteArtist(artist) {
    console.log("Delete " + artist.name);
    const response = await deleteArtistAPI(artist);
    if (response.ok) {
        closeModal();
        refreshView();
    }
    else {
        console.log("Something went wrong with DELETE request");
    }
}
export { deleteArtist };
