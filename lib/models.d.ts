
export interface IMovie {
    id: number;
    title: string;
    releaseDate: Date;
    description: string;
    src: string;
}

export interface IPicture {
    id: number;
    cover: string;
}

export interface IMoviePicture {
    idMovie: number;
    idPicture: number;
    type: string;
}