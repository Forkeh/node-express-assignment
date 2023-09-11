import { deleteArtistAPI } from "../helpers/restAPI.js";
import { closeModal } from "../helpers/modal.js";
import { refreshView } from "../helpers/helpers.js";

// Deletes artist, via DELETE API
async function deleteArtist(artist: Artist) {
    console.log("Delete " + artist.name);

    const response: Response = await deleteArtistAPI(artist);

    if (response.ok) {
        closeModal();
        refreshView();
    } else {
        console.log("Something went wrong with DELETE request");
    }
}

export { deleteArtist };
