import React from "react";
import { withRouter } from "react-router";
import { fakeAuth } from "../../store";

class AuthButtonComponent extends React.Component {
    render() {
        const { history, username } = this.props;

        return (
            fakeAuth.isAuthenticated ? (
                <h1>
                  Welcome !{"    "}{ username ? username : '' }{" !    "}
                  <button
                    onClick={() => {
                      fakeAuth.signout(() => history.push("/"));
                    }}
                  >
                    Sign out
                  </button>
                </h1>
              ) : ( <h1>You are not logged in.</h1> )
        );
    }
}

const AuthButton = withRouter(AuthButtonComponent);

export {AuthButton}