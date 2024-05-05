import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';
const Template = React.lazy(() => import('../components/Template.jsx'));

const ReactJS = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(false);
      clearInterval(intervalId);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='h-[87vh] flex flex-col items-center justify-center gap-4'>
          <HashLoader color='#2563eb' />
          <span>Brewing Console...</span>
        </div>
      ) : (
        <div className='m-2 font-dm'>
          <React.Suspense
            fallback={
              <div className='h-[87vh] flex flex-col items-center justify-center gap-4 '>
                <HashLoader color='#2563eb' />
                <span>Almost Ready...</span>
              </div>
            }
          >
            <Template template='react' />
          </React.Suspense>
        </div>
      )}
    </>
  );
};

export default ReactJS;
