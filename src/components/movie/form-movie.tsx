import React from "react";
import Columns from "components/bulma/column/columns";
import Column from "components/bulma/column/column";
import Field from "components/bulma/form/field";
import Label from "components/bulma/form/label";
import Input from "components/bulma/form/control/input";
import Buttons from "components/bulma/form/buttons";
import Button from "components/bulma/form/control/button";
import Image from "components/bulma/image";
import BulmaFile from "components/bulma/file/file";
import { mdiUpload } from "@mdi/js";
import { IMovie } from "../../../lib/models";
import { FileInputElement } from "components/bulma/modifiers";

interface FormMovieState extends Omit<Partial<IMovie>, "cover"> {
  cover?: File,
}

export default class FormMovie extends React.Component<{}, FormMovieState> {

  constructor(props: {}) {
    super(props);
    this.state = {};
    this.inputValueChanged = this.inputValueChanged.bind(this);
    this.coverChanged = this.coverChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  inputValueChanged(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name as keyof FormMovieState;
    this.setState({
      ...this.state,
      [name]: e.currentTarget.value,
    });
  }

  coverChanged(e: React.ChangeEvent<FileInputElement>) {
    const { files } = e.currentTarget;
    this.setState({
      ...this.state,
      cover: files[0],
    });
  }

  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    let cover: string | JSX.Element;
    let file: JSX.Element;
    if (this.state.cover) {
      cover = <Image src={URL.createObjectURL(this.state.cover)} size="is-2by3" />;
      file = <BulmaFile
        onChange={this.coverChanged}
        icon={mdiUpload}
        color="is-link"
        size="is-fullwidth"
        label="Choisir une affiche"
        hasName
        accept={["image/png", "image/jpeg"]}
      />;
    } else {
      cover = "";
      file = <BulmaFile
        onChange={this.coverChanged}
        icon={mdiUpload}
        color="is-link"
        size="is-medium"
        isBoxed
        alignement="is-centered"
        label="Choisir une affiche"
        hasName
        accept={["image/png", "image/jpeg"]}
      />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <Columns>
          <Column>
            {cover}
            {file}
          </Column>
          <Column size="is-two-thirds">
            <Field>
              <Label size="is-medium">Titre</Label>
              <Input name="title" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
            </Field>
            <Field>
              <Label size="is-medium">Description</Label>
              <Input name="description" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
            </Field>
            <Field>
              <Label size="is-medium">Date de sortie</Label>
              <Input name="releaseDate" type="date" size="is-medium" valueChanged={this.inputValueChanged} />
            </Field>
            <Buttons alignment="is-centered">
              <Button type="submit" color="is-success" size="is-medium">Ajouter</Button>
            </Buttons>
          </Column>
        </Columns>
      </form>
    );
  }
}
