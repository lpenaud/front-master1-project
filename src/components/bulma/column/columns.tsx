import React from "react";

import { ColumnsProps } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";

export default class Columns extends React.Component<ColumnsProps> {
  render() {
    const className = getClassName(this.props, [], "columns");
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
