import React from "react";
import { FileLabelProps } from "../modifiers";
import { getClassName } from "helpers/components";

export default class FileLabel extends React.Component<FileLabelProps> {
    render() {
        const className = getClassName(this.props, [], "file-label");
        return (
            <span className={className}>
                {this.props.children}
            </span>
        );
    }
}
