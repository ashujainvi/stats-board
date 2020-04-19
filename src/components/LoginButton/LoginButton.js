import React from 'react';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date()});
    }
    render() {
        return (
            <button className="button button-primary">{this.state.date.toLocaleTimeString()}</button>
        )
    }
}

export default LoginButton;