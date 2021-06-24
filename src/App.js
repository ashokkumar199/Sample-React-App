import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import aboutus from './components/pages/aboutus';
import contact from './components/pages/contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={aboutus} />
          <Route path='/contact' component={contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
