import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import createDecorator from "final-form-focus";

import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { fakeAuth } from "../../store";

class RouterLoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    login( values ) {
        const {
            username,
            password
        } = values;

        const {
            sendLoginRequest
        } = this.props

        sendLoginRequest({
            username: username,
            password: password,
            callback: () => {
                fakeAuth.authenticate();
            }
        })
    }

    cancel() {
        const { history } = this.props;

        fakeAuth.signout(() => {
            history.push("/");
        })
    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };

        const Error = {
            display: "block",
            color : "#db3d44",
            marginTop : "4px"
        };

        const focusOnError = createDecorator();

        const {
            formMessage
        } = this.props

        if ( fakeAuth.isAuthenticated ) {
          return <Redirect to={from} />;
        }
  
        return (
            <div>
                <h1>You must log in to view the page at {from.pathname}</h1>
                <Form
                    onSubmit={ this.login }
                    decorators={[focusOnError]}
                    subscription={{
                        submitting: true
                    }}
                >
                    {({ handleSubmit, values, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="username"
                                type="text"
                                component="input"
                                placeholder="Enter username"
                                validate={ value => value ? undefined : '  This is a Required Field.' }
                                subscription={{
                                    value: true,
                                    active: true,
                                    error: true,
                                    touched: true
                                }}
                            >
                            {({ input, meta, placeholder }) => (
                                <div>
                                    <div>
                                        <label>Username : </label>
                                    </div>
                                    <div className={ meta.active ? 'active' : '' } >
                                        <input {...input} placeholder={placeholder} />
                                        { meta.error && meta.touched && <div style={ Error } >{meta.error}</div> }
                                    </div>
                                </div>
                            )}
                            </Field>

                            <Field
                                name="password"
                                type="password"
                                component="input"
                                placeholder="Enter password"
                                validate={ value => value ? undefined : '  This is a Required Field.' }
                                subscription={{
                                    value: true,
                                    active: true,
                                    error: true,
                                    touched: true
                                }}
                            >
                            {({ input, meta, placeholder }) => (
                                <div>
                                    <div>
                                        <label>Password : </label>
                                    </div>
                                    <div className={ meta.active ? 'active' : '' } >
                                        <input {...input} placeholder={placeholder}  />
                                        { meta.error && meta.touched && <div style={ Error } >{meta.error}</div> }
                                    </div>
                                </div>
                            )}
                            </Field>

                            { formMessage ? <div style={ Error } >{formMessage}</div> : null }

                            <button type="button" onClick={this.cancel} >Cancel</button>{"  "}<button type="submit" disable={submitting} >Sign In</button>

                        </form>
                    )}
                </Form>
                {/* <div><br/></div>
                <form>
                <div styleName='username'>
                    <input ref='username' type="text"  />
                </div>
                <div styleName='password'>
                    <input ref='password' type="password" defaultValue='guest' />
                </div>
                { formMessage ? <div>{formMessage}</div> : null }
                <button styleName='btn' onClick={ this.login}>
                    Log in
                </button>
                </form> */}
            </div>
        );
    }
}

const RouterLogin = withRouter(RouterLoginComponent);

export {RouterLogin}