import '../styles/Header.css';
import logo from '../../public/logo.svg';

import resume from '../../public/resume.pdf';
import { NavLink } from 'react-router-dom'

function Header() {
    return(
        <header className='header'>
            <div className="header-logo">
                <a href="">
                    <img src={logo} alt="website logo" />
                </a>
            </div>
            <div className='header-nav'>
                <nav>
                    <ul>
                        <li>
                            <a href="">
                                <NavLink 
                                    to='/'
                                    className={({ isActive, isPending }) => 
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <NavLink 
                                    to='/blog'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive? "active" : ""
                                    }
                                >
                                    Blog
                                </NavLink>
                            </a>
                        </li>
                        <li>
                            {/* <a href={resume} download="clint_resume">CV</a> */}
                            <a href={resume} target='_blank'>CV</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header;