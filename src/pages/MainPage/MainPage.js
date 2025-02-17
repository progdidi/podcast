import './mainPage.scss';

//components
import ReviewItem from '../../components/ReviewItem/ReviewItem';

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

//reviews
import prev from './images/reviews/prev.svg';
import next from './images/reviews/next.svg';

//membership
import icon1 from './images/membership/icon1.svg';
import icon2 from './images/membership/icon2.svg';
import icon3 from './images/membership/icon3.svg';
import icon4 from './images/membership/icon4.svg';
import icon5 from './images/membership/icon5.svg';
import icon6 from './images/membership/icon6.svg';

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

            <section className="reviews">
                <div className="container">
                    <h2 className="reviews__title section-title">What our listeners say</h2>
                    <p className="reviews__subtitle section-subtitle">Their experience throughout every platform</p>

                    <div className="reviews__items">
                        <ReviewItem/>
                        <ReviewItem/>
                        <ReviewItem/>
                    </div>

                    <div className="reviews-slider__buttons">
                        <button className="reviews-slider__btn">
                            <img src={prev} alt="" className="reviews-slider__btn-img" />
                        </button>
                        <button className="reviews-slider__btn">
                            <img src={next} alt="" className="reviews-slider__btn-img" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="membership">
                <div className="container">
                    <h2 className="membership__title section-title">Membership benefits</h2>
                    <p className="membership__subtitle section-subtitle">Become our sponsor and get all benefits</p>

                    <div className="membership__items">
                        <div className="membership-item">
                            <img src={icon1} alt="" className="membership-item__img" />
                            <h6 className="membership-item__title item-title">Topic by Request</h6>
                            <p className="membership-item__text">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="membership-item">
                            <img src={icon2} alt="" className="membership-item__img" />
                            <h6 className="membership-item__title item-title">Exclusive Content</h6>
                            <p className="membership-item__text">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="membership-item">
                            <img src={icon3} alt="" className="membership-item__img" />
                            <h6 className="membership-item__title item-title">Join the Community</h6>
                            <p className="membership-item__text">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="membership-item">
                            <img src={icon4} alt="" className="membership-item__img" />
                            <h6 className="membership-item__title item-title">Livestreaming Access</h6>
                            <p className="membership-item__text">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="membership-item">
                            <img src={icon5} alt="" className="membership-item__img" />
                            <h6 className="membership-item__title item-title">Exclusive Episodes & Merch</h6>
                            <p className="membership-item__text">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="membership-item">
                            <img src={icon6} alt="" className="membership-item__img" />
                            <h6 className="membership-item__title item-title">And much more!</h6>
                            <p className="membership-item__text">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <button className="membership__btn black-btn">SEE PRICING</button>
                </div>
            </section>
        </>
     );
}
 
export default MainPage;