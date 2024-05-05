import React from 'react';

const Home = () => {
  
  return (
    <>
      <div className='font-ibm'>
        <div>
          <div className='mt-4 min-h-screen h-[60vh] bg-base-100'>
            <div className='flex flex-col prose'>
              <h2 className='mx-4'>Home</h2>
              <div className='flex flex-wrap gap-2 w-full p-2 mx-2'>
                <a href='/static'>
                  <button className='btn bg-primary'>+ Create Static</button>
                </a>
                <a href='/node'>
                  <button className='btn bg-primary'>+ Create Node</button>
                </a>
                <a href='/react'>
                  <button className='btn bg-primary'>+ Create React</button>
                </a>
                <a href='/vanilla'>
                  <button className='btn bg-primary'>+ Create Vanilla</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
