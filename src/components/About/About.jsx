import "./style.css"

const About = () => {
    return (
        <div  className="about-section">
            <div className="about-section__container container">
                <p className="about-section__text">
                    Createx SEO Agency is a full-service digital marketing agency.
                    We help businesses make more money through a wealth of performance data and market research.
                    We create science-based SEO strategies to empower our clients
                </p>
                <ul className="about-section__list">
                    <li className="about-section__item">
                        <img src="img/award-1.png" alt="Award" className="about-section__item-img img" />
                        <span className="about-section__item-text text text_small text_regular">Top SEO Companies 2020 by Clutch
                        </span>
                    </li>
                    <li className="about-section__item">
                        <img src="img/award-2.png" alt="Award" className="about-section__item-img img" />
                        <span className="about-section__item-text text text_small text_regular">Top Digital Marketing Agency 2019 by UpCity
                        </span>
                    </li>
                    <li className="about-section__item">
                        <img src="img/award-4.png" alt="Award" className="about-section__item-img img" />
                        <span className="about-section__item-text text text_small text_regular">Official Member 2020 by Forbes Agency Council
                        </span>
                    </li>
                    <li className="about-section__item">
                        <img src="img/award-3.png" alt="Award" className="about-section__item-img img" />
                        <span className="about-section__item-text text text_small text_regular">Top SEO Companies 2020 by Top Developers
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;