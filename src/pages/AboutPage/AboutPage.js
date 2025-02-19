import AppSection from '../../components/AppSection/AppSection';
import './aboutPage.scss';

const AboutPage = () => {
    return ( 
        <>
        <section className="about-promo">
            <div className="container">
                <h2 className="about-promo__title page-title">About <br /> <span>Pod of Cast</span></h2>
                <p className="about-promo__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>

                <div className="about-promo__buttons">
                    <button className="about-promo__btn">BECOME SPONSOR</button>
                    <button className="about-promo__btn black-btn">SUBSCRIBE</button>
                </div>

            </div>
        </section>

        <div className="about-numbers">
            <div className="container">
                <div className="about-numbers__inner">
                    <div className="about-numbers__item">
                        <p className="about-numbers__item-main">76<span>K</span></p>
                        <p className="about-numbers__item-descr">Community Members</p>
                    </div>
                    <div className="about-numbers__item">
                        <p className="about-numbers__item-main">128<span>K</span></p>
                        <p className="about-numbers__item-descr">Podcast Subscribers</p>
                    </div>
                    <div className="about-numbers__item">
                        <p className="about-numbers__item-main">59<span>K</span></p>
                        <p className="about-numbers__item-descr">Daily Listeners</p>
                    </div>
                </div>
            </div>
        </div>

        <AppSection/>
        </>
     );
}
 
export default AboutPage;