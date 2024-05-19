import React from 'react';
import {
  HouseLine,
  Flask,
  FileHtml,
  FileCss,
  FileJs,
  GlobeHemisphereWest
} from 'phosphor-react';
import { useAuth0 } from '@auth0/auth0-react';
const CreateLab = React.lazy(() => import('./CreateLab.jsx'))

const NavabarSidebar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      <ul className='menu bg-base-200 w-56 rounded-box'>
        <li>
          <CreateLab />
        </li>
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
          <details open>
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
                <a href='/react'>
                  <span>React</span>
                  <span className='badge badge-xs badge-warning bg-neutral text-zinc-300 p-2 text-xs'>
                    NEW
                  </span>
                </a>
              </li>
              <li>
                <a href='/lab/vanilla'>
                  <span>Vanilla</span>{' '}
                  <span className='badge badge-xs badge-warning bg-neutral text-zinc-300 p-2 text-xs'>
                    NEW
                  </span>
                </a>
              </li>
              <li>
                <a href='/lab/node'>
                  <span>Node</span>
                  <span className='badge badge-xs badge-warning bg-neutral text-zinc-300 p-2 text-xs'>
                    NEW
                  </span>
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
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
                  <FileHtml size={16} /> <span className='ml-3'>HTML</span>
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
        <div>
          {isAuthenticated ? (
            <div>
              <h3>hi, {user.name}</h3>
              <button
                className='btn bg-primary'
                onClick={e =>
                  logout({
                    logoutParams: { returnTo: window.location.origin }
                  })
                }
              >
                SignOut
              </button>
            </div>
          ) : (
            <button
              className='btn bg-primary'
              onClick={e => loginWithRedirect()}
            >
              SignIn
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavabarSidebar;
