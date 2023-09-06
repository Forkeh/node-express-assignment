import { artists } from "../helpers/restAPI.js";
import { showArtists } from "../artists/showArtists.js";
import { favorites } from "./favorites.js";

// Executes whenever sort of filter is changed
function changeInSortOrFilter() {
    const filteredArtists = filter();
    const sortedArtists = sort(filteredArtists);
    showArtists(sortedArtists);
}

// filters artists by dropdown value
function filter(): Artist[] {
    const value: string = (
        document.querySelector("#filter-dropdown") as HTMLInputElement
    ).value;

    const filterArray = [...artists];
    if (value === "none") return filterArray;
    if (value === "favorites")
        return filterArray.filter(artist => favorites.includes(artist.id!));
    return filterArray.filter(artist => artist.genres.includes(value));
}

// function filterBySearch(artists: Artist[]) {
//     const searchValue: string = (
//         document.querySelector("#search-bar") as HTMLInputElement
//     ).value;

//     const filterSearchArray = artists.filter(artist => {
//         Object.entries(artist).map(([key, value]) => {
//             if (!["name", "genres", "labels"].includes(key)) return

//             if(value.contains(searchValue))
//             console.log(value);

//         });
//     });

//     return artists;
// }

// Sorts artists by dropdown value
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
