import React from "react";
import classNames from "classnames";
import { FileProps, FileInputElement } from "../modifiers";
import { getClassName } from "helpers/components";
import FileIcon from "./file-icon";

interface FileState {
  value?: File;
}

export default class BulmaFile extends React.Component<FileProps, FileState> {

  constructor(props: FileProps) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: React.ChangeEvent<FileInputElement>) {
    const { files } = e.currentTarget;
    const value = files[0];
    if (this.props.accept && !this.props.accept.includes(value.type)) {
      return;
    }
    this.setState({
      value,
    });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const className = classNames(
      getClassName(this.props, ["size", "alignement", "color"], "file"),
      {
        "is-boxed": this.props.isBoxed,
        "has-name": this.props.hasName,
      }
    );
    const icon = this.props.icon ? <FileIcon path={this.props.icon} /> : "";
    const fileName = this.props.hasName && this.state.value
      ? <span className="file-name">{this.state.value.name}</span>
      : "";
    return (
      <div className={className}>
        <label className="file-label">
          <input defaultValue={this.props.defaultValue} accept={this.props.accept?.join()} onChange={this.onChange} className="file-input" type="file" name={this.props.name} />
          <span className="file-cta">
            {icon}
            <span className="file-label">{this.props.label}</span>
          </span>
          {fileName}
        </label>
      </div>
    );
  }
}
