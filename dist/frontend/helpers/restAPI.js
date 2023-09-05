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
async function updateArtistAPI(artist) {
    console.log("Update Artist API");
    const response = await fetch(`${endpoint}/data/${artist.id}`, {
        method: "PUT",
        body: JSON.stringify(artist),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}
async function deleteArtistAPI(artist) {
    const response = await fetch(`${endpoint}/data/${artist.id}`, {
        method: "DELETE",
        body: JSON.stringify(artist),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}
export { getArtistsAPI, createArtistAPI, deleteArtistAPI, updateArtistAPI, artists, };
