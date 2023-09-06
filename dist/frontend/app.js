import { getArtistsAPI } from "./helpers/restAPI.js";
import { showArtists } from "./artists/showArtists.js";
import { activateButtons, populateFilterGenres } from "./helpers/helpers.js";
import { readLocalStorage } from "./artists/favorites.js";
window.addEventListener("load", app);
async function app() {
    const artists = await getArtistsAPI();
    readLocalStorage();
    showArtists(artists);
    activateButtons();
    populateFilterGenres(artists);
}
