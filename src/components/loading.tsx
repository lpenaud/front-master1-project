import React from "react";
import Container from "./bulma/container";
import Button from "./bulma/form/control/button";

interface LoadingProps {
  isLoading?: boolean;
}

export default class Loading extends React.Component<LoadingProps> {
  render() {
    return (
      <Container isHidden={!this.props.isLoading} alignment="has-text-centered">
        <Button size="is-large" isRounded color="is-dark" isLoading></Button>
      </Container>
    );
  }
}
