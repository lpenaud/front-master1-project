import React from "react";

import Container from "../bulma/container";
import Label from "components/bulma/form/label";
import Input from "components/bulma/form/control/input";
import Button from "components/bulma/form/control/button";
import Buttons from "components/bulma/form/buttons";
import Field from "components/bulma/form/field";
import File from "components/bulma/file/file";
import Image from "components/bulma/image";
import Columns from "components/bulma/column/columns";
import Column from "components/bulma/column/column";

interface AddMovieState {
    title: string;
    releaseDate: Date;
    description: string;
}

export default class AddMovie extends React.Component<{}, AddMovieState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      title: "",
      description: "",
      releaseDate: new Date(),
    };
    this.inputValueChanged = this.inputValueChanged.bind(this);
    this.clickAdd = this.clickAdd.bind(this);
  }

  inputValueChanged(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name as keyof AddMovieState;
    this.setState({
      ...this.state,
      [name]: e.currentTarget.value,
    });
  }

  clickAdd() {
    console.log("title : " + this.state.title);
    console.log("description : " + this.state.description);
    console.log("releaseDate : " + this.state.releaseDate);
  }

    render() {
        return (
            <Container alignment="has-text-centered">
                <Columns>
                    <Column>
                        <Image src="https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg" size="is-2by3"></Image>
                        <File fileName="Nom du fichier" />
                    </Column>
                    <Column>
                        <Field>
                            <Label size="is-medium"> Titre </Label>
                            <Input name="title" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
                        </Field>
                        <Field>
                            <Label size="is-medium"> Description </Label>
                            <Input name="description" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
                        </Field>
                        <Field>
                            <Label size="is-medium"> Date de sortie </Label>
                            <Input name="releaseDate" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
                        </Field>
                        <Buttons alignment="is-centered" >
                            <Button type="submit" color="is-link" size="is-medium" onClick={this.clickAdd}> Ajouter </Button>
                        </Buttons>
                    </Column>
                </Columns>

            </Container>
        );
    }
}
