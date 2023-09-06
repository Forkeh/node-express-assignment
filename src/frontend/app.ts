import { getArtistsAPI, artists } from "./helpers/restAPI.js";
import { showArtists } from "./artists/showArtists.js";
import { activateButtons, populateFilterGenres } from "./helpers/helpers.js";
import { readLocalStorage } from "./artists/favorites.js";
import { read } from "fs";

window.addEventListener("load", app);

async function app() {
    const artists: Artist[] = await getArtistsAPI();

    readLocalStorage();
    showArtists(artists);
    activateButtons();
    populateFilterGenres(artists);

}
