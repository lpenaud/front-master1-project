import React from "react";
import { getClassName } from "helpers/components";
import { LabelFileProps } from "../modifiers";

export default class LabelFile extends React.Component<LabelFileProps> {
  render() {
    const className = getClassName(this.props, [], "file-label");
    return (
      <label className={className}>{this.props.children}</label>
    );
  }
}
