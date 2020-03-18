import React from "react";
import { IMovie } from "../../../lib/models";
import Tile from "components/bulma/tile/tile";
import TileMovie from "./tile-movie";

interface ListMoviesProps {
  movies: IMovie[];
}

export default class ListMovies extends React.Component<ListMoviesProps> {
  render() {
    const size = this.props.movies.length;
    const modulo = size % 3;
    const l = (size - modulo) / 3;
    let tSize1 = l;
    let tSize2 = l;
    if (modulo === 1) {
      tSize1++;
    } else if (modulo === 2) {
      tSize1++;
      tSize2++;
    }
    const t1 = this.props.movies.slice(0, tSize1);
    const t2 = this.props.movies.slice(tSize1, tSize1 + tSize2);
    const t3 = this.props.movies.slice(tSize1 + tSize2);
    return (
      <Tile context="is-ancestor">
        <Tile horizontalSize="is-4" isVertical context="is-parent">
          {t1.map((movie) => <TileMovie key={movie.id} movie={movie} />)
          }
        </Tile>
        <Tile horizontalSize="is-4" isVertical context="is-parent">
          {t2.map((movie) => <TileMovie key={movie.id} movie={movie} />)}
        </Tile>
        <Tile horizontalSize="is-4" isVertical context="is-parent">
          {t3.map((movie) => <TileMovie key={movie.id} movie={movie} />)}
        </Tile>
      </Tile >
    );
  }
}
