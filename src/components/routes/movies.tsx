import React from "react";
import { IMovie } from "../../../lib/models";
import { getMovies } from "api/movie";
import ListMovies from "components/movie/list-movies";
import Loading from "components/loading";

interface MovieState {
  movies: IMovie[];
  isLoading: boolean;
}

export default class Movies extends React.Component<{}, MovieState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getMovies().then((movies) => {
      this.setState({
        ...this.state,
        movies,
      });
    }).finally(() => {
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <div>
        <Loading isLoading={this.state.isLoading} />
        <ListMovies movies={this.state.movies} />
      </div>
    );
  }
}
