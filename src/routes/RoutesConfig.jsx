import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Suspense Fallback Spinner */
import { HashLoader } from 'react-spinners';

/* Navbar, Footer and NotFound Components */
const Navbar = lazy(() => import('../components/Navbar.jsx'));
const Footer = lazy(() => import('../components/Footer.jsx'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound.jsx'));

// Import lazy-loaded components
const Home = lazy(() => import('../pages/home/Home'));

const RoutesConfig = () => {
  const paths = {
    home: 'https://javalabs.vercel.app/',
    notFound: 'https://javalabs.vercel.app/*'
  };

  return (
    <>
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
            path={paths.notFound}
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default RoutesConfig;

