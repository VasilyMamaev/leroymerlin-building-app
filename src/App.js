import React from 'react';
import './App.css';
import Layout from './hoc/layout/layout';
import Welcomer from './components/welcomer/welcomer';

function App() {
  return (
    <Layout>
      <Welcomer/>
    </Layout>
  );
}

export default App;
