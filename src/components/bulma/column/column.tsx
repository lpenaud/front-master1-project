import React from "react";

import { ColumnProps } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";

export default class Column extends React.Component<ColumnProps> {
  render() {
    const className = getClassName(this.props, ["size"], "column");
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
