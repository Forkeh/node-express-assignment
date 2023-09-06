import { artists } from "../helpers/restAPI.js";
function changeInSortOrFilter(sortOrFilterValue) {
    const value = sortOrFilterValue;
    const sortedArtists = sort(value);
    console.table(sortedArtists);
}
function sort(value) {
    let sortedArtists;
    switch (value) {
        case "name":
        case "birthdate":
            sortedArtists = artists.sort((a, b) => a[value].localeCompare(b[value]));
            break;
        case "activeSince":
            sortedArtists = artists.sort((a, b) => Number(a[value]) - Number(b[value]));
        default:
            sortedArtists = artists;
            break;
    }
    return sortedArtists;
}
export { changeInSortOrFilter };
