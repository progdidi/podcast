import './footer.scss';

//components
import SocialList from '../SocialList/SocialList';

//images
import google from './images/platforms/google.svg';
import spotify from './images/platforms/spotify.svg';
import youtube from './images/platforms/youtube.svg';
import shop1 from './images/shop1.svg';
import shop2 from './images/shop2.svg';
import logo from './images/logo.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer__info">
                        <img src={logo} alt="" className="footer__logo" />
                        <p className="footer__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <SocialList/>
                    </div>

                    <ul className="footer-menu">
                        <li className="footer-menu__item"><a href="" className="footer-menu__link">About</a></li>
                        <li className="footer-menu__item"><a href="" className="footer-menu__link">Testimonials</a></li>
                        <li className="footer-menu__item"><a href="" className="footer-menu__link">Features</a></li>
                    </ul>

                    <ul className="footer-menu">
                        <li className="footer-menu__item"><a href="" className="footer-menu__link">Episodes</a></li>
                        <li className="footer-menu__item"><a href="" className="footer-menu__link">Pricing</a></li>
                        <li className="footer-menu__item"><a href="" className="footer-menu__link">Blog</a></li>
                    </ul>

                    <div className="footer__links">
                        <p className="footer__links-text">Listen to episodes on your fav platform:</p>
                        <div className="footer__links-list platform">
                            <a href="" className="footer__link"><img src={google} alt="" className="footer__link-img" /></a>
                            <a href="" className="footer__link"><img src={spotify} alt="" className="footer__link-img" /></a>
                            <a href="" className="footer__link"><img src={youtube} alt="" className="footer__link-img" /></a>
                        </div>

                        <p className="footer__links-text">App available on:</p>
                        <div className="footer__links-list">
                            <a href="" className="footer__link"><img src={shop1} alt="" className="footer__link-img" /></a>
                            <a href="" className="footer__link"><img src={shop2} alt="" className="footer__link-img" /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-bottom__text">©2022. All Rights Reserved. Pod of Cast</p>

                    <div className="footer-bottom__links">
                        <a href="" className="footer-bottom__link">Terms</a>
                        <a href="" className="footer-bottom__link">Privacy</a>
                    </div>

                </div>
            </div>
        </footer>
     );
}
 
export default Footer;