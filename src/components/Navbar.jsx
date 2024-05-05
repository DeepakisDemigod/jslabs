import React, { useState } from 'react';
const NavbarHeader = React.lazy(() => import('../ui/NavbarHeader.jsx'));
const NavbarSidebar = React.lazy(() => import('../ui/NavbarSidebar.jsx'));

const Navbar = () => {
  return (
    <div>
      <div className='drawer'>
        <input
          id='my-drawer-3'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content flex flex-col'>
          {/* Navbar */}
          <NavbarHeader />
          {/* Page content here */}
        </div>
        <div className='drawer-side z-10'>
          <label
            htmlFor='my-drawer-3'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200'>
            {/* Sidebar content here */}
            <NavbarSidebar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
