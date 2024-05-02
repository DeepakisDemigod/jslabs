import React, { useState } from 'react';
import {
  HouseLine,
  Flask,
  FileHtml,
  FileCss,
  FileJs,
  GlobeHemisphereWest,
  SignOut
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
                      <a href='/static'>Static</a>
                    </li>
                    <li>
                      <a href='/lab/react'>React</a>
                    </li>
                    <li>
                      <a href='/lab/vanilla'>Vanilla</a>
                    </li>
                    <li>
                      <a href='/lab/node'>Node</a>
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
