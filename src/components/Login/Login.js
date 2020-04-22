import React from 'react';
import './Login.scss';
import Canvas from 'components/Canvas/Canvas';

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <Canvas/>
                <h1>Login Page</h1>
                <p>Our tool allows you to put all your data at your fingertips within a single central hub.   
                     <span className="color-blue">Stats Board</span> improves the quality of your data by harmonizing all datasets into a consistent format.
                </p>
                <button className="button button-primary">Log me in</button>
            </div>
        )
    }
}

export default Login;