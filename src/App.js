import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Payments from './components/Payments/Payments';
import Profile from './components/Profile/Profile';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/payments" component={Payments}/>
          <Route path="/profile" component={Profile}/>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
