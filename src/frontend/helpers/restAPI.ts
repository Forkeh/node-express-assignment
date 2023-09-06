// ========== Global variabales ========== //
const endpoint = "http://localhost:3000";
let artists: Artist[] = [];


// Get full list from backend database
async function getArtistsAPI() {
    const response: Response = await fetch(`${endpoint}/data`);
    artists = await response.json();
    return artists;
}

// Send new artist to backend database 
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

// Update artist in backend database 
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

// Delete artist in backend database 
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
