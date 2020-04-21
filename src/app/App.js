import React from 'react';
import './App.scss';
import Header from 'components/Header/Header.js';
import Hero from 'components/Hero/Hero.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Hero/>
          </Route>
        </Switch>
      </Router>
      
    )
  }
}

export default App;
