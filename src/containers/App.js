import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Redirect, withRouter, Switch } from "react-router-dom";

import Login from "../components/Login";
import Loading from "../components/Loading";
import User from "../components/User";
import Container from "../components/Container";
import {AuthButton} from "../components/AuthButton";
import {Public} from "../components/Public";
import {Protected} from "../components/Protected";
import {NoPage} from "../components/NoPage";
import {RouterLogin} from "../components/RouterLogin";
import {PrivateRoute} from "../components/PrivateRoute";

import {loginRequest, loginCancel, loginSucess} from "../actions/login.js";
import { fakeAuth } from "../store";

class App extends React.Component {

    render() {
        const {login, dispatch} = this.props;
        const {status, username, token, error} = login;
        const sendLoginRequest = ({username, password, callback}) => dispatch(loginRequest({username, password, callback}))
        const cancel = () => { fakeAuth.clearAuthTimeout(); dispatch(loginCancel()); }

        // console.log(`In App status: ${ status }`);

        // let element = null;

        // switch( status ) {
        //     case 'init':
        //         element = <Login sendLoginRequest={sendLoginRequest} />;
        //         break;
        //     case 'loading':
        //         element = <Loading cancel={cancel}/>;
        //         break;
        //     case 'logined':
        //         element = <User {...{username, token}}/>;
        //         break;
        //     case 'error':
        //         element = <div>{error}</div>;
        //         break;
        //     default:
        //         console.log(`In App.js - Exception Status`);
        // }

        // return (
        //     element
        // )

        return (
            status === 'loading' ?
            <Container>
                <Loading cancel={cancel}/>
            </Container> :
            <BrowserRouter>
                <Container>
                    <AuthButton username={username} />
                    <ul style={{ listStyleType: "none" }} >
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>
                    <Switch>
                        {/* <Route exact path="/" component={ Public } /> */}
                        <Route path="/public" component={ Public } />
                        <Route path='/login' render={(props) => <RouterLogin {...props} sendLoginRequest={sendLoginRequest} formMessage={error} />} />
                        <PrivateRoute path="/protected" component={Protected} />
                        {/* <Route component={NoPage} /> */}
                    </Switch>
                </Container>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const {login} = state;
    return {login};
}

export default connect(mapStateToProps)(App)