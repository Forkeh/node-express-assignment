import { getArtistsAPI, artists } from "./helpers/restAPI.js";
import { showArtists } from "./artists/showArtists.js";
import { activateButtons, populateFilterGenres } from "./helpers/helpers.js";

window.addEventListener("load", app);

async function app() {
    const artists: Artist[] = await getArtistsAPI();

    showArtists(artists);
    activateButtons();
    populateFilterGenres(artists);

}
