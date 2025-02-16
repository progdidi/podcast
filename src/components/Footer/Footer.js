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
                        <SocialList/>
                    </div>
                    <ul className="footer-menu"></ul>
                    <ul className="footer-menu"></ul>
                    <div className="footer__links"></div>
                </div>

                <div className="footer-bottom"></div>
            </div>
        </footer>
     );
}
 
export default Footer;