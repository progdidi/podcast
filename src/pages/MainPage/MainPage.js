import './mainPage.scss';

//images
//pltforms
import google from './images/promo/platforms/google.svg';
import spotify from './images/promo/platforms/spotify.svg';
import youtube from './images/promo/platforms/youtube.svg';
import PodcastItem from '../../components/PodcastItem/PodcastItem';

//about
import about1 from './images/about/about1.svg';
import about2 from './images/about/about2.svg';
import avatar from './images/about/avatar.png';
import quote from './images/about/quote.svg';
import spotify1 from './images/about/spotify.svg';

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

                    <div className="promo-slider">
                        <PodcastItem/>
                        <PodcastItem/>
                        <PodcastItem/>
                    </div>

                    <div className="promo__platforms">
                        <p className="promo__platforms-text">Supported by:</p>
                        <img src={spotify} alt="" className="promo__platforms-img" />
                        <img src={google} alt="" className="promo__platforms-img" />
                        <img src={youtube} alt="" className="promo__platforms-img" />
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <h2 className="about__title section-title">Talk. Listen. Get inspired by every minute of it.</h2>

                    <div className="about__items">
                        <div className="about-item">
                            <img src={about1} alt="" className="about-item__img" />
                            <p className="about-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                        </div>
                        <div className="about-item">
                            <img src={about2} alt="" className="about-item__img" />
                            <p className="about-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                        </div>
                    </div>

                    <div className="about-quote">
                        <img src={quote} alt="" className="about-quote__img" />

                        <p className="about-quote__text">One of the best daily podcasts that covers every topic on Spotify.</p>

                        <div className="about-quote__author">
                            <img src={avatar} alt="" className="about-quote__author-img" />
                            <p className="about-quote__author-name">John Smith,</p>
                            <img src={spotify1} alt="" className="about-quote__author-brand" />
                            <p className="about-quote__author-job">Social Community Manager</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default MainPage;