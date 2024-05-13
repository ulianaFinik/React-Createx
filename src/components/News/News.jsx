import "./style.css"

const News = () => {
    return (
        <section className="news">
            <div className="news__container container">
                <div className="news__wrapper">
                    <h2 className="news__title title title_2">Latest news</h2>
                    <span className="news__text text text_lead text_regular">Check more posts in our blog for featured news and advertising insights</span>
                    <a href="#" className="news__btn btn btn_fill a">Go to blog</a>
                </div>
                <ul className="news__list ul">
                    <li className="news__item">
                        <article className="news-item">
                            <img src="img/news.png" alt="Image how to Maximize Your ROI Through Scientific SEM? img" className="news-item__img" />
                            <div className="news-item__wrapper text text_small text_regular">
                                <span className="news-item__theme">SEO</span>
                                <span className="news-item__date">July 5, 2020</span>
                                <span className="news-item__name">By Diane Mccoy</span>
                            </div>
                            <h3 className="news-item__span text text_lead text_bold text_ebony-gray">How to Maximize Your ROI Through Scientific SEM?</h3>
                            <p className="news-item__text text text_base text_regular">Vulputate vitae pellentesque
                                scelerisque luctus consequat mattis pellentesque dui odio...</p>
                            <a href="#" className="news-item__link text text_base text_bold a">Read more</a>
                        </article>
                    </li>
                    <li className="news__item">
                        <article className="news-item">
                            <img src="img/news-2.png" alt="Image the Basics of Blogging Search Engine Optimization img" className="news-item__img" />
                            <div className="news-item__wrapper text text_small text_regular">
                                <span className="news-item__theme">Marketing</span>
                                <span className="news-item__date">July 2, 2020</span>
                                <span className="news-item__name">By Diane Mccoy</span>
                            </div>
                            <h3 className="news-item__span text text_lead text_bold text_ebony-gray">The Basics of Blogging Search Engine Optimization.</h3>
                            <p className="news-item__text text text_base text_regular">Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla  viverra amet, mi interdum blandit...</p>
                            <a href="#" className="news-item__link text text_base text_bold a">Read more</a>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default News;