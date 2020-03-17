import React from "react";
import MdiIcon from "@mdi/react";
import { FileIconProps } from "../modifiers";
import { getClassName } from "helpers/components";

export default class FileIcon extends React.Component<FileIconProps> {
    render() {
        const className = getClassName(this.props, [], "file-icon");
        return (
            <span className={className}>
                <MdiIcon path={this.props.path} />
            </span>
        );
    }
}
