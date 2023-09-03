import { getArtists } from "./helpers/restAPI.js";
import { showArtists } from "./artists/showArtists.js";
window.addEventListener("load", app);
async function app() {
    const artists = await getArtists();
    showArtists(artists);
}
