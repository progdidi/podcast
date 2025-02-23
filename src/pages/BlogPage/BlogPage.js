import './blogPage.scss';

import AppSection from "../../components/AppSection/AppSection";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import SearchForm from "../../components/SearchForm/SearchForm";

const BlogPage = () => {
    return ( 
        <>
            <section className="blog-page">
                <div className="container">
                    <div className="blog-page__inner">
                        <h2 className="blog-page__title page-title">Article and <span>News</span></h2>
                        <p className="blog-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>

                        <SearchForm/>
                    </div>
                </div>
            </section>

            <section className="latest">
            <div className="container">
                <h2 className="latest__title section-title">Latest Posts</h2>

                <div className="latest__tabs">
                    <button className="latest__tabs-btn active"> All</button>
                    <button className="latest__tabs-btn">Business</button>
                    <button className="latest__tabs-btn">News</button>
                    <button className="latest__tabs-btn">Tips & Trick</button>
                    <button className="latest__tabs-btn">Podcast</button>
                    <button className="latest__tabs-btn">Productivity</button>
                </div>

                <div className="latest__inner">
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                </div>
            </div>
            </section>

            <AppSection/>
        </>
     );
}
 
export default BlogPage;