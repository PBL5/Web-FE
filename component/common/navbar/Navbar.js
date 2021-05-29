import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/actions/auth.action';
import Link from 'next/link';

import styles from './Navbar.module.css';

function Navbar() {
  const { authProps } = useSelector((state) => state);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const dispatch = useDispatch();

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
    router.push('/auth/signin');
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

          {authProps.isSignedIn ? (
            <ul className={clsx(styles.navMenu, click && styles.active)}>
              <li className={styles.navItems}>
                <a href='/' className={styles.navLinks} onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className={styles.navItems}>
                <Link href='/students/list'>
                  <a className={styles.navLinks}>Students List</a>
                </Link>
              </li>
              <li className={styles.navItems}>
                <a href='/students/add' className={styles.navLinks}>
                  Add Students
                </a>
              </li>

              <li className={styles.navItems}>
                <NavDropdown
                  className={styles.navDropdown}
                  title={
                    <span className={styles.navItemDropDown}>
                      {authProps && authProps.user.full_name}
                    </span>
                  }
                  // id='nav-dropdown'
                >
                  <a
                    href='/auth/signin'
                    className={styles.navLinksDropdown}
                    onClick={handleSignout}
                  >
                    Sign out
                  </a>
                </NavDropdown>
              </li>
            </ul>
          ) : (
            <ul className={clsx(styles.navMenu, click && styles.active)}>
              <li className={styles.navItems}>
                <a href='/' className={styles.navLinks} onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className={styles.navItems}>
                <a
                  href='/auth/signin'
                  className={styles.navLinks}
                  onClick={closeMenu}
                >
                  Sign in
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
