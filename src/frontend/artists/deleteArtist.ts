import { deleteArtistAPI, artists } from "../helpers/restAPI.js";
import { showArtists } from "./showArtists.js";
import { closeModal } from "../helpers/modal.js";

// Deletes artist, via DELETE API
async function deleteArtist(artist: Artist) {
    console.log("Delete " + artist.name);

    const response: Response = await deleteArtistAPI(artist);

    if (response.ok) {
        closeModal();
        showArtists(artists);
    } else {
        console.log("Something went wrong with DELETE request");
    }
}

export { deleteArtist };
