import React from "react";
import { FileNameProps } from "../modifiers";
import { getClassName } from "helpers/components";

export default class FileName extends React.Component<FileNameProps> {
    render() {
        const className = getClassName(this.props, [], "file-name");
        return (
            <span className={className}>
                {this.props.children}
            </span>
        );
    }
}
