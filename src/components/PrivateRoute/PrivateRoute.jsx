import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../../store";

class PrivateRoute extends React.Component{
    render() {
        const { component: Component, ...rest } = this.props;

        return (
          <Route {...rest} render = { props =>
              fakeAuth.isAuthenticated
              ? ( <Component {...props} /> )
              : ( <Redirect to={{pathname: "/login", state: { from: props.location }}} /> )
          } />
        );
    }
}

export {PrivateRoute}