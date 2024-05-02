import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Suspense Fallback Spinner */
import { HashLoader } from 'react-spinners';

/* Navbar, Footer and NotFound Components */
const Navbar = lazy(() => import('../components/Navbar.jsx'));
const Footer = lazy(() => import('../components/Footer.jsx'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound.jsx'));

// Import lazy-loaded components
const Home = lazy(() => import('../pages/home/Home'));
const Static = lazy(() => import('../components/Static.jsx'));
const ReactJS = lazy(() => import('../components/ReactJS.jsx'));

const RoutesConfig = () => {
  const paths = {
    home: '/',
    static: '/static',
    react: '/react',
    notFound: '/*'
  };

  return (
    <>
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <div className='flex justify-center items-center h-screen'>
              <HashLoader color='#3b82f6' />
            </div>
          }
        >
          <Routes>
            <Route
              path={paths.home}
              element={<Home />}
            />
            <Route
              path={paths.static}
              element={<Static />}
            />
            <Route
              path={paths.react}
              element={<ReactJS />}
            />
            <Route
              path={paths.notFound}
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default RoutesConfig;
