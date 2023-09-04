const endpoint = "http://localhost:3000";
let artists = [];
async function getArtistsAPI() {
    const response = await fetch(`${endpoint}/data`);
    artists = await response.json();
    return artists;
}
async function createArtistAPI(artist) {
    const response = await fetch(`${endpoint}/data`, {
        method: "POST",
        body: JSON.stringify(artist),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}
export { getArtistsAPI, createArtistAPI, artists };
