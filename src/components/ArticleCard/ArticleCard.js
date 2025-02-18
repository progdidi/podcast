import './articleCard.scss';

//images
import example from './example.png';

const ArticleCard = () => {
    return ( 
        <a href="" className="article-card">
            <img src={example} alt="" className="article-card__img" />
            <h6 className="article-card__subtitle">TIPS & TRICK</h6>
            <h4 className="article-card__title">Doodle artwork 101</h4>
            <p className="article-card__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
            <div className="article-card__detail">
                <div className="article-card__tags">
                    <p className="tag">art</p>
                    <p className="tag">creative</p>
                    <p className="tag">tips and trick</p>
                </div>

                <p className="article-card__date">Sep 12, 2021</p>
            </div>
        </a>
     );
}
 
export default ArticleCard;