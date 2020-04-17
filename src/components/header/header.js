import React from 'react';
import './header.scss';
import logo from 'logo.svg';
import Clock from 'components/clock/clock.js';

class Header extends React.Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Clock/>
        </header>
    )
  }
}

export default Header;
