import React, { Suspense } from 'react';
import './App.css';
import Layout from './hoc/layout/layout';
import { Route, Switch } from 'react-router-dom';
import CalcNav from './components/calc/calc-nav';
import CalcContainer from './components/calc/calc-container';
import Welcomer from './components/welcomer/welcomer';
import LastCalcsContainer from './components/last-calcs/last-calcs-container';
import Order from './components/order/order';
const Learn = React.lazy(() => import('./components/learn/learn'));

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Welcomer/>
        </Route>
        <Route path="/Calc" exact>
          <CalcNav/>
        </Route>
        <Route path="/Calc/:calcId">
          <CalcContainer/>
        </Route>
        <Route path="/Learn">
          <Suspense fallback={<div>Загрузка...</div>}>
            <Learn/>
          </Suspense>
        </Route>
        <Route path="/Order">
          <Order/>
        </Route>
        <Route path="/LastCalcs">
          <LastCalcsContainer/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
