import '../styles/Header.css';
import logo from '../../public/logo.svg';

import resume from '../../public/resume.pdf';

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
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
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