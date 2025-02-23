import AppSection from '../../components/AppSection/AppSection';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import QuoteSection from '../../components/QuoteSection/QuoteSection';
import SocialList from '../../components/SocialList/SocialList';
import './articlePage.scss';

//images
import example from './images/example.png';
import gallery1 from './images/gallery1.png';
import gallery2 from './images/gallery2.png';

const ArticlePage = () => {
    return ( 
        <>
            <section className="article-page">
                <div className="container">
                    <div className="article-page__header">
                        <button className="article-page__back-btn">Back to articles</button>
                        <p className="article-page__date">Sep 12, 2021</p>
                    </div>

                    <div className="article-page__inner">
                        <p className="article-page__subtitle"></p>
                        <h3 className="article-page__title section__title"></h3>
                        <div className="article-page__tags"></div>
                        <SocialList/>
                    </div>
                    
                </div>
            </section>

            <section className="article-info">
                <div className="container">
                    <img src={example} alt="" className="article-info__img" />

                    <h4 className="article-info__title div-title">Doodle for our podcast background room</h4>

                    <div className="article-info__text">
                        <div>
                            <p className="article-info__text-item">Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span> . Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in.</p>

                            <p className="article-info__text-item">Sit vel, senectus iaculis morbi. <span>Amet</span> interdum imperdiet laoreet <span>morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. Orci non here</p>
                        </div>
                        <div>
                            <p className="article-info__text-item">Quis dictum cursus faucibus mattis dignissim. Pellentes
                            que purus in sed sodales in mauris molestie. Eleifend est cons
                            ctetur interdum eu in auctor. Gravida leo et.</p>
                        </div>
                    </div>

                    <QuoteSection/>

                    <div className="article-info__lists">
                        <ul className="article-info__bullet-list">
                            <h6 className="article-info__lists item-title">Bullet list example:</h6>
                            <li className="article-info__bullet-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis curs
                            us dignissim odio. Sit vulputate et integer in.</li>

                            <li className="article-info__bullet-list-item">Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. Orci non here</li>

                            <li className="article-info__bullet-list-item">Quis dictum cursus faucibus mattis dignissim. Pellent
                            que purus in sed sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.</li>
                        </ul>
                        
                        <ol className="article-info__num-list">
                            <h6 className="article-info__lists item-title">Number list example:</h6>
                            <li className="article-info__num-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis curs
                            us dignissim odio. Sit vulputate et integer in.</li>

                            <li className="article-info__num-list-item">Sit vel, senectus iaculis morbi. Amet interdum imperd laoreet morbi tincidunt fermentum, libero. Ante enim ege viverra at porttitor accumsan. Orci non here</li>

                            <li className="article-info__num-list-item">Quis dictum cursus faucibus mattis dignissim. Pellent
                            que purus in sed sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.</li>
                        </ol>
                    </div>

                    <div className="article-info__gallery">
                        <img src={gallery1} alt="" className="article-info__gallery-item" />
                        <img src={gallery2} alt="" className="article-info__gallery-item" />
                    </div>
                    
                </div>
            </section>

            <section className="related">
                <div className="container">
                    <h3 className="related__title section-title">Related Article</h3>
                    <p className="related__subtitle section-subtitle">News, Tips, Tricks and more</p>
                    <div className="related__inner">
                        <ArticleCard/>
                        <ArticleCard/>
                    </div>
                </div>
            </section>

            <AppSection/>
        </>
     );
}
 
export default ArticlePage;