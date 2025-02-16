import './socialList.scss';

//images
import tw from './images/twitter.svg';
import inst from './images/instagram.svg';
import tiktok from './images/tiktok.svg';

const SocialList = () => {
    return ( 
        <ul className="social-list">
            <li className="social-list__item">
                <a href="" className="social-list__link">
                    <img src={tw} alt="" className="social-list__img" />
            </a>
            </li>
            <li className="social-list__item">
                <a href="" className="social-list__link">
                    <img src={inst} alt="" className="social-list__img" />
            </a>
            </li>
            <li className="social-list__item">
                <a href="" className="social-list__link">
                    <img src={tiktok} alt="" className="social-list__img" />
            </a>
            </li>
        </ul>
     );
}
 
export default SocialList;