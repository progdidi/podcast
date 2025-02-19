//components
import AppSection from '../../components/AppSection/AppSection';
import HostCard from '../../components/HostCard/HostCard';


import './aboutPage.scss';

//images
import info from './images/info.png';

const AboutPage = () => {
    return ( 
        <>
        <section class="about-promo">
            <div class="container">
                <h2 class="about-promo__title page-title">About <br /> <span>Pod of Cast</span></h2>
                <p class="about-promo__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>

                <div class="about-promo__buttons">
                    <button class="about-promo__btn">BECOME SPONSOR</button>
                    <button class="about-promo__btn black-btn">SUBSCRIBE</button>
                </div>

            </div>
        </section>

        <div class="about-numbers">
            <div class="container">
                <div class="about-numbers__inner">
                    <div class="about-numbers__item">
                        <p class="about-numbers__item-main">76<span>K</span></p>
                        <p class="about-numbers__item-descr">Community Members</p>
                    </div>
                    <div class="about-numbers__item">
                        <p class="about-numbers__item-main">128<span>K</span></p>
                        <p class="about-numbers__item-descr">Podcast Subscribers</p>
                    </div>
                    <div class="about-numbers__item">
                        <p class="about-numbers__item-main">59<span>K</span></p>
                        <p class="about-numbers__item-descr">Daily Listeners</p>
                    </div>
                </div>
            </div>
        </div>

        <section class="about-info">
            <div class="container">
                <h2 class="about-info__title section-title">What our listeners say</h2>
                <p class="about-info__subtitle section-subtitle">Their experience throughout every platform</p>

                <img src={info} alt="" class="about-info__img" />

                <div class="about-history">
                    <h3 class="about-history__title">About and History</h3>

                    <div class="about-history__inner">
                        <p class="about-history-text">Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam elementum pulvinar.
                        <br></br>
                        <br></br>
                        Elementum eu facilisis sed odio morbi quis commodo.
                        Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.</p>
                        <p class="about-history-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget. 
                        <br></br>
                        <br></br>
                        Viverra at porttitor accumsan. Orci non here</p>
                    </div>
                    
                </div>

                <div class="about-hosts">
                    <h3 class="about-hosts__title"></h3>
                    <div class="about-hosts__inner">
                        <HostCard/>
                        <HostCard/>
                    </div>
                </div>

                
            </div>
        </section>

        <AppSection/>
        </>
     );
}
 
export default AboutPage;