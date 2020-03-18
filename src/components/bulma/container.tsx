import React from "react";
import { getClassName } from "../../helpers/components";
import { TextProps } from "./modifiers";
import classNames from "classnames";

export default class Container extends React.Component<TextProps> {
  render() {
    const className = classNames(
      getClassName(this.props, ["alignment"], "container"),
      {
        "is-hidden": this.props.isHidden,
      }
    );
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
