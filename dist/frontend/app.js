import { getArtistsAPI } from "./helpers/restAPI.js";
import { showArtists } from "./artists/showArtists.js";
import { activateButtons } from "./helpers/helpers.js";
window.addEventListener("load", app);
async function app() {
    const artists = await getArtistsAPI();
    showArtists(artists);
    activateButtons();
}
