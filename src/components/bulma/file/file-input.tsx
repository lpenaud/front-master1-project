import React from "react";
import { FileInputProps } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";

export default class FileInput extends React.Component<FileInputProps> {

  render() {
    const className = getClassName(this.props, ["name"], "file-input");
    return (
      <input className={className} type="file" name={this.props.name} />
    );
  }
}
