import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar({signin, username }) {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    // const [signin, setSignin] = useState(false)

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
   }
   useEffect(() => {
    showButton();
  }, []);
  
    const handleClick = () =>{
        setClick(!click)
    }
    // console.log(click);
    const closeMenu = () =>{
        setClick(false)
    }
    window.addEventListener('resize', showButton)
    // console.log(click);
    return (
        <>
            <nav className = 'navbar'>
                <div className = 'navbar-container'>
                    <Link to = '/' className = 'navbar-logo'>
                    <i className='far fa-smile-beam'></i>
                       {/* 18TCLC_DT3 */}
                        </Link>
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' :'fas fa-bars'}></i>
                    </div>
                    <ul className = {click?'nav-menu active':'nav-menu'}>
                        <li className = 'nav-items'>
                            <Link to = '/' className = 'navlinks' onClick = {closeMenu}>Home</Link>
                        </li>
                        <li className = 'nav-items'>
                            <Link to = '/signin'  className='navlinks' onClick = {closeMenu}>Sign in</Link>
                        </li>
                        {
                            signin &&
                        <li className ='nav-items'>
                            <Link to = './studentlist' className = 'navlinks' onClick = {closeMenu}>Student List</Link>
                        </li>
                         }

                    </ul>
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar
// Link: click in logo --> go to nowhere
/*menu icon: 3 sọc ngang, exit; click vào để hiển thị menu thì icon trở thành exit-icon, còn bình thường thì 3 sọc
    useSate: set trạng thái cho click ban đầu là  false tức hiển thị 3 sọc;
    nếu click vào thì qua hàm handleClick chuyển thành !false = true --> thành exit
*/