import React from "react";
import Container from "../bulma/container";
import Title from "../bulma/title/title";
import Subtitle from "../bulma/title/subtitle";

export default class Root extends React.Component {
  render() {
    return (
      <Container alignment="has-text-centered">
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
      </Container>
    );
  }
}
