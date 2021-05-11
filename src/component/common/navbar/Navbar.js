import './Navbar.css';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../../../utils/actions/auth.action';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

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

  window.addEventListener('resize', showButton);

  const handleSignout = () => {
    setClick(false);
    dispatch(logout());
    history.push('/signin');
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <i className='far fa-smile-beam'></i>
            {/* 18TCLC_DT3 */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-items'>
              <Link to='/' className='navlinks' onClick={closeMenu}>
                Home
              </Link>
            </li>
            {/* {localStorage.getItem('user-info') ? ( */}
            {auth.isSignedIn ? (
              <li className='nav-items'>
                <NavDropdown title={auth && auth.user.full_name}>
                  <NavDropdown.Item onClick={handleSignout}>
                    Sign out
                  </NavDropdown.Item>
                  <Link
                    to='/signin'
                    className='navlinks'
                    onClick={handleSignout}
                  >
                    Sign out
                  </Link>
                </NavDropdown>
              </li>
            ) : (
              <li className='nav-items'>
                <Link to='/signin' className='navlinks' onClick={closeMenu}>
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
// Link: click in logo --> go to nowhere
/*menu icon: 3 sọc ngang, exit; click vào để hiển thị menu thì icon trở thành
     exit-icon, còn bình thường thì 3 sọc useSate: set trạng thái cho click ban
     đầu là  false tức hiển thị 3 sọc; nếu click vào thì qua hàm handleClick
     chuyển thành !false = true --> thành exit
  */
