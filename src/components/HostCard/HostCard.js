import './hostCard.scss';

//images
import avatar from './images/avatar.png';
import tiktok from './images/social/tiktok.svg';
import twitter from './images/social/twitter.svg';
import inst from './images/social/instagram.svg';
import bg from './images/bg.svg';

const HostCard = () => {
    return ( 
        <div className="host-card">
            <img src={avatar} alt="" className="host-card__img" />
            <div className="host-card__info">
                <img src={bg} alt="" className="host-card__info-img" />

                <p className="host-card__subtitle">Host 1</p>
                <h4 className="host-card__title">Porter Severus</h4>
                <p className="host-card__text">Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>
                <ul className="host-card__social">
                    <p className="host-card__social-text">follow me:</p>
                    <li className="host-card__social-link"><img src={tiktok} alt="" className="host-card__social-img" /></li>
                    <li className="host-card__social-link"><img src={twitter} alt="" className="host-card__social-img" /></li>
                    <li className="host-card__social-link"><img src={inst} alt="" className="host-card__social-img" /></li>
                </ul>
            </div>
        </div>
     );
}
 
export default HostCard;