import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
const RoutesConfig = React.lazy(() => import('./routes/RoutesConfig.jsx'));

const App = () => {
  const { user, loginWithRedirect } = useAuth0();
  console.log("Current user", user)
  return (
    <>
      <RoutesConfig />
    </>
  );
};

export default App;
