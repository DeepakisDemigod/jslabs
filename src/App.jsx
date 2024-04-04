import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
const RoutesConfig = React.lazy(() => import('./routes/RoutesConfig.jsx'));

const App = () => {
  return (
    <Router basename='javalabs.vercel.app/'>
      <RoutesConfig />
    </Router>
  );
};

export default App;

