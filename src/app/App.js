import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Login from 'components/Login/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Hero/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
      
    )
  }
}

export default App;
