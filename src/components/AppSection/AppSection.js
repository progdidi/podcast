import './appSection.scss';

//images
import googlePodc from './images/platforms/googlePodc.svg';
import spotifyPodc from './images/platforms/spotifyPodc.svg';
import youtubePodc from './images/platforms/youtubePodc.svg';

const AppSection = () => {
    return ( 
        <section className="app">
            <div className="container">
                <p className="app__tag">BETA</p>
                <h2 className="app__title section-title">Available now Pod of Cast App</h2>
                <p className="app__subtitle section-subtitle">We just launched our podcast app!</p>

                <button className="app__btn black-btn">DOWNLOAD NOW</button>

                <p className="app__text">Content also available on:</p>

                <div className="app__platforms">
                    <a href="" className="app__platforms-link">
                        <img src={googlePodc} alt="" className="app__platforms-img" /></a>
                    <a href="" className="app__platforms-link">
                        <img src={spotifyPodc} alt="" className="app__platforms-img" /></a>
                    <a href="" className="app__platforms-link">
                        <img src={youtubePodc} alt="" className="app__platforms-img" /></a>
                </div>
            </div>
        </section>
     );
}
 
export default AppSection;