import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import "./Navbar.css";
import { NavDropdown, Nav } from "react-bootstrap";

//{ SignedIn }
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // const [signedIn, setSignedIn] = useState(SignedIn);

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
  window.addEventListener("resize", showButton);

  const history = useHistory();
  const handleSignout = () => {
    setClick(false);
    // setSignedIn(false);
    localStorage.clear();
    // history.push('/signin')
  };

  let username = JSON.parse(localStorage.getItem("user-info"));

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <i className="far fa-smile-beam"></i>
            {/* 18TCLC_DT3 */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="navlinks" onClick={closeMenu}>
                Home
              </Link>
            </li>
            {/* {localStorage.getItem('user-info') ? ( */}
            {false ? (
              <li className="nav-items">
                {/* <NavDropdown title= {username && username.name}>
                  <NavDropdown.Item onClick = {handleSignout}>Sign out</NavDropdown.Item> */}
                <Link to="/signin" className="navlinks" onClick={handleSignout}>
                  Sign out
                </Link>
                {/* </NavDropdown> */}
              </li>
            ) : (
              <li className="nav-items">
                <Link to="/signin" className="navlinks" onClick={closeMenu}>
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
/*menu icon: 3 sọc ngang, exit; click vào để hiển thị menu thì icon trở thành exit-icon, còn bình thường thì 3 sọc
    useSate: set trạng thái cho click ban đầu là  false tức hiển thị 3 sọc;
    nếu click vào thì qua hàm handleClick chuyển thành !false = true --> thành exit
*/
