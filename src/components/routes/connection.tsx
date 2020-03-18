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
import auth from "api/auth";
import Message from "components/bulma/message";
import BackHistory from "helpers/back-history";
import { MessageProps } from "components/bulma/modifiers";

interface MessageState extends MessageProps {
  children: React.ReactNode;
  isHidden: boolean;
}

interface ConnectionState {
  login: string;
  password: string;
  message: MessageState;
  isLoading: boolean;
}

export default class Connection extends React.Component<{}, ConnectionState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      login: "",
      password: "",
      message: {
        children: "",
        isHidden: true,
      },
      isLoading: false,
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
    this.setState({
      ...this.state,
      isLoading: true,
    });
    auth.auth(this.state).then(() => {
      this.setState({
        ...this.state,
        message: {
          children: <p>Vous êtes identifé vous pouvez <BackHistory>retourner à la page précédente</BackHistory></p>,
          isHidden: false,
          color: "is-success",
          title: "Succès !",
        },
      });
    }).catch((err) => {
      const message: MessageState = {
        children: <p>Mauvais Identifiant / mot de passe</p>,
        isHidden: false,
        color: "is-danger",
        title: "Erreur !",
      };
      this.setState({
        ...this.state,
        message,
      });
    }).finally(() => {
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <Container alignment="has-text-centered">
        <Message {...this.state.message}>
          {this.state.message.children}
        </Message>
        <Field>
          <Label size="is-medium">Identifiant</Label>
          <Control hasIconLeft>
            <Input name="login" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
            <Icon path={mdiAccount} position="is-left" size="is-medium" />
          </Control>
        </Field>
        <Field>
          <Label size="is-medium">Mot de passe</Label>
          <Control hasIconLeft>
            <Input name="password" type="password" size="is-medium" valueChanged={this.inputValueChanged} />
            <Icon path={mdiLock} position="is-left" size="is-medium" />
          </Control>
        </Field>
        <Buttons alignment="is-centered">
          <Button type="submit" color="is-link" size="is-medium" isLoading={this.state.isLoading} onClick={this.clickConnection}>Connexion</Button>
        </Buttons>
      </Container>
    );
  }
}
