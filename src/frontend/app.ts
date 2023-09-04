import { getArtists, artists } from "./helpers/restAPI.js";
import { showArtists } from "./artists/showArtists.js";
import { activateButtons } from "./helpers/helpers.js";

window.addEventListener("load", app);

async function app() {
    const artists: Artist[] = await getArtists();
    // console.table(artists);

    showArtists(artists);
    activateButtons();

}
