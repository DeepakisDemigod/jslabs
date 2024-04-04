import React from 'react';
import {
  HouseLine,
  Flask,
  FileHtml,
  FileCss,
  FileJs,
  GlobeHemisphereWest
} from 'phosphor-react';

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
          <div className='w-full navbar flex items-center justify-between px-4 lg:px-8'>
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
                className='btn btn-ghost text-xl'
              >
                JavaScript Labs
              </a>
            </div>
            <div className='navbar-end flex items-center justify-end'>
              <button className='btn btn-ghost btn-circle'>
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
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
              <button className='btn btn-ghost btn-circle'>
                <div className='indicator'>
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
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                  <span className='badge badge-xs badge-primary indicator-item'></span>
                </div>
              </button>
            </div>
          </div>

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
            <ul className='menu bg-base-200 w-56 rounded-box'>
              <li>
                <summary>
                  <a
                    className='flex items-center'
                    href='/'
                  >
                    <HouseLine size={17} />
                    <span className='ml-3'>Home</span>
                  </a>
                </summary>
              </li>
              <li>
                <details>
                  <summary>
                    <div>
                      <a
                        className='flex items-center'
                        href='/lab'
                      >
                        <Flask size={18} />
                        <span className='ml-2'>Laboratory</span>
                      </a>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href='/lab/static'>Static</a>
                    </li>
                    <li>
                      <a href='/lab/react'>React</a>
                    </li>
                    <li>
                      <a href="/lab/vanilla">Vanilla</a>
                    </li>
                    <li>
                      <a href="/lab/node">Node</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <div>
                      <a
                        className='flex items-center'
                        href='/web/'
                      >
                        <GlobeHemisphereWest size={16} />
                        <span className='ml-3'>Web</span>
                      </a>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href='/web/design'>Internet</a>
                    </li>
                    <li>
                      <a href='/web/arch'>Web Pages</a>
                    </li>
                    <li>
                      <a href='/web/design'>Protocol</a>
                    </li>
                    <li>
                      <a href='/web/arch'>Browser</a>
                    </li>
                    <li>
                      <a href='/web/design'>Types of Sites</a>
                    </li>
                    <li>
                      <a href='/web/arch'>Planning of Site</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <div>
                      <a
                        className='flex items-center'
                        href='/html'
                      >
                        <FileHtml size={16} />{' '}
                        <span className='ml-3'>HTML</span>
                      </a>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href='/html/lesson/1'>Lesson 1</a>
                    </li>
                    <li>
                      <a href='/html/lesson/2'>Lesson 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <div>
                      <a
                        className='flex items-center'
                        href='/html'
                      >
                        <FileCss size={16} /> <span className='ml-3'>CSS</span>
                      </a>
                    </div>
                  </summary>
                  <ul></ul>
                </details>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

