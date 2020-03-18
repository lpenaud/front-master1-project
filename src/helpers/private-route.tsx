import React from "react";
import auth from "api/auth";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

interface PrivateRouteProps {
  redirect: string;
}

export default class PrivateRoute extends React.Component<PrivateRouteProps> {

  constructor(props: PrivateRouteProps) {
    super(props);
    this.routeRender = this.routeRender.bind(this);
  }

  routeRender(props: RouteComponentProps<any>): React.ReactNode {
    return (auth.isAuth
      ? this.props.children
      : <Redirect push to={this.props.redirect} />
    );
  }

  render() {
    return (
      <Route render={this.routeRender} />
    );
  }
}
