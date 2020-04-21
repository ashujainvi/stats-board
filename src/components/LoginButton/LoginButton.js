import React from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends React.Component {

    render() {
        return (
            <Link to="/login">
                <button className="button button-primary">Login</button>
            </Link>
        )
    }
}

export default LoginButton;