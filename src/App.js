import React from 'react';
import './App.css';
import Layout from './hoc/layout/layout';
import { Route, Switch } from 'react-router-dom';
import CalcNav from './components/calc/calc-nav';
import CalcContainer from './components/calc/calc-container';
import Welcomer from './components/welcomer/welcomer';
import LastCalcsContainer from './components/last-calcs/last-calcs-container';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/Welcomer">
          <Welcomer/>
        </Route>
        <Route path="/Calc" exact>
          <CalcNav/>
        </Route>
        <Route path="/Calc/:calcId">
          <CalcContainer/>
        </Route>
        <Route path="/LastCalcs">
          <LastCalcsContainer/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
