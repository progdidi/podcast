import './podcastCard.scss';

//images
import example from './example.png';
import host from './host.png';

const PodcastCard = () => {
    return ( 
        <div className="podcast-card">
            <div className="podcast-card__info">
                <img src={example} alt="" className="podcast-card__img" />
                <div className="podcast-card__about">
                    <h6 className="podcast-card__about-subtitle">Eps. 6</h6>
                    <h5 className="podcast-card__about-title">Pandemic Becoming Endemic</h5>
                    <p className="podcast-card__about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
            </div>
            

            <div className="podcast-card__detail">
                <div className="podcast-card__tags">
                    <p className="tag">covid-19</p>
                    <p className="tag">health</p>
                </div>

                <div className="podcast-card__host">
                    <p className="podcast-card__host-text">
                    Hosted by: 
                    </p>

                    <img src={host} alt="" className="podcast-card__host-img" />
                    <img src={host} alt="" className="podcast-card__host-img" />
                </div>
                
            </div>
        </div>
     );
}
 
export default PodcastCard;