import React from 'react';
import Logo from '../../public/logo.png';

const NavbarHeader = () => {
  
  return (
    <div>
      <div className='w-full navbar flex items-center justify-between px-1 lg:px-2'>
        <div className='flex-none lg:hidden'>
          <label
            htmlFor='my-drawer-3'
            aria-label='open sidebar'
            className='btn btn-square btn-ghost'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
        </div>
        <div className='navbar-center flex-auto text-center'>
          <a
            href='/'
            className='btn btn-ghost'
          >
            <img
              src={Logo}
              alt='javalabs'
              width='30px'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarHeader;
