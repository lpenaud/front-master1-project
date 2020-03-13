import React from "react";
import { ControlProps } from "../../modifiers";
import { getClassName } from "../../../../helpers/components";
import classNames from "classnames";

export default class Control extends React.Component<ControlProps> {
  render() {
    const className = classNames(
      getClassName(this.props, [], "control"),
      {
        "has-icons-left": this.props.hasIconLeft,
        "has-icons-right": this.props.hasIconRight,
      }
    );
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}