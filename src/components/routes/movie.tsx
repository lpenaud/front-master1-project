import React from "react";

import { IMovie } from "../../../lib/models";
import Tile from "components/bulma/tile/tile";
import TileChild from "components/tile-child";

interface MovieState {
    movies: IMovie[];
    t1: IMovie[];
    t2: IMovie[];
    t3: IMovie[];
}

export default class Movie extends React.Component<{}, MovieState> {

  constructor(props: {}) {
    super(props);
    const mov: IMovie[] = [];
    mov.push(
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

    const size: number = mov.length;
    const modulo: number = mov.length % 3;
    const l: number = (size - modulo) / 3;

    let tSize1: number = l;
    let tSize2: number = l;

    if (modulo === 1) {
      tSize1++;
    } else if (modulo === 2) {
      tSize1++;
      tSize2++;
    }

    this.state = {
      movies: mov,
      t1: mov.slice(0, tSize1),
      t2: mov.slice(tSize1, tSize1 + tSize2),
      t3: mov.slice(tSize1 + tSize2),
    };

  }

  render() {
    return (
      <Tile context="is-ancestor">
        <Tile horizontalSize="is-4" isVertical context="is-parent">
          {
            this.state.t1.map((mp) => (
              <TileChild description={mp.description} title={mp.title} src={mp.src} />
            ))
          }
        </Tile>
        <Tile horizontalSize="is-4" isVertical context="is-parent">
          {
            this.state.t2.map((mp) => (
              <TileChild description={mp.description} title={mp.title} src={mp.src} />
            ))
          }
        </Tile>
        <Tile horizontalSize="is-4" isVertical context="is-parent">
          {
            this.state.t3.map((mp) => (
              <TileChild description={mp.description} title={mp.title} src={mp.src} />
            ))
          }
        </Tile>
      </Tile>
    );
  }
}
