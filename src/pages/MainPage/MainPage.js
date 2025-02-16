import './mainPage.scss';

//images
//pltforms
import google from './images/promo/platforms/google.svg';
import spotify from './images/promo/platforms/spotify.svg';
import youtube from './images/promo/platforms/youtube.svg';

const MainPage = () => {
    return ( 
        <>
            <section className="promo">
                <div className="container">
                    <div className="promo__inner">
                        <h1 className="promo__title">Your Daily <span>Podcast</span> </h1>
                        <p className="promo__text">We cover all kinds of categories and a weekly special guest.</p>
                        <button className="promo__btn black-btn">SUBSCRIBE</button>
                    </div>

                    <div className="promo__platforms">
                        <p className="promo__platforms-text">Supported by:</p>
                        <img src={spotify} alt="" className="promo__platforms-img" />
                        <img src={google} alt="" className="promo__platforms-img" />
                        <img src={youtube} alt="" className="promo__platforms-img" />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default MainPage;