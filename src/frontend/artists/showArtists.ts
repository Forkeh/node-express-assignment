import { detailsArtist } from "./detailsArtist.js";
import { updateArtistForm } from "./updateArtist.js";
import { favoriteClick, favorites } from "./favorites.js";

function showArtists(artists: Artist[]) {
    document.querySelector("#grid-area")!.innerHTML = "";

    for (const artist of artists) {
        showArtist(artist);
    }
}

// Populates grid with artist "cards"
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

    // Turns on favorite icon, if artist is found in favorites array
    if (favorites.includes(artist.id!)) {
        document
            .querySelector("#grid-area article:last-child .item-favicon")
            ?.classList.add("favorite");
    }

    // Button event listeners
    document
        .querySelector("#grid-area article:last-child .item-btn-details")
        ?.addEventListener("click", () => {
            detailsArtist(artist);
        });

    document
        .querySelector("#grid-area article:last-child .item-btn-update")
        ?.addEventListener("click", () => {
            updateArtistForm(artist);
        });

    document
        .querySelector("#grid-area article:last-child .item-favicon")
        ?.addEventListener("click", event => {
            const heartElement: HTMLElement = event.target as HTMLElement;
            favoriteClick(heartElement, artist);
        });
}

export { showArtists };
