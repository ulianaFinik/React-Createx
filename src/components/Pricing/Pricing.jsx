import { useState } from "react";
import "./style.css"

const Pricing = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }



    return (
        <section className="pricing">
            <div className="container">
                <h2 className="pricing__title title title_2">Flexible pricing plans</h2>


                <div className="pricing__tabs tabs" data-tabs="tab-pricing">
                    <div className="pricing__tabs__nav tabs__nav">
                        <button className={`pricing__tabs__nav-btn tabs__nav-btn button  ${toggleState === 1 ? "active" : ""}`}
                        onClick={() => toggleTab(1)}
                        aria-label="Show Mounthly pricing">Mounthly</button>

                        <button className={`pricing__tabs__nav-btn tabs__nav-btn button ${toggleState === 2 ? "active" : ""}`}
                        onClick={() => toggleTab(2)}
                        aria-label="Show Yearly pricing">Yearly <span className="pricing__tabs__nav-btn pricing__tabs__nav-btn_small">-12% Off</span>
                        </button>
                    </div>
                    <div className="pricing__tabs__content tabs__content active">

                        <div className={`pricing__tabs__item tabs__item ${toggleState === 1 ? "active" : ""}`}>
                            <ul className="pricing__list ul">
                                <li className="pricing__item pricing-card">
                                    <h3 className="pricing-card__title title title_3">Basic</h3>
                                    <span className="pricing-card__price">
                                        $24
                                        <span className="pricing-card__price-small text text_lead text_bold">/mon</span>
                                    </span>
                                    <img src="img/pricing-divider.svg" alt="line" aria-hidden="true"
                                        className="pricing-card__line" />
                                        <ul className="pricing-card__list ul">
                                            <li className="pricing-card__item text text_base text_regular">Advanced
                                                Analytics</li>
                                            <li className="pricing-card__item text text_base text_regular">Change Management
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">Corporate Finance
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">One Way Link
                                                Building</li>
                                            <li className="pricing-card__item text text_base text_regular">Social Media
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Strategy &
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Information
                                                Technology</li>
                                        </ul>
                                        <a href="#" className="pricing-card__btn btn btn_stroke-cornflower-blue a"
                                            aria-label="Choose plan pricing">Choose plan</a>
                                </li>
                                <li className="pricing__item pricing-card">
                                    <h3 className="pricing-card__title title title_3">Optimal</h3>
                                    <span className="pricing-card__price">
                                        $64
                                        <span className="pricing-card__price-small text text_lead text_bold">/mon</span>
                                    </span>
                                    <img src="img/pricing-divider.svg" alt="line" aria-hidden="true"
                                        className="pricing-card__line" />
                                        <ul className="pricing-card__list ul">
                                            <li className="pricing-card__item text text_base text_regular">Advanced
                                                Analytics</li>
                                            <li className="pricing-card__item text text_base text_regular">Change Management
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">Corporate Finance
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">One Way Link
                                                Building</li>
                                            <li className="pricing-card__item text text_base text_regular">Social Media
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Strategy &
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Information
                                                Technology</li>
                                        </ul>
                                        <a href="#" className="pricing-card__btn btn btn_fill a"
                                            aria-label="Choose plan pricing">Choose plan</a>
                                </li>
                                <li className="pricing__item pricing-card">
                                    <h3 className="pricing-card__title title title_3">Premium</h3>
                                    <span className="pricing-card__price">
                                        $98
                                        <span className="pricing-card__price-small text text_lead text_bold">/mon</span>
                                    </span>
                                    <img src="img/pricing-divider.svg" alt="line" aria-hidden="true"
                                        className="pricing-card__line" />
                                        <ul className="pricing-card__list ul">
                                            <li className="pricing-card__item text text_base text_regular">Advanced
                                                Analytics</li>
                                            <li className="pricing-card__item text text_base text_regular">Change Management
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">Corporate Finance
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">One Way Link
                                                Building</li>
                                            <li className="pricing-card__item text text_base text_regular">Social Media
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Strategy &
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Information
                                                Technology</li>
                                        </ul>
                                        <a href="#" className="pricing-card__btn btn btn_stroke-cornflower-blue a"
                                            aria-label="Choose plan pricing">Choose plan</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className={`pricing__tabs__item tabs__item ${toggleState === 2 ? "active" : ""}`}>
                            <ul className="pricing__list ul">
                                <li className="pricing__item pricing-card">
                                    <h3 className="pricing-card__title title title_3">Basic</h3>
                                    <span className="pricing-card__price">
                                        $288
                                        <span
                                            className="pricing-card__price-small text text_lead text_bold">/year</span>
                                    </span>
                                    <img src="img/pricing-divider.svg" alt="line" aria-hidden="true"
                                        className="pricing-card__line" />
                                        <ul className="pricing-card__list ul">
                                            <li className="pricing-card__item text text_base text_regular">Advanced
                                                Analytics</li>
                                            <li className="pricing-card__item text text_base text_regular">Change Management
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">Corporate Finance
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">One Way Link
                                                Building</li>
                                            <li className="pricing-card__item text text_base text_regular">Social Media
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Strategy &
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Information
                                                Technology</li>
                                        </ul>
                                        <a href="#" className="pricing-card__btn btn btn_stroke-cornflower-blue a"
                                            aria-label="Choose plan pricing">Choose plan</a>
                                </li>
                                <li className="pricing__item pricing-card">
                                    <h3 className="pricing-card__title title title_3">Optimal</h3>
                                    <span className="pricing-card__price">
                                        $768
                                        <span
                                            className="pricing-card__price-small text text_lead text_bold">/year</span>
                                    </span>
                                    <img src="img/pricing-divider.svg" alt="line" aria-hidden="true"
                                        className="pricing-card__line" />
                                        <ul className="pricing-card__list ul">
                                            <li className="pricing-card__item text text_base text_regular">Advanced
                                                Analytics</li>
                                            <li className="pricing-card__item text text_base text_regular">Change Management
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">Corporate Finance
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">One Way Link
                                                Building</li>
                                            <li className="pricing-card__item text text_base text_regular">Social Media
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Strategy &
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Information
                                                Technology</li>
                                        </ul>
                                        <a href="#" className="pricing-card__btn btn btn_fill a"
                                            aria-label="Choose plan pricing">Choose plan</a>
                                </li>
                                <li className="pricing__item pricing-card">
                                    <h3 className="pricing-card__title title title_3">Premium</h3>
                                    <span className="pricing-card__price">
                                        $1176
                                        <span
                                            className="pricing-card__price-small text text_lead text_bold">/year</span>
                                    </span>
                                    <img src="img/pricing-divider.svg" alt="line" aria-hidden="true"
                                        className="pricing-card__line" />
                                        <ul className="pricing-card__list ul">
                                            <li className="pricing-card__item text text_base text_regular">Advanced
                                                Analytics</li>
                                            <li className="pricing-card__item text text_base text_regular">Change Management
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">Corporate Finance
                                            </li>
                                            <li className="pricing-card__item text text_base text_regular">One Way Link
                                                Building</li>
                                            <li className="pricing-card__item text text_base text_regular">Social Media
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Strategy &
                                                Marketing</li>
                                            <li className="pricing-card__item text text_base text_regular">Information
                                                Technology</li>
                                        </ul>
                                        <a href="#" className="pricing-card__btn btn btn_stroke-cornflower-blue a"
                                            aria-label="Choose plan pricing">Choose plan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;