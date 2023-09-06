import { deleteArtistAPI, artists } from "../helpers/restAPI.js";
import { showArtists } from "./showArtists.js";

// Deletes artist, via DELETE API
async function deleteArtist(artist: Artist) {
    console.log("Delete " + artist.name);

    const response: Response = await deleteArtistAPI(artist);

    if (response.ok) {
        showArtists(artists);
    } else {
        console.log("Something went wrong with DELETE request");
    }
}

export { deleteArtist };
