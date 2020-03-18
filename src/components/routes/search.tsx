import React from "react";
import { IMovie } from "../../../lib/models";
import Container from "components/bulma/container";
import Field from "components/bulma/form/field";
import Control from "components/bulma/form/control/control";
import Input from "components/bulma/form/control/input";
import Icon from "components/bulma/icon";
import Label from "components/bulma/form/label";
import { mdiFilmstrip, mdiChevronLeftCircleOutline } from "@mdi/js";
import ListMovies from "components/movie/list-movies";
import Title from "components/bulma/title/title";
import Columns from "components/bulma/column/columns";
import Column from "components/bulma/column/column";
import Buttons from "components/bulma/form/buttons";
import Button from "components/bulma/form/control/button";
import { findMovies } from "api/movie";
import Loading from "components/loading";

interface SearchState {
  movies: IMovie[];
  isLoading: boolean;
  title: string;
  before: string;
  after: string;
}

export default class Movie extends React.Component<{}, SearchState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      movies: [],
      isLoading: false,
      title: "",
      before: "",
      after: "",
    };
    this.search = this.search.bind(this);
    this.reset = this.reset.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
  }

  search(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.state.title && this.state.before && this.state.after) {
      this.reset();
      return;
    }
    this.setState({
      ...this.state,
      isLoading: true,
    });
    findMovies(this.state).then((movies) => {
      this.setState({
        ...this.state,
        movies,
      });
    }).catch((e) => { }).finally(() => {
      this.setState({
        isLoading: false,
      });
    });
  }

  reset() {
    this.setState({
      movies: [],
      isLoading: false,
      title: "",
      before: "",
      after: "",
    });
  }

  valueChanged(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name as "title" | "before" | "after";
    this.setState({
      ...this.state,
      [name]: e.currentTarget.value,
    });
  }

  render() {
    return (
      <Container>
        <Title>Recherche</Title>
        <form onSubmit={this.search}>
          <Field>
            <Label size="is-medium">Par titre</Label>
            <Control hasIconLeft>
              <Input name="title" type="text" size="is-medium" valueChanged={this.valueChanged} />
              <Icon path={mdiFilmstrip} position="is-left" size="is-medium" />
            </Control>
          </Field>
          <Columns>
            <Column>
              <Field>
                <Label size="is-medium">Sortis avant</Label>
                <Control hasIconLeft>
                  <Input name="before" type="date" size="is-medium" valueChanged={this.valueChanged} />
                  <Icon path={mdiChevronLeftCircleOutline} position="is-left" size="is-medium" />
                </Control>
              </Field>
            </Column>
            <Column>
              <Field>
                <Label size="is-medium">Sortis après</Label>
                <Control hasIconLeft>
                  <Input name="after" type="date" size="is-medium" valueChanged={this.valueChanged} />
                  <Icon path={mdiChevronLeftCircleOutline} position="is-left" size="is-medium" />
                </Control>
              </Field>
            </Column>
          </Columns>
          <Buttons alignment="is-centered">
            <Button color="is-success" size="is-medium" type="submit" disabled={this.state.isLoading}>Rechercher</Button>
            <Button color="is-warning" size="is-medium" type="reset" disabled={this.state.isLoading} onClick={this.reset}>Réinitialiser</Button>
          </Buttons>
        </form>
        <Loading isLoading={this.state.isLoading} />
        <ListMovies movies={this.state.movies} />
      </Container>
    );
  }
}
