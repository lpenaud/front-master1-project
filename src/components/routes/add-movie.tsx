import React from "react";
import Container from "../bulma/container";
import FormMovie from "components/movie/form-movie";

export default class AddMovie extends React.Component {
  render() {
    return (
      <Container alignment="has-text-centered">
        <FormMovie />
      </Container>
    );
  }
}
