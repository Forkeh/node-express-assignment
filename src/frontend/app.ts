import { getArtistsAPI, artists } from "./helpers/restAPI.js";
import { showArtists } from "./artists/showArtists.js";
import {
    initializeEventListeners,
    populateFilterGenres,
} from "./helpers/helpers.js";
import { readLocalStorage } from "./artists/favorites.js";

window.addEventListener("load", app);

// Starts app on page load
async function app() {
    const artists: Artist[] = await getArtistsAPI();

    readLocalStorage();
    showArtists(artists);
    initializeEventListeners();
    populateFilterGenres(artists);
}
