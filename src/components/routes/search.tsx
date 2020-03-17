import React from "react";

import { IMovie } from "../../../lib/models";
import Tile from "components/bulma/tile/tile";
import TileChild from "components/tile-child";
import Container from "components/bulma/container";
import Field from "components/bulma/form/field";
import Control from "components/bulma/form/control/control";
import Input from "components/bulma/form/control/input";
import Icon from "components/bulma/icon";
import Label from "components/bulma/form/label";
import { mdiFilmstrip } from '@mdi/js';

interface SearchState {
    movies: IMovie[];
    displayMovies: IMovie[];
}

export default class Movie extends React.Component<{}, SearchState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            movies: [],
            displayMovies: []
        }
        this.search = this.search.bind(this);

        this.state.movies.push(
            {
                id: 1,
                title: "Parasite",
                description: "Toute la famille de Ki-taek est au chômage, et s’intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d’anglais chez les Park. C’est le début d’un engrenage incontrôlable, dont personne ne sortira véritablement indemne...",
                releaseDate: new Date(2015, 2, 25),
                src: "https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg",
            },
            {
                id: 2,
                title: "Titanic",
                description: "En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.",
                releaseDate: new Date(2015, 2, 25),
                src: "https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg",
            },
            {
                id: 3,
                title: "Parasite2",
                description: "Toute la famille de Ki-taek est au chômage, et s’intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d’anglais chez les Park. C’est le début d’un engrenage incontrôlable, dont personne ne sortira véritablement indemne...",
                releaseDate: new Date(2015, 2, 25),
                src: "https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg",
            },
        );

    }

    search(e: React.ChangeEvent<HTMLInputElement>) {

        const search: string = e.currentTarget.value;
        let tmp: IMovie[] = [];

        if (search !== "") {
            this.state.movies.forEach(element => {
                if (element.title.toLowerCase().substring(0, search.length) === search) {
                    tmp.push(element);
                }
            });
        }

        this.setState({
            movies: this.state.movies,
            displayMovies: tmp
        });
    }

    render() {
        return (
            <Container>
                <Field>
                    <Label size="is-medium" > Recherche </Label>
                    <Control hasIconLeft>
                        <Input name="title" type="text" size="is-medium" valueChanged={this.search} />
                        <Icon path={mdiFilmstrip} position="is-left" size="is-medium" />
                    </Control>
                </Field>
                <Tile context="is-ancestor">
                    <Tile horizontalSize="is-4" isVertical context="is-parent">
                    </Tile>
                    <Tile horizontalSize="is-4" isVertical context="is-parent">
                        {
                            this.state.displayMovies.map((mp) => (
                                <TileChild description={mp.description} title={mp.title} src={mp.src} />
                            ))
                        }
                    </Tile>
                    <Tile horizontalSize="is-4" isVertical context="is-parent">
                    </Tile>
                </Tile>
            </Container>
        );
    }
}