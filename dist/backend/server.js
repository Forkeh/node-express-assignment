import fs from "fs/promises";
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/", (_req, res) => {
    res.send("Root route! 🔥");
});
app.get("/data", async (_req, res) => {
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
    const newArtist = req.body;
    newArtist.id = new Date().getTime();
    const data = await fs.readFile("./dist/data/data.json", "utf8");
    const artists = JSON.parse(data);
    artists.push(newArtist);
    fs.writeFile("./dist/data/data.json", JSON.stringify(artists));
    res.json(artists);
});
app.listen(port, () => {
    console.log(`Server is running on ${port}!`);
});
