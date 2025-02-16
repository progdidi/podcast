import './header.scss';

import logo from './logo.svg';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="" className="logo"><img src={logo} alt="" className="logo__img" /></a>

                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-list__item"><a href="" className="menu-list__link">Episodes</a></li>
                            <li className="menu-list__item"><a href="" className="menu-list__link">About</a></li>
                            <li className="menu-list__item"><a href="" className="menu-list__link">More</a></li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <button className="header-btn">RECENT EPISODES</button>
                        <button className="header-btn black-btn">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;