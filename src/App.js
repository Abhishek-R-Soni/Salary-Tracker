import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SalaryForm from './components/form';
import Navbar from '../src/Navbar';
import  Index from './components/statement/index';
import  index from './components/analysis/index';
import Logout from './components/OAuth/Logout';

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <Navbar />
        <Switch>
          <Route path="/" exact component={SalaryForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/statement" component={Index} />
          <Route path="/analysis" component={index} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;