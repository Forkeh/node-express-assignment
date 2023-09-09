import express from "express";
import cors from "cors";
import {
    createArtist,
    getAllArtists,
    updateArtist,
    deleteArtist,
} from "./routes.js";

//----- Create Express app and set port -----//
const app = express();
const port = 3000;

//----- Middleware ----- //
app.use(express.json());
app.use(cors());
app.use(express.static('./dist/frontend'))


//----- Start server on chosen port ----- //
app.listen(port, () => {
    console.log(`Server is running on ${port}!`);
});

//----- GET root url ----- //
app.get("/", (req, res) => {
    res.send('Hello');
});

//----- GET list of all artists  ----- //
app.get("/data", getAllArtists);

//----- POST new artist to list of artists ----- //
app.post("/data", createArtist);

//----- PUT (overwrites/changes) existing artist in list ----- //
app.put("/data/:id", updateArtist);

//----- DELETE artist from artists list ----- //
app.delete("/data/:id", deleteArtist);
