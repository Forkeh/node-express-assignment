import fs from "fs/promises";
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Root route! 🔥");
});
app.get("/data", async (req, res) => {
    try {
        const data = await fs.readFile("./dist/data/data.json", "utf8");
        const users = JSON.parse(data);
        res.json(users);
    }
    catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/data", async (req, res) => {
    try {
        const newArtist = req.body;
        newArtist.id = new Date().getTime();
        const data = await fs.readFile("./dist/data/data.json", "utf8");
        const artists = JSON.parse(data);
        artists.push(newArtist);
        fs.writeFile("./dist/data/data.json", JSON.stringify(artists));
        res.json(artists);
    }
    catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.put("/data/:id", async (req, res) => {
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
    res.send(artists);
});
app.delete("/data/:id", async (req, res) => {
    const id = Number(req.params.id);
    console.log(id);
    const data = await fs.readFile("./dist/data/data.json", "utf8");
    const artists = await JSON.parse(data);
    const artistToDeleteIndex = artists.findIndex(artist => artist.id === id);
    if (artistToDeleteIndex > -1) {
        artists.splice(artistToDeleteIndex, 1);
        fs.writeFile("./dist/data/data.json", JSON.stringify(artists));
        res.send(artists);
    }
    else {
        console.log("Could not find artist matching ID");
        res.send("Could not find artist matching ID");
    }
});
app.listen(port, () => {
    console.log(`Server is running on ${port}!`);
});
