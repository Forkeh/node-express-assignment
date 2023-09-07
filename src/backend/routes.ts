import fs from "fs/promises";

//----- GET list of all artists  ----- //
export async function getAllArtists(req: any, res: any) {
    try {
        const data: string = await fs.readFile("./dist/data/data.json", "utf8");

        const users: object[] = JSON.parse(data);

        res.status(200).json(users);
    } catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).send("Internal Server Error");
    }
}

//----- POST new artist to list of artists ----- //
export async function createArtist(req: any, res: any) {
    try {
        const newArtist: Artist = req.body;

        newArtist.id = new Date().getTime();

        const data: string = await fs.readFile("./dist/data/data.json", "utf8");

        const artists: Artist[] = JSON.parse(data);
        artists.push(newArtist);

        fs.writeFile("./dist/data/data.json", JSON.stringify(artists));

        res.status(201).json(artists);
    } catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).json("Internal Server Error");
    }
}

//----- PUT (overwrites/changes) existing artist in list ----- //
export async function updateArtist(req: any, res: any) {
    try {
        const id: number = Number(req.params.id);

        const data: string = await fs.readFile("./dist/data/data.json", "utf8");

        const artists: Artist[] = await JSON.parse(data);

        const artistToUpdate: Artist | undefined = artists.find(
            artist => artist.id === id
        );

        const body: Artist = req.body;

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
    } catch (error) {
        console.log("Error reading data file:", error);
        res.status(500).json("Internal Server Error");
    }
}

//----- DELETE artist from artists list ----- //
export async function deleteArtist(req: any, res: any) {
    try {
        const id: number = Number(req.params.id);

        const data: string = await fs.readFile("./dist/data/data.json", "utf8");

        const artists: Artist[] = await JSON.parse(data);

        const artistToDeleteIndex: number = artists.findIndex(
            artist => artist.id === id
        );

        if (artistToDeleteIndex > -1) {
            artists.splice(artistToDeleteIndex, 1);

            fs.writeFile("./dist/data/data.json", JSON.stringify(artists));

            res.status(200).json(artists);
        }
    } catch (error) {
        console.log("Could not find artist matching ID");
        res.status(500).json("Could not find artist matching ID");
    }
}
