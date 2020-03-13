import React from "react";
import MdiIcon from "@mdi/react";
import { IconProps } from "./modifiers";
import { getClassName } from "helpers/components";

export default class Icon extends React.Component<IconProps> {
    render() {
        const className = getClassName(this.props, ["position"], "icon");
        return (
            <span className={className}>
                <MdiIcon path={this.props.path} color={this.props.color} size={this.props.size} />
            </span>
        );
    }
}
