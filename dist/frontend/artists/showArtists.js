function showArtists(artists) {
    document.querySelector("#grid-area").innerHTML = "";
    for (const artist of artists) {
        showArtist(artist);
    }
}
function showArtist(artist) {
    const html = `
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
}
export { showArtists };
