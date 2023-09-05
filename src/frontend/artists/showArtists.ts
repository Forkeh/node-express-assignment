import { detailsArtist } from "./detailsArtist.js";
import { updateArtistForm } from "./updateArtist.js";

function showArtists(artists: Artist[]) {
    document.querySelector("#grid-area")!.innerHTML = "";

    for (const artist of artists) {
        showArtist(artist);
    }
}

function showArtist(artist: Artist) {
    const html = /*html*/ `
    <article>
            <div class="item-favicon">❤</div>
            <h3>${artist.name}</h3>
            <img src="${artist.image}"
                alt="artist picture">
            <div class="item-btns-container">
                 <button class="item-btn-details">Details</button>
                <button class="item-btn-update">Update</button>
            </div>
    </article>
    `;

    document.querySelector("#grid-area")?.insertAdjacentHTML("beforeend", html);

    document
        .querySelector("#grid-area article:last-child .item-btn-details")
        ?.addEventListener("click", () => {
            detailsArtist(artist);
            console.log(artist.name);
        });

    document
        .querySelector("#grid-area article:last-child .item-btn-update")
        ?.addEventListener("click", () => {
            updateArtistForm(artist);
            console.log("Update: " + artist.name);
        });
}

export { showArtists };
