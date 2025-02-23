import './podcastPage.scss';

//images
import example from './example.png';
import host from './host.png';
import play from './images/play.svg';

//components
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import AppSection from '../../components/AppSection/AppSection';

const PodcastPage = () => {
    return ( 
        <>
            <section className="podcast">
                <div className="container">
                    <div className="podcast__inner">
                        <img src={example} alt="" className="podcast__img" />
                        <div className="podcast-info">
                            <p className="podcast-info__subtitle">Episode 1</p>
                            <h4 className="podcast-info__title">Are you a Perplexed Mind Person?</h4>
                            <p className="podcast-info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            <div className="podcast-info__detail">
                                <div className="podcast-info__host">
                                    <img src={host} alt="" className="podcast-info__host-img" />
                                    <p className="podcast-info__host-text">Hosted by: <a href="" className="podcast-info__host-link">Jane Doe</a></p>
                                </div>

                                <p className="podcast-info__date">Sep 22, 2021</p>
                            </div>
                            <div className="podcast-info__buttons">
                                <button className="podcast-info__btn black-btn">SUBSCRIBE</button>
                                <button className="podcast-info__btn listen-btn"> <img src={play} alt="" className="listen-btn__img" /> LISTEN NOW (46 min)</button>
                            </div>
                        </div>
                    </div>

                    <div className="podcast__tags">
                        <p className="podcast__tags-text">Tags:</p>
                        <p className="podcast__tag tag">mind-behaviour</p>
                        <p className="podcast__tag tag">health</p>
                    </div>
                    
                </div>
            </section>

            <section className="latest">
                <div className="container">
                    <h2 className="latest__title section-title">Latest Episode</h2>

                    <div className="latest__tabs">
                        <button className="latest__tabs-btn active"> All</button>
                        <button className="latest__tabs-btn">Business</button>
                        <button className="latest__tabs-btn">Comedy</button>
                        <button className="latest__tabs-btn">Education</button>
                        <button className="latest__tabs-btn">Health</button>
                        <button className="latest__tabs-btn">News</button>
                        <button className="latest__tabs-btn">Tech</button>
                    </div>

                    <div className="latest__inner">
                        <PodcastCard/>
                        <PodcastCard/>
                        <PodcastCard/>
                        <PodcastCard/>
                        <PodcastCard/>
                        <PodcastCard/>
                        <PodcastCard/>
                        <PodcastCard/>
                    </div>
                </div>
            </section>

            <AppSection/>
        </>
        
     );
}
 
export default PodcastPage;