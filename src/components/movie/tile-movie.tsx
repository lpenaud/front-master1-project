import React from "react";
import Tile from "../bulma/tile/tile";
import TileP from "../bulma/tile/tile-p";
import Image from "components/bulma/image";
import { IMovie } from "../../../lib/models";

interface TileMovieProps {
  movie: IMovie;
}

export default class TileMovie extends React.Component<TileMovieProps> {
  render() {
    const { movie } = this.props;
    return (
      <Tile context="is-child" layout="notification" color="is-dark">
        <TileP type="title" color="has-text-light">{movie.title}</TileP>
        <TileP type="subtitle" color="has-text-light">{movie.releaseDate.toLocaleDateString()}</TileP>
        <Image src={movie.cover} size="is-2by3" />
        <TileP>{movie.description}</TileP>
      </Tile>
    );
  }
}
