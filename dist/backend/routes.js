import fs from "fs/promises";
export async function getAllArtists(req, res) {
    try {
        const data = await fs.readFile("./dist/data/data.json", "utf8");
        const users = JSON.parse(data);
        res.status(200).json(users);
    }
    catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).send("Internal Server Error");
    }
}
export async function createArtist(req, res) {
    try {
        const newArtist = req.body;
        newArtist.id = new Date().getTime();
        const data = await fs.readFile("./dist/data/data.json", "utf8");
        const artists = JSON.parse(data);
        artists.push(newArtist);
        fs.writeFile("./dist/data/data.json", JSON.stringify(artists));
        res.status(201).json(artists);
    }
    catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).json("Internal Server Error");
    }
}
export async function updateArtist(req, res) {
    try {
        const id = Number(req.params.id);
        const data = await fs.readFile("./dist/data/data.json", "utf8");
        const artists = await JSON.parse(data);
        const artistToUpdate = artists.find(artist => artist.id === id);
        const body = req.body;
        if (artistToUpdate) {
            artistToUpdate.name = body.name;
            artistToUpdate.birthdate = body.birthdate;
            artistToUpdate.activeSince = body.activeSince;
            artistToUpdate.genres = body.genres;
            artistToUpdate.labels = body.labels;
            artistToUpdate.website = body.website;
            artistToUpdate.image = body.image;
            artistToUpdate.shortDescription = body.shortDescription;
        }
        fs.writeFile("./dist/data/data.json", JSON.stringify(artists));
        res.status(201).json(artists);
    }
    catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).json("Internal Server Error");
    }
}
export async function deleteArtist(req, res) {
    try {
        const id = Number(req.params.id);
        const data = await fs.readFile("./dist/data/data.json", "utf8");
        const artists = await JSON.parse(data);
        const artistToDeleteIndex = artists.findIndex(artist => artist.id === id);
        if (artistToDeleteIndex > -1) {
            artists.splice(artistToDeleteIndex, 1);
            fs.writeFile("./dist/data/data.json", JSON.stringify(artists));
            res.status(200).json(artists);
        }
    }
    catch (error) {
        console.log("Could not find artist matching ID");
        res.status(500).json("Could not find artist matching ID");
    }
}
