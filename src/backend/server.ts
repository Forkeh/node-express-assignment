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

//----- Get data ----- //
app.get("/data", async (_req, res) => {
    try {
        const data = await fs.readFile("./dist/data/data.json", "utf8");

        const users = JSON.parse(data);

        res.json(users);
    } catch (error) {
        console.log("Couldn't get file");
        console.log(error);
    }
});

//----- Start server on chosen port ----- //
app.listen(port, () => {
    console.log(`Server is running on ${port}!`);
});
