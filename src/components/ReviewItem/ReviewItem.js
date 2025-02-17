import './reviewItem.scss';

//images
import quote from './quote.svg';
import avatar from './avatar.png';
import brand from './brand.svg';

const ReviewItem = () => {
    return ( 
        <div className="review-item">
            <img src={quote} alt="" className="review-item__img" />
            <p className="review-item__text">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
            <div className="review-item__author">
                <img src={avatar} alt="" className="review-item__author-img" />
                <p className="review-item__author-name">Luna lovegood,</p>
                <img src={brand} alt="" className="review-item__author-brand" />
                <p className="review-item__author-job">Spotify</p>
            </div>
        </div>
     );
}
 
export default ReviewItem;