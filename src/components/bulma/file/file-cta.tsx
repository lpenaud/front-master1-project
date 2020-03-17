import React from "react";
import { FileCtaProps } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";

export default class FileCta extends React.Component<FileCtaProps> {

    render() {
        const className = getClassName(this.props, [], "file-cta");
        return (
            <span className={className}>
                {this.props.children}
            </span>
        );
    }
}
