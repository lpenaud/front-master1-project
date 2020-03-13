import React from "react";
import { getClassName } from "helpers/components";
import { LabelProps } from "../modifiers";

export default class Label extends React.Component<LabelProps> {
  render() {
    const className = getClassName(this.props, ["size"], "label");
    return (
      <label className={className}>{this.props.children}</label>
    );
  }
}
