import React from "react";
import Container from "../bulma/container";
import FormMovie from "components/movie/form-movie";
import PrivateRoute from "helpers/private-route";

export default class AddMovie extends React.Component {
  render() {
    return (
      <PrivateRoute redirect="/connection">
        <Container alignment="has-text-centered">
          <FormMovie />
        </Container>
      </PrivateRoute>
    );
  }
}
