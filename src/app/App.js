import React from 'react';
import './App.scss';
import Header from 'components/header/header.js';
import Hero from 'components/Hero/Hero.js';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header/>
        <Hero/>
      </section>
    )
  }
}

export default App;
