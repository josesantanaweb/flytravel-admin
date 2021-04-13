import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Payments from './components/Payments/Payments';
import Reservations from './components/Reservations/Reservations';
import Profile from './components/Profile/Profile';
import Passengers from './components/Passengers/Passengers';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/reservations" component={Reservations}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/passengers" component={Passengers}/>
          <Route path="/payments" component={Payments}/>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
