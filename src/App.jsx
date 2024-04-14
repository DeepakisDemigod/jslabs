import React from 'react';
import './App.css';
const RoutesConfig = React.lazy(() => import('./routes/RoutesConfig.jsx'));

const App = () => {
  return (
    <>
      <RoutesConfig />
    </>
  );
};

export default App;

