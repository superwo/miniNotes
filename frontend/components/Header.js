import { APP_NAME } from '../config';
import Link from 'next/link';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { isAuth, signout } from '../actions/auth';
import Router from 'next/router';

const Header = () => {
  return (
    <header className='header'>
      <Navbar color='dark' dark>
        <Nav vertical className='mr-auto' navbar>
          <Link href='/'>
            <NavLink className='font-weight-bold h4'>{APP_NAME}</NavLink>
          </Link>
          {!isAuth() && (
            <React.Fragment>
              <NavItem>
                <Link href='/signin'>
                  <NavLink>
                    <svg
                      className='bi bi-unlock'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.655 8H2.333c-.264 0-.398.068-.471.121a.73.73 0 00-.224.296 1.626 1.626 0 00-.138.59V14c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 00.436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 00.224-.296 1.627 1.627 0 00.138-.59V9c0-.342-.076-.531-.14-.635a.658.658 0 00-.255-.237A1.122 1.122 0 009.655 8zm.012-1H2.333C.5 7 .5 9 .5 9v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2V9c0-2-1.833-2-1.833-2zM8.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z'
                        clipRule='evenodd'
                      />
                    </svg>{' '}
                    <span>Signin</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/signup'>
                  <NavLink>
                    <svg
                      className='bi bi-person-fill'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z'
                        clipRule='evenodd'
                      />
                    </svg>{' '}
                    <span>Signup</span>
                  </NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
          )}
        </Nav>
        {isAuth() && (
          <NavLink
            onClick={() => signout(() => Router.replace(`/signin`))}
            className='signout'
          >
            <svg
              className='bi bi-box-arrow-left'
              viewBox='0 0 16 16'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.354 11.354a.5.5 0 000-.708L1.707 8l2.647-2.646a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708 0z'
                clipRule='evenodd'
              />
              <path
                fillRule='evenodd'
                d='M11.5 8a.5.5 0 00-.5-.5H2a.5.5 0 000 1h9a.5.5 0 00.5-.5z'
                clipRule='evenodd'
              />
              <path
                fillRule='evenodd'
                d='M14 13.5a1.5 1.5 0 001.5-1.5V4A1.5 1.5 0 0014 2.5H7A1.5 1.5 0 005.5 4v1.5a.5.5 0 001 0V4a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5v-1.5a.5.5 0 00-1 0V12A1.5 1.5 0 007 13.5h7z'
                clipRule='evenodd'
              />
            </svg>{' '}
            <span>Signout</span>
          </NavLink>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
