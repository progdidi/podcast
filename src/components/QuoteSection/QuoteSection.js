import './quoteSection.scss';

//images
import avatar from './images/avatar.png';
import quote from './images/quote.svg';
import spotify1 from './images/spotify.svg';

const QuoteSection = () => {
    return ( 
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
     );
}
 
export default QuoteSection;