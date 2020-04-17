import React from 'react';
import './App.scss';
import Header from '../components/header/header.js';

class App extends React.Component {
  render() {
    return (
      <div className="site-wrapper">
        <Header/>
      </div>
    )
  }
}

export default App;
