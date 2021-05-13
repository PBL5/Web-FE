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
          <Link href='/' className={styles.navbarLogo}>
            <i className={clsx(styles.icon, 'far fa-smile-beam')}></i>
            {/* 18TCLC_DT3 */}
          </Link>
          <div className={styles.menuIcon} onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          <ul className={clsx(styles.navMenu, click && styles.active)}>
            <li className='nav-items'>
              <Link href='/' className='navlinks' onClick={closeMenu}>
                Home
              </Link>
            </li>
            {auth.isSignedIn ? (
              <li className={styles.navItems}>
                <NavDropdown title={auth && auth.user.full_name}>
                  <NavDropdown.Item onClick={handleSignout}>
                    Sign out
                  </NavDropdown.Item>
                  <Link
                    href='/signin'
                    className='navlinks'
                    onClick={handleSignout}
                  >
                    Sign out
                  </Link>
                </NavDropdown>
              </li>
            ) : (
              <li className={styles.navItems}>
                <Link href='/auth/signin' className='navlinks' onClick={closeMenu}>
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
