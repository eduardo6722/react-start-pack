import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import { AuthProvider } from 'context/auth/AuthContext';

import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <PrivateRoute exact path="/" component={Dashboard} />
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default Routes;
