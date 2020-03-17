import React from "react";
import MdiIcon from "@mdi/react";
import { FileIconProps } from "../modifiers";

export default class FileIcon extends React.Component<FileIconProps> {
  render() {
    return (
      <span className="file-icon">
        <MdiIcon path={this.props.path} />
      </span>
    );
  }
}
