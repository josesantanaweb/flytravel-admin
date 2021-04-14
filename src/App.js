import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Payments from './components/Payments/Payments';
import Reservations from './components/Reservations/Reservations';
import History from './components/History/History';
import Profile from './components/Profile/Profile';
import Passengers from './components/Passengers/Passengers';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Reservations}/>
          <Route exact path="/history" component={History}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/payments" component={Payments}/>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
