import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Introduction from './pages/Introduction/Introduction';
import Member from './pages/Member/Member';
import AboutPid from './pages/AboutPid/AboutPid'
import Method from './pages/Method/Method';
import Process from './pages/Process/Process';
import Architecture from './pages/Architecture/Architecture';
import Results from './pages/Results/Results';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} /> //Need add 'exact' to switch component of display.
          <Route path='/introduction' exact component={Introduction} />
          <Route path='/member' exact component={Member} />
          <Route path='/aboutpid' exact component={AboutPid} />
          <Route path='/method' exact component={Method} />
          <Route path='/process' exact component={Process} />
          <Route path='/architecture' exact component={Architecture} />
          <Route path='/results' exact component={Results} />
          // <Route path='/member' exact component={Member} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
