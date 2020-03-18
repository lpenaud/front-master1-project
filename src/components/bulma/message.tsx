import React from "react";
import { MessageProps } from "./modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

export default class Message extends React.Component<MessageProps> {
  render() {
    const className = classNames(
      getClassName(this.props, ["color", "size"], "message"),
      {
        "is-hidden": this.props.isHidden,
      }
    );
    const header = this.props.title ? (
      <div className="message-header">
        <p>{this.props.title}</p>
        <button className="delete" aria-label="delete" onClick={this.props.onDelete}></button>
      </div>
    ) : "";
    return (
      <article className={className}>
        {header}
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    );
  }
}
