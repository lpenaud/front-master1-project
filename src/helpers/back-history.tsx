import React from "react";
import { useHistory } from "react-router-dom";
import Button from "components/bulma/form/control/button";

export default function BackHistory(props: React.PropsWithChildren<{}>) {
  const history = useHistory();
  const handle = () => {
    history.goBack();
  };
  return (
    <Button color="is-link" isLight onClick={handle}>{props.children}</Button>
  );
}
