import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';
const Template = React.lazy(() => import('../components/Template.jsx'));

const Static = props => {
  const onConfirmRefresh = (e) => {
    e.preventDefault();
    return (event.returnValue = 'Are you sure you want to leave the page?');
  };

  window.addEventListener('beforeunload', onConfirmRefresh, { capture: true });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(false);
      clearInterval(intervalId);
    }, 3500);
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
            <Template
              files={{
                '/index.html': `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>JavaLabs</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <p>JavaLabs</p>
    <script src="script.js"></script>
    </body>
  </html>`,
                'script.js': `console.log('hello world')`
              }}
              options={{
                visibleFiles: ['/index.html', '/styles.css', 'script.js']
              }}
              template='static'
              option={{ resizablePanels: true }}
            />
          </React.Suspense>
        </div>
      )}
    </>
  );
};

export default Static;
