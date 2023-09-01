import fs from "fs/promises";
import express from "express";
import cors from "cors";

//----- Create Express app and set port -----//
const app = express();
const port = 3000;

//----- Middleware ----- //
app.use(express.json());
app.use(cors());

//
app.get("/", (_req, res) => {
    res.send("Root route! 🔥");
});

//----- GET data ----- //
app.get("/data", async (_req, res) => {
    try {
        const data: string = await fs.readFile("./dist/data/data.json", "utf8");

        const users: object[] = JSON.parse(data);

        res.json(users);
    } catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).send("Internal Server Error");
    }
});

//----- POST data ----- //
app.post("/data", async (req, res) => {
    const newArtist = req.body;
    newArtist.id = new Date().getTime();

    const data: string = await fs.readFile("./dist/data/data.json", "utf8");

    const artists: object[] = JSON.parse(data);
    artists.push(newArtist);

    fs.writeFile("./dist/data/data.json", JSON.stringify(artists));
    res.json(artists);
});

//----- Start server on chosen port ----- //
app.listen(port, () => {
    console.log(`Server is running on ${port}!`);
});
