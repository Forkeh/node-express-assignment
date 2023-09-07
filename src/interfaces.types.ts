interface Artist {
    [key: string]: string | string[] | number | undefined;
    name: string;
    birthdate: string;
    activeSince: number;
    genres: string[];
    labels: string;
    website: string;
    image: string;
    shortDescription: string;
    id?: number;
}
