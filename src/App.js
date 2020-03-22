import React from 'react';
import './App.css';
import Layout from './hoc/layout/layout';
import { Route, Switch } from 'react-router-dom';
import Calc from './components/calc/calc';
import DrywallPartition from './components/calc/drywall-partition/drywall-partition';
import Drywall from './components/calc/drywall/drywall';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/Calc" exact>
          <Calc/>
        </Route>
        <Route path="/Calc/DrywallPartition">
          <DrywallPartition/>
        </Route>
        <Route path="/Calc/Drywall">
          <Drywall/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
