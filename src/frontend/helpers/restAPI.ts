// ========== Global variabales ========== //
const endpoint = "http://localhost:3000";
let artists: Artist[] = [];

async function getArtists() {
    const response: Response = await fetch(`${endpoint}/data`);
    artists = await response.json();
    return artists;
}

export { getArtists, artists };
