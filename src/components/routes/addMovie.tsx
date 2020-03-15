import React from "react";

import Container from "../bulma/container";
import Label from "components/bulma/form/label";
import Input from "components/bulma/form/control/input";
import Button from "components/bulma/form/control/button";
import Control from "components/bulma/form/control/control";
import Buttons from "components/bulma/form/buttons";
import Field from "components/bulma/form/field";

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
        }
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
                <Field>
                    <Label size="is-medium"> Titre </Label>
                    <Control hasIconLeft>
                        <Input name="title" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
                    </Control>
                </Field>
                <Field>
                    <Label size="is-medium"> Description </Label>
                    <Control hasIconLeft>
                        <Input name="description" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
                    </Control>
                </Field>
                <Field>
                    <Label size="is-medium"> Date de sortie </Label>
                    <Control hasIconLeft>
                        <Input name="releaseDate" type="text" size="is-medium" valueChanged={this.inputValueChanged} />
                    </Control>
                </Field>
                <Buttons alignment="is-centered" >
                    <Button type="submit" color="is-link" size="is-medium" onClick={this.clickAdd}> Ajouter </Button>
                </Buttons>
            </Container>
        );
    }
}