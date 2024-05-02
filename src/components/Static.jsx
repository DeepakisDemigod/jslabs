import React, { useState, useEffect } from 'react';
const Template = React.lazy(() => import('./Template.jsx'));

import HashLoader from 'react-spinners/HashLoader';

const Static = (props) => {
  const [isLoading, setIsLoading] = useState(true); // Start with true to show the initial loading message

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(false); // Set isLoading to false after 900ms to stop showing the loading message
      clearInterval(intervalId); // Clear the interval to prevent memory leaks
    }, 3500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Specify an empty dependency array to run this effect only once

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
            <Template files={{'/index.html': `<!DOCTYPE html>
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
}} options={{ visibleFiles: ['/index.html', '/styles.css', 'script.js'] }} template='static' />

          </React.Suspense>
        </div>
      )}
    </>
  );
};

export default Static;
