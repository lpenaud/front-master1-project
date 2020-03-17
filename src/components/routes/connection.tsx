import React from "react";

import { mdiAccount, mdiLock } from "@mdi/js";

import Container from "../bulma/container";
import Label from "components/bulma/form/label";
import Input from "components/bulma/form/control/input";
import Button from "components/bulma/form/control/button";
import Control from "components/bulma/form/control/control";
import Buttons from "components/bulma/form/buttons";
import Field from "components/bulma/form/field";
import Icon from "components/bulma/icon";

interface ConnectionState {
    login: string;
    password: string;
}

export default class Connection extends React.Component<{}, ConnectionState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
    this.inputValueChanged = this.inputValueChanged.bind(this);
    this.clickConnection = this.clickConnection.bind(this);
  }

  inputValueChanged(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name as keyof ConnectionState;
    this.setState({
      ...this.state,
      [name]: e.currentTarget.value,
    });
  }

  clickConnection() {
    console.log("login : " + this.state.login);
    console.log("password : " + this.state.password);
  }

  render() {
    return (
      <Container alignment="has-text-centered">
        <Field>
          <Label size="is-medium"> Identifiant </Label>
          <Control hasIconLeft>
            <Input name="login" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
            <Icon path={mdiAccount} position="is-left" size="is-medium" />
          </Control>
        </Field>
        <Field>
          <Label size="is-medium"> Mot de passe </Label>
          <Control hasIconLeft>
            <Input name="password" type="password" size="is-medium" valueChanged={this.inputValueChanged} />
            <Icon path={mdiLock} position="is-left" size="is-medium" />
          </Control>
        </Field>
        <Buttons alignment="is-centered" >
          <Button type="submit" color="is-link" size="is-medium" onClick={this.clickConnection}> Connexion </Button>
        </Buttons>
      </Container>
    );
  }
}
