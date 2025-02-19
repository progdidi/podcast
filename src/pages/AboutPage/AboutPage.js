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
        </>
     );
}
 
export default AboutPage;