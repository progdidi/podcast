import './podcastPage.scss';

//images
import example from './example.png';

//components
import PodcastCard from '../../components/PodcastCard/PodcastCard';

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
                                Hosted by: Jane Doe
                                </div>

                                <p className="podcast-info__date">Sep 22, 2021</p>
                            </div>
                            <div className="podcast-info__buttons">
                                <button className="podcast-info__btn black-btn">SUBSCRIBE</button>
                                <button className="podcast-info__btn">LISTEN NOW (46 min)</button>
                            </div>
                        </div>
                    </div>

                    <div className="podcast__tags">Tags:
                        <p className="podcast__tag tag">mind-behaviour</p>
                        <p className="podcast__tag tag">health</p>
                    </div>
                    
                </div>
            </section>

            <section className="latest">

            </section>
        </>
        
     );
}
 
export default PodcastPage;