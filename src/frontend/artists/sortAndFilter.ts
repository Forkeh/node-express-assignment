import { artists } from "../helpers/restAPI.js";
import { showArtists } from "../artists/showArtists.js";

function changeInSortOrFilter(sortOrFilterValue: string) {
    const filteredArtists = filter();
    const sortedArtists = sort(filteredArtists);
    showArtists(sortedArtists);
}

function filter(): Artist[] {
    const value: string = (
        document.querySelector("#filter-dropdown") as HTMLInputElement
    ).value;

    const filterArray = [...artists];
    if (value === "none") return filterArray;
    return filterArray.filter(artist => artist.genres.includes(value));
}

function sort(artists: Artist[]): Artist[] {
    const value: string = (
        document.querySelector("#sort-dropdown") as HTMLInputElement
    ).value;

    const sortArray = [...artists];

    switch (value) {
        case "name":
        case "birthdate":
            sortArray.sort((a: Artist, b: Artist) =>
                a[value].localeCompare(b[value])
            );
            break;
        case "activeSince":
            sortArray.sort(
                (a: Artist, b: Artist) => Number(a[value]) - Number(b[value])
            );

        default:
            sortArray;
            break;
    }
    return sortArray;
}

export { changeInSortOrFilter };
