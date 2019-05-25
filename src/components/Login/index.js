import React from "react";

class Login extends React.Component {
    handleClick() {
        const {
            username,
            password
        } = this.refs

        const {
            sendLoginRequest
        } = this.props

        sendLoginRequest({
            username: username.value,
            password: password.value
        })
    }
    render() {
        return (
            <div>
                <div styleName='username'>
                    <input ref='username' type="text" defaultValue='guest' />
                </div>
                <div styleName='password'>
                    <input ref= 'password' type="password" defaultValue='guest' />
                </div>
                <button styleName='btn' onClick={this.handleClick.bind(this)}>
                    login
                </button>
            </div>
        )
    }
}

export default Login