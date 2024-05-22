import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Coproprietes from './components/Coproprietes';
// autres imports

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/coproprietes" component={Coproprietes} />
        {/* autres routes */}
      </Switch>
    </Router>
  );
}

export default App;
