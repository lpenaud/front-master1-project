import React from "react";

import { mdiUpload } from "@mdi/js";

import { FileProps } from "../modifiers";
import { getClassName } from "helpers/components";
import LabelFile from "./label-file";
import FileInput from "./file-input";
import FileCta from "./file-cta";
import FileIcon from "./file-icon";
import FileName from "./file-name";
import FileLabel from "./file-label";

export default class File extends React.Component<FileProps> {
  render() {
    const className = getClassName(this.props, ["size", "fileName"], "file has-name");
    return (
      <div className={className}>
        <LabelFile>
          <FileInput name="resume" />
          <FileCta>
            <FileIcon path={mdiUpload} />
            <FileLabel>
                            Choisissez un fichier...
            </FileLabel>
          </FileCta>
          <FileName>
            {this.props.fileName}
          </FileName>
        </LabelFile>
      </div>
    );
  }
}
