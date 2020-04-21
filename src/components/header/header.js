import React from 'react';
import './Header.scss';
import logo from 'assets/images/stats-board-logo.svg';
import LoginButton from 'components/LoginButton/LoginButton.js';

class Header extends React.Component {
  render() {
    return (
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="stats board logo" />
            <h3>
              Stats Board
            </h3>
          </div>
          <LoginButton/>
        </header>
    )
  }
}

export default Header;
