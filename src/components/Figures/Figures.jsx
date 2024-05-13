import "./style.css"

const Figures = () => {
    return (
        <div className="figures">
            <div className="container">
                <ul className="figures__list">
                    <li className="figures__item">
                        <div className="figures__item-circle">
                            <img src="img/figure-1.png" alt="figures" />
                            <span className="figures__item-circle__text">10</span>
                        </div>
                        <span className="figures__item-text text text_small text_regular">Years of experience</span>
                    </li>
                    <li className="figures__item">
                        <div className="figures__item-circle">
                            <img src="img/figure-2.png" alt="figures" />
                            <span className="figures__item-circle__text">45</span>
                        </div>
                        <span className="figures__item-text text text_small text_regular">Awards</span>
                    </li>
                    <li className="figures__item">
                        <div className="figures__item-circle">
                            <img src="img/figure-3.png" alt="figures" />
                            <span className="figures__item-circle__text">540+</span>
                        </div>
                        <span className="figures__item-text text text_small text_regular">Projects</span>
                    </li>
                    <li className="figures__item">
                        <div className="figures__item-circle">
                            <img src="img/figure-4.png" alt="figures" />
                            <span className="figures__item-circle__text">100%</span>
                        </div>
                        <span className="figures__item-text text text_small text_regular">Happy clients</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Figures;