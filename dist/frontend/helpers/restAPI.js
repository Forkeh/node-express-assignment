const endpoint = "http://localhost:3000";
let artists = [];
async function getArtists() {
    const response = await fetch(`${endpoint}/data`);
    artists = await response.json();
    return artists;
}
export { getArtists, artists };
