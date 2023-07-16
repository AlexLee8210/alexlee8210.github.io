import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const [menu, setMenu] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    const showMenu = () => {
        if(window.innerWidth <= 900) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    };

    window.addEventListener('resize', showMenu)
    const location = useLocation();
    useEffect(() => {
    showMenu();
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({top:0, behavior: "smooth"})
        }
    }, [location, ]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className='navbar-logo'>
                    Alexander Lee
                </Link>
                {menu && 
                    <div className='menu-icon-container'>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>
                    </div>
                }
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/#about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#experience' className='nav-links' onClick={closeMobileMenu}>
                            Experience
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
