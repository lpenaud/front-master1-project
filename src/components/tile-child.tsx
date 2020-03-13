import React from "react";
import Tile from "./bulma/tile/tile";
import TileP from "./bulma/tile/tile-p";
import Image from "components/bulma/image";

interface TileChildProps {
    title: string;
    src: string;
    description: string;
}

export default class TileChild extends React.Component<TileChildProps> {
    render() {
        return (
            <Tile context="is-child" layout="notification" color="is-dark">
                <TileP type="title" color="has-text-light">{this.props.title}</TileP>
                <Image src={this.props.src} size="is-2by3" />
                <TileP>{this.props.description}</TileP>
            </Tile>
        );
    }
}
