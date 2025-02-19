import './sponsorCard.scss';

//images
import example from './example.svg';

const SponsorCard = () => {
    return ( 
        <div className="sponsor-card">
            <img src={example} alt="" className="sponsor-card__img" />
            <div className="sponsor-card__divider"></div>
            <p className="sponsor-card__descr">Quis dictum cursus faucibus mattis dignissim. Pellentes
            que purus in sed sodales in mauris molestie. Eleifend estcon
            sctetur interdum eu in auctor. Gravida leo et.</p>
        </div>
     );
}
 
export default SponsorCard;