import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} /> //Need add 'exact' to switch component of display.
          <Route path='/products' exact component={Products} />
          <Route path='/reports' exact component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
