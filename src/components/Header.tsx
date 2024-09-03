import '../styles/Header.css';
import logo from '../../public/logo.svg';

import resume from '../../public/resume.pdf';
import { NavLink } from 'react-router-dom'

import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcFolder } from "react-icons/fc";
import { FcCellPhone } from "react-icons/fc";

function Header() {
    return(
        <header className='header'>
            <div className="header-logo">
                <a href="">
                    Clint Harvey
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
                                    <div className="nav-icon">
                                        <FcHome />
                                    </div>
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
                                    <div className="nav-icon">
                                        <FcAddressBook />
                                    </div>
                                    Blog
                                </NavLink>
                            </a>
                        </li>
                        <li>
                            {/* <a href={resume} download="clint_resume">CV</a> */}
                            <a href={resume} target='_blank'>
                                <div className="nav-icon">
                                    <FcFolder />
                                </div>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="nav-icon">
                                    <FcCellPhone />
                                </div>
                                Contact
                            </a>
                        </li>
                    </ul>
                    {/* <ul className='icon-list'>
                        <li>
                            <a href="">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaSquareXTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaFacebookSquare />
                            </a>
                        </li>

                    </ul> */}
                </nav>
            </div>
        </header>
    )

}

export default Header;