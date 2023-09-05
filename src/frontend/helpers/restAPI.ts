// ========== Global variabales ========== //
const endpoint = "http://localhost:3000";
let artists: Artist[] = [];

async function getArtistsAPI() {
    const response: Response = await fetch(`${endpoint}/data`);
    artists = await response.json();
    return artists;
}

async function createArtistAPI(artist: Artist) {
    const response: Response = await fetch(`${endpoint}/data`, {
        method: "POST",
        body: JSON.stringify(artist),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
}

async function updateArtistAPI(artist: Artist) {
    console.log("Update Artist API");
    
    const response: Response = await fetch(`${endpoint}/data/${artist.id}`, {
        method: "PUT",
        body: JSON.stringify(artist),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
}

async function deleteArtistAPI(artist: Artist) {
    const response: Response = await fetch(`${endpoint}/data/${artist.id}`, {
        method: "DELETE",
        body: JSON.stringify(artist),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
}

export {
    getArtistsAPI,
    createArtistAPI,
    deleteArtistAPI,
    updateArtistAPI,
    artists,
};
