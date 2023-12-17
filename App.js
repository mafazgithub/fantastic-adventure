import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import ProblemsList from './components/ProblemsList'; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/problems" component={ProblemsList} /> {/* Add the new route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;