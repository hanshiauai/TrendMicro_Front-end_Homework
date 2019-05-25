import React from "react";

class User extends React.Component {
    render() {
        const {username, token} = this.props
        return (
            <div styleName='user'>
                <div styleName='info'>
                    username: {username}
                </div>
                <div styleName='info'>
                    token: {token}
                </div>
            </div>

        )
    }
}

export default User