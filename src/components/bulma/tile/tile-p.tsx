import React from "react";
import { TilePProps } from "../modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

export default class TileP extends React.Component<TilePProps> {
  render() {
    const className = classNames(getClassName(this.props, ["type", "color"]));
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}


