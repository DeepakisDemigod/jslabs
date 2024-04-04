import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        <div>
          <div
            
            className='font-ibm hero mt-4 min-h-screen h-[60vh] bg-base-100'
          >
            <div className='flex flex-col hero-content text-center prose'>
              <h1 className='text-5xl'>
                Learn Web <br />
                Development
              </h1>
              <div className='max-w-md'>
                <h1 className='flex flex-col justify-start items-start w-full text-center h-full p-6 m-0 pt-1 text-6xl font-bold'></h1>
                <p className='py-6'>
                  <br />
                  <span></span>
                </p>
                <div className='card bg-primary text-primary-content'>
                  <div className='card-body'>
                    <p>
                      <i className='text-base'>
                        "Learning is not attained by chance, <br /> it must be
                        sought for with ardor and <br /> attended to with
                        diligence."
                      </i>
                    </p>
                    <div className='card-actions justify-end'>
                      <span>
                        <b>- Abigail Adams</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

