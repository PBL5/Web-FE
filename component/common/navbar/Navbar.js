import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/utils/actions/auth.action';

import styles from './Navbar.module.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const router = useRouter();

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };

  const handleSignout = () => {
    setClick(false);
    dispatch(logout());
    router.push('/signin');
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <a href='/' className={styles.navbarLogo}>
            <i className={clsx(styles.icon, 'far fa-smile-beam')}></i>
          </a>
          <div className={styles.menuIcon} onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={clsx(styles.navMenu, click && styles.active)}>
            <li className= {styles.navItems}>
              <a href='/' className={styles.navLinks} onClick={closeMenu}>
                Home
              </a>
            </li>
            {auth.isSignedIn ? (
              <li className={styles.navItems}>
                <NavDropdown title={auth && auth.user.full_name}>
                  <NavDropdown.Item onClick={handleSignout}>
                    Sign out
                  </NavDropdown.Item>
                  <a
                    href='/signin'
                    className= {styles.navLinks}
                    onClick={handleSignout}
                  >
                    Sign out
                  </a>
                </NavDropdown>
              </li>
            ) : (
              <li className={styles.navItems}>
                <a href='/auth/signin' className={styles.navLinks} onClick={closeMenu}>
              Sign in
              </a>
                {/* <a href='/auth/signin'>
                  <button className={styles.navLinks} onClick={closeMenu}> 
                  Sign in
                  </button>
                </a> */}
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
