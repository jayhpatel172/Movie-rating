export interface IMovie {
    id?: number
    name?: string;
    imageUrl?: string;
    rating?: number;
}

export class Movie implements IMovie {
    id?: number;
    name?: string;
    imageUrl?: string;
    rating?: number;
    constructor(
        id?: number,
        name?: string,
        imageUrl?: string,
        rating?: number,
    ) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.rating = rating;
    }
}