import { deleteArtistAPI, artists } from "../helpers/restAPI.js";
import { showArtists } from "./showArtists.js";
async function deleteArtist(artist) {
    console.log("Delete " + artist.name);
    const response = await deleteArtistAPI(artist);
    if (response.ok) {
        showArtists(artists);
    }
    else {
        console.log("Something went wrong with DELETE request");
    }
}
export { deleteArtist };
