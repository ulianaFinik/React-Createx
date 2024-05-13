import "./style.css"
import { useState } from "react";

const OurServices = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="our-services">
            <div className="container">
                <h2 className="our-services__title title title_2">Our services</h2>
                <div className="our-services__tabs tabs">

                    <div className="our-services__tabs__nav tabs__nav">
                        <button className={`our-services__tabs__nav-btn tabs__nav-btn text text_base text_bold button ${toggleState === 1 ? "active" : ""}`}
                            onClick={() => toggleTab(1)}>
                            Social Media
                        </button>
                        <button className={`our-services__tabs__nav-btn tabs__nav-btn text text_base text_bold button ${toggleState === 2 ? "active" : ""}`}
                            onClick={() => toggleTab(2)}>
                            SEO
                        </button>
                        <button className={`our-services__tabs__nav-btn tabs__nav-btn text text_base text_bold button ${toggleState === 3 ? "active" : ""}`}
                            onClick={() => toggleTab(3)}>
                            Research
                        </button>
                        <button className={`our-services__tabs__nav-btn tabs__nav-btn text text_base text_bold button ${toggleState === 4 ? "active" : ""}`}
                            onClick={() => toggleTab(4)}>
                            Content & PR
                        </button>
                        <button className={`our-services__tabs__nav-btn tabs__nav-btn text text_base text_bold button ${toggleState === 5 ? "active" : ""}`}
                            onClick={() => toggleTab(5)}>
                            Payed Traffic
                        </button>
                    </div>

                    <div className="our-services__tabs__content tabs__content">

                        <div className={`our-services__tabs__item tabs__item ${toggleState === 1 ? "active" : ""}`}>
                            <div className="our-services__tabs__item-wrapper tabs__item-wrapper">
                                <h3 className="our-services__tabs__item-title tabs__item-title title title_3">Social
                                    Media</h3>
                                <ul className="our-services__tabs__item-list tabs__item-list ul">
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Aenean enim tellus morbi nisl vulputate dictumst.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Nibh sapien volutpat lacus augue.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Vel in amet, placerat adipiscing est pharetra.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Gravida ornare sit in et ut sit sem id.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Ultrices pellentesque dictum enim egestas ac diam.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Sit semper enim senectus integer ut turpis et.</li>
                                </ul>
                                <div className="our-services__tabs__item-btns tabs__item-btns">
                                    <a href="#" className="btn btn_stroke btn_stroke-cornflower-blue a">Learn more</a>
                                    <a href="#" className="btn btn_fill a">Try SEO toolkit</a>
                                </div>
                            </div>
                            <img src="img/services-1.png" alt="Social" className="our-services__tabs__item-img tabs__item-img img" />
                        </div>

                        <div className={`our-services__tabs__item tabs__item ${toggleState === 2 ? "active" : ""}`} id="tab-2">
                            <div className="our-services__tabs__item-wrapper tabs__item-wrapper">
                                <h3 className="our-services__tabs__item-title tabs__item-title title title_3">Social Media</h3>
                                <ul className="our-services__tabs__item-list tabs__item-list ul">
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Aenean enim tellus morbi nisl vulputate dictumst.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Nibh sapien volutpat lacus augue.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Vel in amet, placerat adipiscing est pharetra.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Gravida ornare sit in et ut sit sem id.</li>
                                </ul>
                                <div className="our-services__tabs__item-btns tabs__item-btns">
                                    <a href="#" className="btn btn_stroke btn_stroke-cornflower-blue a">Learn more</a>
                                    <a href="#" className="btn btn_fill a">Try SEO
                                        toolkit</a>
                                </div>
                            </div>
                            <img src="img/services-2.png" alt="Social media" className="our-services__tabs__item-img tabs__item-img img" />
                        </div>

                        <div className={`our-services__tabs__item tabs__item ${toggleState === 3 ? "active" : ""}`} id="tab-3">
                            <div className="our-services__tabs__item-wrapper tabs__item-wrapper">
                                <h3 className="our-services__tabs__item-title tabs__item-title title title_3">Social
                                    Media</h3>
                                <ul className="our-services__tabs__item-list tabs__item-list ul">
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Aenean enim tellus morbi nisl vulputate dictumst.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Nibh sapien volutpat lacus augue.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Vel in amet, placerat adipiscing est pharetra.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Gravida ornare sit in et ut sit sem id.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Ultrices pellentesque dictum enim egestas ac diam.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Sit semper enim senectus integer ut turpis et.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Nibh sapien volutpat lacus augue.</li>
                                </ul>
                                <div className="our-services__tabs__item-btns tabs__item-btns">
                                    <a href="#" className="btn btn_stroke btn_stroke-cornflower-blue a">Learn more</a>
                                    <a href="#" className="btn btn_fill a">Try SEO toolkit</a>
                                </div>
                            </div>
                            <img src="img/services-3.png" alt="Social media" className="our-services__tabs__item-img tabs__item-img img" />
                        </div>

                        <div className={`our-services__tabs__item tabs__item ${toggleState === 4 ? "active" : ""}`} id="tab-4">
                            <div className="our-services__tabs__item-wrapper tabs__item-wrapper">
                                <h3 className="our-services__tabs__item-title tabs__item-title title title_3">Social
                                    Media</h3>
                                <ul className="our-services__tabs__item-list tabs__item-list ul">
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Aenean enim tellus morbi nisl vulputate dictumst.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Nibh sapien volutpat lacus augue.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Vel in amet, placerat adipiscing est pharetra.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Gravida ornare sit in et ut sit sem id.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Ultrices pellentesque dictum enim egestas ac diam.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Sit semper enim senectus integer ut turpis et.</li>
                                </ul>
                                <div className="our-services__tabs__item-btns tabs__item-btns">
                                    <a href="#" className="btn btn_stroke btn_stroke-cornflower-blue a">Learn more</a>
                                    <a href="#" className="btn btn_fill a">Try SEO
                                        toolkit</a>
                                </div>
                            </div>
                            <img src="img/services-4.png" alt="Social media" className="our-services__tabs__item-img tabs__item-img img" />
                        </div>

                        <div className={`our-services__tabs__item tabs__item ${toggleState === 5 ? "active" : ""}`} id="tab-5">
                            <div className="our-services__tabs__item-wrapper tabs__item-wrapper">
                                <h3 className="our-services__tabs__item-title tabs__item-title title title_3">Social
                                    Media</h3>
                                <ul className="our-services__tabs__item-list tabs__item-list ul">
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Aenean enim tellus morbi nisl vulputate dictumst.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Nibh sapien volutpat lacus augue.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Vel in amet, placerat adipiscing est pharetra.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Gravida ornare sit in et ut sit sem id.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Ultrices pellentesque dictum enim egestas ac diam.</li>
                                    <li
                                        className="our-services__tabs__item-item tabs__item-item text text_base text_regular">
                                        Sit semper enim senectus integer ut turpis et.</li>
                                </ul>
                                <div className="our-services__tabs__item-btns tabs__item-btns">
                                    <a href="#" className="btn btn_stroke btn_stroke-cornflower-blue a">Learn more</a>
                                    <a href="#" className="btn btn_fill a">Try SEO toolkit</a>
                                </div>
                            </div>
                            <img src="img/services-1.png" alt="Social media" className="our-services__tabs__item-img tabs__item-img img" />
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
export default OurServices;