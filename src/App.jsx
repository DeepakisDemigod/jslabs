import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
const RoutesConfig = React.lazy(() => import('./routes/RoutesConfig.jsx'));

const App = () => {
  return (
    <Router>
      <RoutesConfig />
    </Router>
  );
};

export default App;

