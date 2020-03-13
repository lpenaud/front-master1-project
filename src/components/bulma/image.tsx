import React from "react";
import { ImageProps } from "./modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

export default class Image extends React.Component<ImageProps> {
    render() {
        const className = classNames(getClassName(this.props, ["size"], "image"));
        return (
            <figure className={className}>
                <img src={this.props.src} alt={this.props.alt || ""}></img>
            </figure>
        );
    }
}