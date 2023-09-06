import { artists } from "../helpers/restAPI.js";

function changeInSortOrFilter(sortOrFilterValue: string) {
    const value: string = sortOrFilterValue;
    const sortedArtists = sort(value);
    console.table(sortedArtists);
}

function sort(value: string) {
    let sortedArtists;

    switch (value) {
        case "name":
        case "birthdate":
            sortedArtists = artists.sort((a: Artist, b: Artist) =>
                a[value].localeCompare(b[value])
            );
            break;
        case "activeSince":
            sortedArtists = artists.sort(
                (a: Artist, b: Artist) => Number(a[value]) - Number(b[value])
            );

        default:
            sortedArtists = artists;
            break;
    }
    return sortedArtists;
}

export { changeInSortOrFilter };
