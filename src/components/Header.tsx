import '../styles/Header.css';
import logo from '../../public/logo.svg';

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
                            <a href="">CV</a>
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