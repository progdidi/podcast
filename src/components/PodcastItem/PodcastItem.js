import './podcastItem.scss';

//images
import example from './example.png';

const PodcastItem = () => {
    return ( 
        <div className="podcast-item">
            <img src={example} alt="" className="podcast-item__img" />
        </div>
     );
}
 
export default PodcastItem;