import express from "express";
import cors from "cors";
import { createArtist, getAllArtists, updateArtist, deleteArtist, } from "./routes.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(express.static('/dist/frontend'));
app.listen(port, () => {
    console.log(`Server is running on ${port}!`);
});
app.get("/", (req, res) => {
    res.send('Hello');
});
app.get("/data", getAllArtists);
app.post("/data", createArtist);
app.put("/data/:id", updateArtist);
app.delete("/data/:id", deleteArtist);
