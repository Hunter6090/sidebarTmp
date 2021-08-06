import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import home from './pages/home';
import Introduction from './pages/Introduction';
import member_introduction from './pages/member_introduction';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={home} /> //Need add 'exact' to switch component of display.
          <Route path='/Introduction' exact component={Introduction} />
          <Route path='/member_introduction' exact component={member_introduction} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
