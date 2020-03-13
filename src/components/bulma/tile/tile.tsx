import React from "react";
import { TileProps } from "../modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

export default class Tile extends React.Component<TileProps> {
    render() {
        const className = classNames(
            getClassName(this.props, ["context", "horizontalSize", "layout", "color"], "tile"),
            {
                "is-vertical": this.props.isVertical,
            }
        );
        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}
